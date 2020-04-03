# <a name="integration"></a>Integration

## Test Environment

For the integration phase, you should [visit our test environment](https://test.saferpay.com)!
There you can register your personal test account, which you then can use for testing, to try out different functions and for general evaluation.

You can find a list of test-cards and other payment means for testing [over here](https://saferpay.github.io/sndbx/paymentmeans.html)!

## Integration Guide

While these Documents are meant as a quick reference and technical specification of the Saferpay JSON-API, [the Saferpay Integration Guide](https://saferpay.github.io/sndbx/index.html) contains an in depth explanation about payment-flows, tips and tricks, as well as best practices for those, who want to integrate the JSON-API and its features for the first time.
It will also help to understand certain characteristics about the different payment methods we offer, as well as the rules you must follow, when processing vital credit card data and more.

The sequential steps of the general integration process are described in our [Step-by-step Integration-Manual](https://www.six-payment-services.com/en/site/e-commerce/support/integration.html).

## Server-to-Server code Samples

The JSON API is a modern and lightweight interface, that can be used with all shop
systems and all programming languages. Only a few steps are necessary to integrate
your online shop with Saferpay. The proceeding is mostly as follows:

1. Initialize via secure server-to-server call
1. Integrate iframe to redirect your customer
1. Authorize/ assert customer interaction via secure server-to-server call

In secure server-to-server calls you have to submit a JSON request containing
you processing instructions to the defined URLs. The URL and the JSON structure
varies depending on the action/resource you want to call. For further details check
the description of resources below.

Server-to-server calls are a secure way to submit and gather data. Hence, a server-to-server
call should always follow after the customer returns back to the shop, to gather
information about the outcome of e.g. 3D Secure.

<div class="info">
  <span class="glyphicon glyphicon-info-sign" style="color: rgb(110, 199, 215);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
  <p>  
    <strong>Important:</strong> Saferpay only supports TLS 1.2 and up, for secure connections. Please make sure, that your system is configured accordingly! <a href="https://www.six-payment-services.com/en/site/e-commerce/support/tls-faq.html">More information in our TLS-FAQ.</a>
  </p>
</div>
<br />
<div class="warning">
  <span class="glyphicon glyphicon-exclamation-sign" style="color: rgb(240, 169, 43);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
  <p>  
    <strong>Important:</strong> The redirect towards the redirectUrl via http-POST <strong>IS NOT</strong> supported. You should always use http-GET, unless specifically stated otherwise!
  </p>
</div>
<br />
<div class="danger">
  <span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
  <p>
    <strong>Caution:</strong> Please <strong>DO NOT</strong> use client side scripting languages like JavaScript to execute the server-to-server (JSON) calls directly. Clients could manipulate the code, or even try to extract the credentials, to execute refunds or other requests with malicious intentions. Always execute the requests and keep your credentials on your server, maybe by using AJAX.
  </p>
</div>
<br />
<div class="danger">
  <span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
  <p>  
    <strong>Caution:</strong> <strong>DO NOT</strong> implement a polling-process, to poll for the transaction-data. Respond with the necessary request, at the correct time (e.g. doing the assert only, if the SuccessUrl, or NotifyUrl are called). Saferpay reserves the right to otherwise deactivate, or block your account!
  </p>
</div>

--->>>

Server-to-server communication:

<div class="samples" role="tabpanel">
  <ul id="tabs" class="nav nav-tabs" data-tabs="tabs">
    <li class="active">
      <a aria-expanded="false" href="#csharp" data-toggle="tab">C#</a>
    </li>
    <li class="">
      <a aria-expanded="true" href="#java" data-toggle="tab">Java</a>
    </li>
    <li class="">
      <a aria-expanded="true" href="#php" data-toggle="tab">PHP</a>
    </li>
  </ul>
  <div id="tab-content" class="tab-content">
    <div class="tab-pane active" id="csharp">
      <pre class="prettyprint">
private object SubmitRequest(string sfpUrl, object request, string sfpLogin, string sfpPassword)
{
    // don't keep your connection alive, it's a simple request/response server call
    // for details on NoKeepAliveWebClient, see https://github.com/saferpay/jsonapi/blob/master/snippets/NoKeepAliveWebClient.cs
    using (var client = new NoKeepAliveWebClient())
    {
        string authInfo = $"{sfpLogin}:{sfpPassword}";
        client.Headers[HttpRequestHeader.Authorization] = "Basic " + Convert.ToBase64String(Encoding.UTF8.GetBytes(authInfo));
        client.Headers[HttpRequestHeader.Accept] = "application/json";
        client.Headers[HttpRequestHeader.ContentType] = "application/json; charset=utf-8";
        client.Encoding = Encoding.UTF8;
        try
        {
            var responseData = client.UploadString(sfpUrl, JsonConvert.SerializeObject(request));
            return JsonConvert.DeserializeObject(responseData);
        }
        catch (WebException we)
        {
            if (we.Response is HttpWebResponse response)
            {
                Trace.WriteLine($"Web exception occured: {response.StatusCode} {response.StatusDescription}");
                if (response.ContentLength > 0)
                {
                    using (var rs = we.Response.GetResponseStream())
                    using (var sr = new StreamReader(rs))
                    {
                        Trace.WriteLine($"{sr.ReadToEnd()}");
                    }
                }
            }
            else
            {
                Trace.WriteLine($"Web exception occured: {we.Message} ({we.Status}");
            }
            throw;
        }
    }
}
      </pre>
    </div>
    <div class="tab-pane" id="java">
      <pre class="prettyprint">
public static JsonObject sendRequest(URL sfpUrl, JsonObject request, String sfpLogin, String sfpPassword) throws IOException {
    //encode credentials
    String credential = sfpLogin + ":" + sfpPassword;
    String encodedCredentials = DatatypeConverter.printBase64Binary(credential.getBytes());

    //create connection
    HttpURLConnection connection = (HttpURLConnection) sfpUrl.openConnection();
    connection.setRequestProperty("connection", "close");
    connection.setRequestProperty("Content-Type", "application/json; charset=utf-8");
    connection.setRequestProperty("Accept", "application/json");
    connection.setRequestProperty("Authorization", "Basic " + encodedCredentials);
    connection.setRequestMethod("POST");
    connection.setDoOutput(true);
    connection.setUseCaches(false);

    //write JSON to output stream
    JsonWriter writer = Json.createWriter(connection.getOutputStream());
    writer.writeObject(request);
    writer.close();

    //send request
    int responseCode = connection.getResponseCode();

    //get correct input stream
    InputStream readerStream = responseCode == 200 ? connection.getInputStream() : connection.getErrorStream();
    JsonObject response = Json.createReader(readerStream).readObject();

    return response;
}</pre>
    </div>
    <div class="tab-pane" id="php">
      <pre class="prettyprint">
    //This is an EXAMPLE of the payload-Array.
    $payload = array(
        'RequestHeader' => array(
            'SpecVersion' => "[CURRENT SPEC-VERSION]",
            'CustomerId' => "[YOUR CUSTOMERID]",
            'RequestId' => "[REQUESTID]",
            'RetryIndicator' => 0,
            'ClientInfo' => array(
                'ShopInfo' => "My Shop",
                'OsInfo' => "Windows Server 2013"
            )
        ),
        'TerminalId' => "[YOUR TERMINALID]",
        'PaymentMethods' => array("DIRECTDEBIT","VISA"),
        'Payment' => array(
            'Amount' => array(
                'Value' => "21065",
                'CurrencyCode' => "EUR"
            ),
            'OrderId' => "123test",
            'PayerNote' => "A Note",
            'Description' => "Test_Order_123test"
        ),
        'Payer' => array(
            'IpAddress' => "192.168.178.1",
            'LanguageCode' => "en"
        ),
        'ReturnUrls' => array(
            'Success' => "https://myshop.com/success",
            'Fail' => "https://myshop.com/fail"
        ),
        'Notification' => array(
            'PayerEmail' => "payee@mailcom",
            'MerchantEmail' => "merchant@mail.com",
            'NotifyUrl' => "https://myshop/callback"
        ),
        'DeliveryAddressForm' => array(
            'Display' => true,
            'MandatoryFields' => array(
		"CITY",
		"COMPANY",
		"COUNTRY",
		"EMAIL",
		"FIRSTNAME",
		"LASTNAME",
		"PHONE",
		"SALUTATION",
		"STATE",
		"STREET",
		"ZIP"
	    )
        )
    );
    //$username and $password for the http-Basic Authentication
    //$url is the SaferpayURL eg. https://www.saferpay.com/api/Payment/v1/PaymentPage/Initialize
    //$payload is a multidimensional array, that assembles the JSON structure. Example see above!
    
    function do_curl($username,$password,$url, $payload){
        //Set Options for CURL
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_HEADER, false);
        //Return Response to Application
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        //Set Content-Headers to JSON
        curl_setopt($curl, CURLOPT_HTTPHEADER,array("Content-type: application/json","Accept: application/json; charset=utf-8"));
        //Execute call via http-POST
        curl_setopt($curl, CURLOPT_POST, true);
        //Set POST-Body
        //convert DATA-Array into a JSON-Object
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($payload));
        //WARNING!!!!!
        //This option should NOT be "false", otherwise the connection is not secured
        //You can turn it of if you're working on the test-system with no vital data
        //PLEASE NOTE:
        //Under Windows (using WAMP or XAMP) it is necessary to manually download and save the necessary SSL-Root certificates!
        //To do so, please visit: http://curl.haxx.se/docs/caextract.html and Download the .pem-file
        //Then save it to a folder where PHP has write privileges (e.g. the WAMP/XAMP-Folder itself)
        //and then put the following line into your php.ini:
        //curl.cainfo=c:\path\to\file\cacert.pem
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);
    
        //This code has to be used, if you want to use a HTTP-Basic Authentication,
        //instead of the Client Certificate!
        //This will set the authentication header and encode the password & username in Base64 for you
        //THIS IS THE DEFAULT!
        curl_setopt($curl, CURLOPT_USERPWD, $username . ":" . $password);
    
        //This code has to be used, if you want to use a Client Certificate,
        //instead of HTTP-Basic Authentication.
        //!!!!!!!!!ATTENTION!!!!!!!!
        //You either use the basic authentication OR the Client Certificate, but not both!
        //If you use the certificate, the $username, $password parameters for this function, become irrelevant,
        //as they're only necessary for the BASIC Authentication!
        //The Client Certificate is only available with Saferpay Business. See: https://saferpay.github.io/sndbx/Interfaces.html
        //curl_setopt($curl, CURLOPT_SSLCERT, "PATH/TO/certificate.pem");
        //curl_setopt($curl, CURLOPT_SSLKEY, "PATH/TO/certificate_key.pem");
    
        //CURL-Execute & catch response
        $jsonResponse = curl_exec($curl);
        //Get HTTP-Status
        //Abort if Status != 200
        $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if ($status != 200) {
            //IF ERROR
            //Get http-Body (if aplicable) from CURL-response
            $body = json_decode(curl_multi_getcontent($curl), true);
            //Build array, containing the body (Response data, like Error-messages etc.) and the http-status-code
            $response = array(
                "status" => $status . " <|> " . curl_error($curl),
                "body" => $body
            );
        } else {
            //IF OK
            //Convert response into an Array
            $body = json_decode($jsonResponse, true);
            //Build array, containing the body (Response-data) and the http-status-code
            $response = array(
                "status" => $status,
                "body" => $body
            );
        }
        //IMPORTANT!!!
        //Close connection!
        curl_close($curl);
        //$response, again, is a multi-dimensional Array, containing the status-code ($response["status"]) and the API-response (if available) itself ($response["body"])
        return $response;
    }
</pre>
    </div>
  </div>
</div>

<<<---

If you include the redirect pages into your web-page using an iframe, you can react on size changes
of the iframe content by listening to a message event containing the new sizing information.

Please note: Depending on the bank, issuer, or payment provider, the page can try to break
out of the iframe or lack telling you the actual size of the content.

--->>>

Handle JavaScript events from Saferpay (for JQuery 1.9 and higher):

````js
$(window).bind('message', function (e) {
  switch (e.originalEvent.data.message) {
    case 'css':
      $('#iframe').css('height', e.originalEvent.data.height + "px");
      break;
  }
});
````

<<<---

## Granting IP-permission

As an additional security feature, you can also grant permissions to specific IPs. This way you can control the API access even further in connection with the authentication credentials.
To do so, you need to log into the Saferpay Backoffice, for either [production](https://www.saferpay.com/BO/Login/) or [test](https://test.saferpay.com/BO/Login/), then go under **Settings > IP permissions** and enter the IP, or IP range of your network/server!
<div class="info">
  <p><strong>Note:</strong> This feature is entirely optional and only supports IPv4 addresses only!</p>
</div>

## Building the correct API URL

Every request is differentiated by its own unique request URL. This way Saferpay knows which API-function you want to access.
Combined with the base URL for either the production- or test-environment, you will get the complete API-URL.
Here is an example of how to build this URL correctly:

Base URL production system:

`https://www.saferpay.com/api`

Base URL test system:

`https://test.saferpay.com/api`

Take the correct request URL and add it to the base URL.
You can find it on the right side of the request-specification.

For instance, if you want to call [PaymentPage Initialize](index.html#Payment_v1_PaymentPage_Initialize), the request URL is:

`/Payment/v1/PaymentPage/Initialize`

Add this to the base URL and you will get the full API URL:

Full API URL production system:

`https://www.saferpay.com/api/Payment/v1/PaymentPage/Initialize`

Full API URL test system:

`https://test.saferpay.com/api/Payment/v1/PaymentPage/Initialize`
