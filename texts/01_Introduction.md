# <a name="intro"></a>Introduction

This page describes the Saferpay JSON application programming interface.

Our API is designed to have predictable, resource-oriented URLs and to use HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which can be understood by off-the-shelf HTTP clients. JSON will be returned in all responses from the API, including errors.

--->>>

<strong>Test accounts:</strong>

<a target="_blank" href="https://test.saferpay.com/BO/Welcome">Request your personal test account</a><br />
<a target="_blank" href="https://www.six-payment-services.com/en/site/e-commerce/support/testaccount.html#test-account">View shared test account data</a>

<<<---

# <a name="encoding"></a>Content Encoding

`UTF-8` must be used for text encoding (there are restrictions on allowed characters for specific fields though).

`Content-Type` and `Accept` headers should be set to `application/json` for server-to-server calls. Redirects use the standard browser types.

--->>>

HTTP Headers:

`Content-Type: application/json; charset=utf-8`

`Accept: application/json`

<<<---

# <a name="formats"></a>Formats

The Saferpay JSON Api uses unified and standardized formats. The following abbreviations for format information are used in this page:

<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Definition</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Id</td>
      <td>
        <samp>A-Za-z0-9.:-_</samp>
      </td>
      <td>Alphanumeric with dot, colon, hyphen and underscore.</td>
    </tr>
    <tr>
      <td>Numeric</td>
      <td>
        <samp>0-9</samp>
      </td>
      <td>Numbers.</td>
    </tr>
    <tr>
      <td>Boolean</td>
      <td>
        <samp>true</samp> or <samp>false</samp>
      </td>
      <td>Boolean values.</td>
    </tr>
    <tr>
      <td>Date</td>
      <td>ISO 8601 Date and Time</td>
      <td>
        ISO 8601 format, e.g. <samp>2007-12-24T18:21:25.123Z</samp> (UTC)
        or <samp>2007-12-24T19:21:25.123+01:00</samp> (CET). Max 3 digits in the fractional seconds part.
      </td>
    </tr>
  </tbody>
</table>

# <a name="authentication"></a>Authentication

Saferpay supports the mechanism of basic authentication or a client certificate for authentication of a
server (host) system.

<div class="danger">
  <p>
    <strong>Important:</strong> You must use either the Basic Authentication, <strong>OR</strong> the Client Certificate, but not both! Also make sure, that you do not send any faulty or old certificates, or authentication/accept headers. Otherwise our corporate Firewall will reject the call with a 403-Forbidden status! Furthermore, please note, that some environments do this by default. So even if you didn't implement it, the environment may do it as a default! It may be necessary to check your configuration.
  </p>
</div>

## <a name="authentication_basic"></a>HTTP basic authentication

This is the default authentication method. Technical users for the JSON API can be
created by the merchant in the Saferpay Backoffice under [**Settings > JSON API basic authentication**](https://test.saferpay.com/BO/Settings/JsonApiLogin). The password will not be stored
at SIX (only a securely salted hash thereof). There will be no password recovery
besides creating a new user / password pair from your Backoffice account.

The password must meet some complexity requirements. We suggest using / generating
dedicated passwords with a length of 16 alphanumeric characters (up to 32 characters).

<img src="https://raw.githubusercontent.com/saferpay/jsonapi/master/Images/BasicAuthScreen.PNG" alt="Basic Authentication">

--->>>

HTTP Header:

`Authorization: Basic [your base64 encoded "user_name:password"]`

<<<---

## <a name="authentication_cert"></a> HTTPS Client Certificate Authentication

Alternatively, Saferpay also supports authentication via a client certificate.

<div class="info">
  <p>
    <strong>Important:</strong> This feature is only available for Saferpay Business merchants!
  </p>
</div>

A client certificate for the JSON-API can be ordered in the Saferpay Backoffice under [**Settings > JSON API client certificate**](https://test.saferpay.com/BO/Settings/JsonApiClientCertificate).

If you have a Saferpay Business licence, you will find the HTTPS Client Certificate Authentication section under the form for HTTPS Basic Authentication.

<img src="https://raw.githubusercontent.com/saferpay/jsonapi/master/Images/BO_Client_certificate_1.png" alt="Basic Aiuthentication">

Generate the CSR as described on the page and import it using the upload button.
The signed client certificate will then be downloaded through your browser.


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
        'SpecVersion' => "1.7",
        'CustomerId' => "[YOUR CUSTOMERID]",
        'RequestId' => "aScdFewDSRFrfas2wsad3",
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
        'MandatoryFields' => array("CITY","COMPANY","COUNTRY","EMAIL","FIRSTNAME","LASTNAME","PHONE","SALUTATION","STATE","STREET","ZIP")
    )
);
//$username and $password for the http-Basic Authentication
//$url is the SaferpayURL eg. https://www.saferpay.com/api/Payment/v1/PaymentPage/Initialize
//$payload is a multidimensional array, that assembles the JSON structure. Example see above
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
    //HTTP-Basic Authentication for the Saferpay JSON-API.
    //This will set the authentication header and encode the password & username in Base64 for you
    curl_setopt($curl, CURLOPT_USERPWD, $username . ":" . $password);
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


# <a name="errorhandling"></a>Error Handling

Successfully completed requests are confirmed with an http status code of `200` and
contain the appropriate response message in the body.

If the request could not be completed successfully, this is indicated by a status code
of `400` or higher and – if possible (some errors are generated by the web server itself,
or the web application firewall and are thus outside of our control) – an error message
stating the reason of the failure is included in the body of the response. The presence
of an error message as specified in this document can be derived from the content type:
if it’s `application/json`, then there is an error message present.

--->>>

HTTP status codes:

<table class="table table-striped">
  <tr>
    <td class="text-right col-sm-2">200</td>
    <td class="col-sm-10">OK (No error)</td>
  </tr>
  <tr>
    <td class="text-right">400</td>
    <td>Validation error</td>
  </tr>
  <tr>
    <td class="text-right">401</td>
    <td>Authentication of the request failed</td>
  </tr>
  <tr>
    <td class="text-right">402</td>
    <td>Requested action failed</td>
  </tr>
  <tr>
    <td class="text-right">403</td>
    <td>Access denied</td>
  </tr>
  <tr>
    <td class="text-right">406</td>
    <td>Not acceptable (wrong accept header)</td>
  </tr>
  <tr>
    <td class="text-right">415</td>
    <td>Unsupported media type (wrong content-type header)</td>
  </tr>
  <tr>
    <td class="text-right">500</td>
    <td>Internal error</td>
  </tr>
</table>

<div class="info">
  <p>
    <strong>Info:</strong> The API timeout for requests should be 100 seconds! After that, a connection should be closed. Also, no further actions should be taken, until the request is answered or runs into a timeout, to prevent unwanted behavior.
  </p>
</div>

<<<---

## Error Message




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Behavior</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">What can be done to resolve the error?</div>
	<i class="small text-muted">
Possible values: ABORT, OTHER_MEANS, RETRY, RETRY_LATER.<br />
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ErrorName</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name / id of the error. These names will not change, so you may parse these and attach your logic to the ErrorName.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ErrorMessage</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Description of the error. The contents of this element might change without notice, so do not parse it.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TransactionId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the failed transaction, if available</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ErrorDetail</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">More details, if available. Contents may change at any time, so don’t parse it.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ProcessorName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of acquirer (if declined by acquirer) or processor</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ProcessorResult</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Result code returned by acquirer or processor</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ProcessorMessage</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Message returned by acquirer or processor</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Behavior": "ABORT",
  "ErrorName": "VALIDATION_FAILED",
  "ErrorMessage": "Request validation failed",
  "ErrorDetail": [
    "PaymentMeans.BankAccount.IBAN: The field IBAN is invalid."
  ]
}
</pre>

<<<---




--->>>

List of behaviors:

<table class="table table-striped">
  <tr>
    <td class="text-right col-sm-3">ABORT</td>
    <td class="col-sm-9">Do not retry this request. It will never succeed.</td>
  </tr>
  <tr>
    <td class="text-right">RETRY</td>
    <td>Request is valid and understood, but can't be processed at this time. This request can be retried.</td>
  </tr>
  <tr>
    <td class="text-right">RETRY_LATER</td>
    <td>This request can be retried later after certain state/ error condition has been changed.</td>
  </tr>
  <tr>
    <td class="text-right">OTHER_MEANS</td>
    <td>Special case of retry. Please provide another means of payment.</td>
  </tr>
</table>


List of error names (these names will not change, so you may parse these and attach your logic to the ErrorName):

<table class="table table-striped">
  <tr>
      <td class="text-right">ACTION_NOT_SUPPORTED</td>
      <td>
          The requested action is not supported in the given context or the action can't be executed with the request data.
      </td>
  </tr>
  <tr>
      <td class="text-right">ALIAS_INVALID</td>
      <td>
          The alias is not known or already used (in case of registration).<br />
          <i>Solution:</i> Use another alias for registration
      </td>
  </tr>
  <tr>
      <td class="text-right">AMOUNT_INVALID</td>
      <td>
          The amount does not adhere to the restrictions for this action. E.g. it might be exceeding the allowed capture amount.
      </td>
  </tr>
  <tr>
      <td class="text-right col-sm-4">AUTHENTICATION_FAILED</td>
      <td class="col-sm-8">
          Wrong password, wrong client certificate, invalid token, wrong HMAC.<br />
          <i>Solution:</i> Use proper credentials, fix HMAC calculation, use valid token
      </td>
  </tr>
  <tr>
      <td class="text-right">BLOCKED_BY_RISK_MANAGEMENT</td>
      <td>
          Action blocked by risk management<br />
          <i>Solution:</i> Unblock in Saferpay Risk Management (Backoffice)
      </td>
  </tr>
  <tr>
      <td class="text-right">CARD_CHECK_FAILED</td>
      <td>
          Invalid card number or cvc (this is only returned for the SIX-internal chard check feature for Alias/InsertDirect).<br />
          <i>Solution:</i> Let the card holder correct the entered data
      </td>
  </tr>
  <tr>
      <td class="text-right">CARD_CVC_INVALID</td>
      <td>
          Wrong cvc entered<br />
          <i>Solution:</i> Retry with correct cvc
      </td>
  </tr>
  <tr>
      <td class="text-right">CARD_CVC_REQUIRED</td>
      <td>
          Cvc not entered but required<br />
          <i>Solution:</i> Retry with cvc entered
      </td>
  </tr>
  <tr>
      <td class="text-right">CARD_EXPIRED</td>
      <td>
          Card expired<br />
          <i>Solution:</i> Use another card or correct expiry date
      </td>
  </tr>
  <tr>
      <td class="text-right">COMMUNICATION_FAILED</td>
      <td>
          The communication to the processor failed.<br />
          <i>Solution:</i> Try again or use another means of payment
      </td>
  </tr>
  <tr>
      <td class="text-right">COMMUNICATION_TIMEOUT</td>
      <td>
          Saferpay did not receive a response from the external system in time. It’s possible that an authorization was created, but Saferpay is not able to know this.<br />
          <i>Solution:</i> Check with the acquirer if there is an authorization which needs to be canceled.
      </td>
  </tr>
  <tr>
      <td class="text-right">CONDITION_NOT_SATISFIED</td>
      <td>
          The condition which was defined in the request could not be satisfied.
      </td>
  </tr>
  <tr>
      <td class="text-right">CURRENCY_INVALID</td>
      <td>
          Currency does not match referenced transaction currency.
      </td>
  </tr>
  <tr>
      <td class="text-right">GENERAL_DECLINED</td>
      <td>
          Transaction declined by unknown reason
      </td>
  </tr>
  <tr>
      <td class="text-right">INTERNAL_ERROR</td>
      <td>
          Internal error in Saferpay<br />
          <i>Solution:</i> Try again
      </td>
  </tr>
  <tr>
      <td class="text-right">NO_CONTRACT</td>
      <td>
          No contract available for the brand / currency combination.<br />
          <i>Solution:</i> Use another card or change the currency to match an existing contract or have the currency activated for the contract.
      </td>
  </tr>
  <tr>
      <td class="text-right">NO_CREDITS_AVAILABLE</td>
      <td>
          No more credits available for this account.<br />
          <i>Solution:</i> Buy more transaction credits
      </td>
  </tr>
  <tr>
      <td class="text-right">PAYER_AUTHENTICATION_REQUIRED</td>
      <td>
          Payer authentication required to proceed (soft decline).
      </td>
  </tr>
  <tr>
      <td class="text-right">PAYMENTMEANS_INVALID</td>
      <td>
          Invalid means of payment (e.g. invalid card)
      </td>
  </tr>
  <tr>
      <td class="text-right">PAYMENTMEANS_NOT_SUPPORTED</td>
      <td>
          Unsupported means of payment (e.g. non SEPA IBAN)
      </td>
  </tr>
  <tr>
      <td class="text-right">PERMISSION_DENIED</td>
      <td>
          No permission (e.g. terminal does not belong to the customer)
      </td>
  </tr>
  <tr>
      <td class="text-right">3DS_AUTHENTICATION_FAILED</td>
      <td>
          3D-secure authentication failed – the transaction must be aborted.<br />
          <i>Solution:</i> Use another card or means of payment
      </td>
  </tr>
  <tr>
      <td class="text-right">TOKEN_EXPIRED</td>
      <td>
          The token is expired.<br />
          <i>Solution:</i> Create a new token.
      </td>
  </tr>
  <tr>
      <td class="text-right">TOKEN_INVALID</td>
      <td>
          The token either does not exist for this customer or was already used
      </td>
  </tr>
  <tr>
      <td class="text-right">TRANSACTION_ABORTED</td>
      <td>
          The transaction was aborted by the payer.
      </td>
  </tr>
  <tr>
      <td class="text-right">TRANSACTION_ALREADY_CAPTURED</td>
      <td>
          Transaction already captured.
      </td>
  </tr>
  <tr>
      <td class="text-right">TRANSACTION_DECLINED</td>
      <td>
          Declined by the processor.<br />
          <i>Solution:</i> Use another card or check details.
      </td>
  </tr>
  <tr>
      <td class="text-right">TRANSACTION_IN_WRONG_STATE</td>
      <td></td>
  </tr>
  <tr>
      <td class="text-right">TRANSACTION_NOT_FOUND</td>
      <td></td>
  </tr>
  <tr>
      <td class="text-right">TRANSACTION_NOT_STARTED</td>
      <td>
          The transaction was not started by the payer. Therefore, no final result for the transaction is available.<br />
          <i>Solution:</i> Try again later.
      </td>
  </tr>
  <tr>
      <td class="text-right">UNEXPECTED_ERROR_BY_ACQUIRER</td>
      <td>
          The acquirer returned an unexpected error code.<br />
          <i>Solution:</i> Try again
      </td>
  </tr>
  <tr>
      <td class="text-right">VALIDATION_FAILED</td>
      <td>
          Validation failed.<br />
          <i>Solution:</i> Fix request
      </td>
  </tr>
</table>

<<<---


# <a name="ChapterPaymentPage"></a>Payment Page

The Payment Page Interface provides a simple and easy integration of Saferpay into your web shop, mobile app or other applications without the need to implement a user interface for card data entry. The Saferpay Payment Page can be used with a Saferpay eCommerce license as well as with a Saferpay Business license. It allows the processing of all <a target="_blank" href="https://saferpay.github.io/sndbx/index.html#paymentmethods">payment methods</a> that are available with Saferpay. Once integrated, more payment methods can be activated at any time and without major adjustments.


## <a name="ChapterPaymentPageProcess"></a> Payment Process with the Payment Page

This chapter will give you a simple overview about the transaction flow, when using the Payment Page

<div class="info">
	<p><strong>Important Note:</strong> If you have trouble understanding the transaction flow with the Payment Page in its detail, you may want to <a href="https://saferpay.github.io/sndbx/Integration_PP.html">read our Saferpay Integration guide</a>, which offers an in depth explanation on how to integrate the Payment Page, optional features, best practices and more.</p>
</div>

### Transaction-flow

1. [Payment Page Initialize](index.html#Payment_v1_PaymentPage_Initialize)
  	* Initializes the Payment and generates the RedirectUrl for the Payment Page.
2. Redirect to the RedirectUrl
3. Return to ReturnUrl depending on the outcome of the transaction. The ReturnUrls are defined in step 1!
4. [Payment Page Assert](index.html#Payment_v1_PaymentPage_Assert)
  	* Gathers all the information about the payment, like LiabilityShift through 3D Secure and more, using the Token, gathered in step 1!
5. Depending on the outcome of step 4 you may
  	* [Capture/Finalize the Transaction](index.html#Payment_v1_Transaction_Capture)
  	* [Cancel/Abort the Transaction](index.html#Payment_v1_Transaction_Cancel)
6. Transaction is finished!



## <a name="Payment_v1_PaymentPage_Initialize"></a>PaymentPage Initialize

This method can be used to start a transaction with the Payment Page which may involve either DCC and / or 3d-secure

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/PaymentPage/Initialize</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ConfigSet</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This parameter let you define your payment page config (PPConfig) by name. If this parameters is not set, your default PPConfig will be applied if available.<br> When the PPConfig can't be found (e.g. wrong name), the Saferpay basic style will be applied to the payment page.</div>
	<i class="small text-muted">
Id[1..20]<br />
				    <span>Example: <code>name of your payment page config (case-insensitive)</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay terminal id</div>
	<i class="small text-muted">
Numeric[8..8]<br />
				    <span>Example: <code>12345678</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payment</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentPagePayment">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payment (amount, currency, ...)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMethods</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Used to restrict the means of payment which are available to the payer for this transaction. If only one payment method id is set, the payment selection step will be skipped.</div>
	<i class="small text-muted">
Possible values: ALIPAY, AMEX, BANCONTACT, BONUS, DINERS, DIRECTDEBIT, EPRZELEWY, EPS, GIROPAY, IDEAL, INVOICE, JCB, MAESTRO, MASTERCARD, MYONE, PAYPAL, PAYDIREKT, POSTCARD, POSTFINANCE, SAFERPAYTEST, SOFORT, TWINT, UNIONPAY, VISA, VPAY, KLARNA.<br />
				    <span>Example: <code>[&quot;VISA&quot;, &quot;MASTERCARD&quot;]</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMethodsOptions</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_PaymentMethodsOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional. May be used to set specific options for some payment methods.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Authentication</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_StrongCustomerAuthenticationInteractive">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Strong Customer Authentication (exemptions, ...)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Wallets</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Used to control if wallets should be enabled on the payment selection page and to go directly to the given wallet (if exactly one wallet is filled and PaymentMethods is not set).</div>
	<i class="small text-muted">
Possible values: MASTERPASS, APPLEPAY.<br />
				    <span>Example: <code>[&quot;MASTERPASS&quot;]</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Payer">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payer</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RegisterAlias</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_RegisterAlias">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">If the given means of payment should be stored in Saferpay Secure Card Data storage (if applicable)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ReturnUrls</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_ReturnUrls">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Urls which are to be used to redirect the payer back to the shop if the transaction requires some kind of browser redirection (3d-secure, dcc)<br><br>These Urls are used by Saferpay to redirect the shopper back to the merchant shop. You may add query string parameters to identify your session, but please be aware that the shopper could modify these parameters inside the browser!<br> The whole url including query string parameters should be as short as possible to prevent issues with specific browsers and must not exceed 2000 characters.<br> Note: you should not add sensitive data to the query string, as its contents is plainly visible inside the browser and will be logged by our web servers.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Notification</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Notification">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Notification options</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Styling</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Styling">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Styling options</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>BillingAddressForm</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_AddressForm">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Used to have the payer enter his billing address in the payment process.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>DeliveryAddressForm</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_AddressForm">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Used to have the payer enter his delivery address in the payment process.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>CardForm</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_CardForm">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Options for card data entry form (if applicable)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Condition</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional Condition for Authorization (only 3DSv2), to control, whether or not, transactions without LiabilityShift should be accepted. <strong>Important Note:</strong> This only filters out transactions, where the condition is conclusive <strong>before</strong> the authorization itself. It is possible, that LiabilityShift is rejected after the authorization. Please always check the <strong>ThreeDs</strong> container, within the authorization-response, to be 100% sure, if LiabilityShift applies, or not!<br> Default: IF_ALLOWED_BY_SCHEME (empty)</div>
	<i class="small text-muted">
Possible values: WITH_LIABILITY_SHIFT, IF_ALLOWED_BY_SCHEME.<br />
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Order</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Order">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional order information</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RiskFactors</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_RiskFactors">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional risk factors</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request identifier]",
    "RetryIndicator": 0
  },
  "TerminalId": "[your terminal id]",
  "Payment": {
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    },
    "OrderId": "Id of the order",
    "Description": "Description of payment"
  },
  "ReturnUrls": {
    "Success": "[your shop payment success url]",
    "Fail": "[your shop payment fail url]"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Token</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Token for later referencing</div>
	<i class="small text-muted">
				    <span>Example: <code>234uhfh78234hlasdfh8234e1234</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Expiration</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Expiration date / time of the generated token in ISO 8601 format in UTC. After this time, the token won’t be accepted for any further action.</div>
	<i class="small text-muted">
				    <span>Example: <code>2011-07-14T19:43:37+01:00</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RedirectUrl</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Redirecturl for the payment page transaction. Simply add this to a "Pay Now"-button or do an automatic redirect.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://www.saferpay.com/vt2/api/PaymentPage/1234/12341234/z2p7a0plpgsd41m97wjvm5jza</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "Id of the request"
  },
  "Token": "234uhfh78234hlasdfh8234e1234",
  "Expiration": "2015-01-30T12:45:22.258+01:00",
  "RedirectUrl": "https://www.saferpay.com/vt2/api/..."
}
</pre>

<<<---





## <a name="Payment_v1_PaymentPage_Assert"></a>PaymentPage Assert

Call this function to safely check the status of the transaction from your server.

<div class="info">
<span class="glyphicon glyphicon-info-sign" style="color: rgb(110, 199, 215);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
<div>
<p><strong>Important:</strong></p>
<ul>
<li>Depending on the payment provider, the resulting transaction may either be an authorization or may already be captured (meaning the financial flow was already triggered). This will be visible in the status of the transaction container returned in the response.</li>
<li>This function can be called up to 24 hours after the transaction was initialized.</li>
<li>If the transaction failed (the payer was redirected to the Fail url or he manipulated the return url), an error response with an http status code 400 or higher containing an error message will be returned providing some information on the transaction failure.</li>
</ul>
</div>
</div>

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/PaymentPage/Assert</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Token</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Token returned by initial call.</div>
	<i class="small text-muted">
Id[1..50]<br />
				    <span>Example: <code>234uhfh78234hlasdfh8234e</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request identifier]",
    "RetryIndicator": 0
  },
  "Token": "234uhfh78234hlasdfh8234e"
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Transaction</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentTransaction">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the transaction</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_PayerInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payer / card holder</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RegistrationResult</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_RegistrationResult">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the SCD registration outcome</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Liability</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_LiabilityInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">LiabilityShift information, replaces ThreeDs Info from api version 1.8</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Dcc</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_DccInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Dcc information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>MastercardIssuerInstallments</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_MastercardIssuerInstallmentsOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Mastercard card issuer installment payment options, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>FraudPrevention</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_FraudPrevention">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains details of a performed fraud prevention check</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Transaction": {
    "Type": "PAYMENT",
    "Status": "AUTHORIZED",
    "Id": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "Date": "2015-01-30T12:45:22.258+01:00",
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    },
    "AcquirerName": "Saferpay Test Card",
    "AcquirerReference": "000000",
    "SixTransactionReference": "0:0:3:723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "ApprovalCode": "012345"
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA Saferpay Test"
    },
    "DisplayText": "9123 45xx xxxx 1234",
    "Card": {
      "MaskedNumber": "912345xxxxxx1234",
      "ExpYear": 2015,
      "ExpMonth": 9,
      "HolderName": "Max Mustermann",
      "CountryCode": "CH"
    }
  },
  "Liability": {
    "LiabilityShift": true,
    "LiableEntity": "ThreeDs",
    "ThreeDs": {
      "Authenticated": true,
      "LiabilityShift": true,
      "Xid": "ARkvCgk5Y1t/BDFFXkUPGX9DUgs=",
      "VerificationValue": "AAABBIIFmAAAAAAAAAAAAAAAAAA="
    }
  }
}
</pre>

<<<---








# <a name="ChapterTransaction"></a>Transaction

## <a name="ChapterTransactionProcess"></a> Payment Process with the Transaction Interface

This chapter will give you a simple overview about the general transaction flow, when using the Transaction Interface.

<div class="warning">
	<p><strong>Important Note:</strong> The Transaction Interface offers all sorts of options to perform transactions. This flow only describes the general flow. Furthermore, you may want to <a href="https://saferpay.github.io/sndbx/Integration_trx.html">read our Saferpay Integration guide</a>, which offers an in depth explanation on how to integrate the Transaction Interface, optional features, best practices and more.</p>
</div>

### Transaction-flow

1. [Transaction Initialize](index.html#Payment_v1_Transaction_Initialize)
  	* Initializes the Payment and generates the RedirectUrl for the [iFrame Integration](https://saferpay.github.io/sndbx/CssiFrame.html).
2. Open the RedirectUrl inside an HTML-iFrame, to show the hosted card entry form!
3. Return to Return Url depending on the outcome of the 3D Secure procedure. The ReturnUrls are defined in step 1!
4. [Transaction Authorize](index.html#Payment_v1_Transaction_Authorize)
  	* Authorizes the card, which has been gathered in step 2. Up until now, *no transaction has been made*!
5. Depending on the outcome of step 4 you may
  	* [Capture/Finalize the Transaction](index.html#Payment_v1_Transaction_Capture)
  	* [Cancel/Abort the Transaction](index.html#Payment_v1_Transaction_Cancel)
6. Transaction is finished!



## <a name="Payment_v1_Transaction_Initialize"></a>Transaction Initialize <span class="label text-mandatory"><a href= "https://saferpay.github.io/sndbx/Interfaces.html">Business license required</a></span> 

This method may be used to start a transaction which may involve either DCC and / or 3d-secure.

<div class="danger">
<span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
<p><strong>Warning:</strong> Only PCI certified merchants may submit the card-data directly, or use their own HTML form! <a href="https://saferpay.github.io/sndbx/#pci">Click here for more information!</a></p>
</div>

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/Initialize</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ConfigSet</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This parameter let you define your payment page config (PPConfig) by name. If this parameters is not set, your default PPConfig will be applied if available.<br> When the PPConfig can't be found (e.g. wrong name), the Saferpay basic style will be applied to the payment page.</div>
	<i class="small text-muted">
Id[1..20]<br />
				    <span>Example: <code>name of your payment page config (case-insensitive)</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay terminal to use for this authorization</div>
	<i class="small text-muted">
Numeric[8..8]<br />
				    <span>Example: <code>12341234</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payment</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_Payment">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payment (amount, currency, ...)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeans">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Means of payment (either card data or a reference to a previously stored card).<br> Important: Only fully PCI certified merchants may directly use the card data. If your system is not explicitly certified to handle card data directly, then use the Saferpay Secure Card Data-Storage instead. If the customer enters a new card, you may want to use the Saferpay Hosted Register Form to capture the card data through Saferpay.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Authentication</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_StrongCustomerAuthenticationInteractive">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Strong Customer Authentication (exemptions, ...)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Payer">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the payer (IP-address)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ReturnUrls</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_ReturnUrls">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Urls which are to be used to redirect the payer back to the shop if the transaction requires some kind of browser redirection (3d-secure, dcc)<br><br>These Urls are used by Saferpay to redirect the shopper back to the merchant shop. You may add query string parameters to identify your session, but please be aware that the shopper could modify these parameters inside the browser!<br> The whole url including query string parameters should be as short as possible to prevent issues with specific browsers and must not exceed 2000 characters.<br> Note: you should not add sensitive data to the query string, as its contents is plainly visible inside the browser and will be logged by our web servers.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Styling</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Styling">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Styling options</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Wallet</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Wallet">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Wallet system to be used for the transaction (this cannot be combined with PaymentMeans above).</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMethods</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Used to restrict the means of payment which are available to the payer</div>
	<i class="small text-muted">
Possible values: AMEX, BANCONTACT, BONUS, DINERS, DIRECTDEBIT, JCB, MAESTRO, MASTERCARD, MYONE, SAFERPAYTEST, UNIONPAY, VISA, VPAY. Additional values may be accepted but are ignored.<br />
				    <span>Example: <code>[&quot;VISA&quot;, &quot;MASTERCARD&quot;]</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Order</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Order">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional order information</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RiskFactors</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_RiskFactors">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional risk factors</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>CardForm</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_CardFormInTransactionInitialize">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Options for card data entry form (if applicable)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request id]",
    "RetryIndicator": 0
  },
  "TerminalId": "[your terminal id]",
  "Payment": {
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    }
  },
  "Payer": {
    "LanguageCode": "en"
  },
  "ReturnUrls": {
    "Success": "[your shop payment success url]",
    "Fail": "[your shop payment fail url]"
  },
  "Styling": {
    "CssUrl": "[your shop css url]"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Token</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id for referencing later</div>
	<i class="small text-muted">
				    <span>Example: <code>234uhfh78234hlasdfh8234e</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Expiration</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Expiration date / time of the generated token in ISO 8601 format in UTC.<br> After this time is exceeded, the token will not be accepted for any further actions except Asserts.</div>
	<i class="small text-muted">
				    <span>Example: <code>2015-01-30T13:45:22.258+02:00</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>LiabilityShift</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Indicates if liability shift to issuer is possible or not. Not present if PaymentMeans container was not present in InitializeTransaction request. True, if liability shift to issuer is possible, false if not.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RedirectRequired</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">True if a redirect must be performed to continue, false otherwise</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Redirect</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Redirect">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Mandatory if RedirectRequired is true. Contains the URL for the redirect to use for example the Saferpay hosted register form.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Token": "234uhfh78234hlasdfh8234e",
  "Expiration": "2015-01-30T12:45:22.258+01:00",
  "LiabilityShift": true,
  "RedirectRequired": true,
  "Redirect": {
    "RedirectUrl": "https://www.saferpay.com/vt2/Api/...",
    "PaymentMeansRequired": true
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_Authorize"></a>Transaction Authorize <span class="label text-mandatory"><a href= "https://saferpay.github.io/sndbx/Interfaces.html">Business license required</a></span> 

This function may be called to authorize a transaction which was started by a call to Transaction/Initialize.

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/Authorize</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Token</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Token returned by Initialize</div>
	<i class="small text-muted">
Id[1..50]<br />
				    <span>Example: <code>234uhfh78234hlasdfh8234e</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Condition</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">WITH_LIABILITY_SHIFT: the authorization will be executed if the previous 3d-secure process indicates that the liability shift to the issuer is possible <br> (liability shift may still be declined with the authorization though). This condition will be ignored for brands which Saferpay does not offer 3d-secure for.<br> ---<br> If left out, the authorization will be done if allowed, but possibly without liability shift to the issuer. See the specific result codes in the response message.</div>
	<i class="small text-muted">
Possible values: WITH_LIABILITY_SHIFT, IF_ALLOWED_BY_SCHEME.<br />
				    <span>Example: <code>WITH_LIABILITY_SHIFT</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>VerificationCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Card verification code if available</div>
	<i class="small text-muted">
Numeric[3..4]<br />
				    <span>Example: <code>123</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RegisterAlias</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_RegisterAlias">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Controls whether the given means of payment should be stored inside the Saferpay Secure Card Data storage.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request id]",
    "RetryIndicator": 0
  },
  "Token": "sdu5ymxx210y2dz1ggig2ey0o",
  "VerificationCode": "123"
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Transaction</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentTransaction">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the transaction</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_PayerInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payer / card holder</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RegistrationResult</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_RegistrationResult">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the Secure Card Data registration outcome.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>MastercardIssuerInstallments</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_MastercardIssuerInstallmentsOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Mastercard card issuer installment payment options, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Liability</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_LiabilityInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">LiabilityShift information, replaces ThreeDs Info from api version 1.8</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Dcc</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_DccInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Dcc information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>FraudPrevention</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_FraudPrevention">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains details of a performed fraud prevention check</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Transaction": {
    "Type": "PAYMENT",
    "Status": "AUTHORIZED",
    "Id": "MUOGAWA9pKr6rAv5dUKIbAjrCGYA",
    "Date": "2015-09-18T09:19:27.078Z",
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    },
    "AcquirerName": "AcquirerName",
    "AcquirerReference": "Reference",
    "SixTransactionReference": "0:0:3:MUOGAWA9pKr6rAv5dUKIbAjrCGYA",
    "ApprovalCode": "012345"
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA Saferpay Test"
    }
  },
  "DisplayText": "9123 45xx xxxx 1234",
  "Card": {
    "MaskedNumber": "912345xxxxxx1234",
    "ExpYear": 2015,
    "ExpMonth": 9,
    "HolderName": "Max Mustermann",
    "CountryCode": "CH"
  },
  "Payer": {
    "IpAddress": "1.2.3.4",
    "IpLocation": "DE"
  },
  "Liability": {
    "LiabilityShift": true,
    "LiableEntity": "ThreeDs",
    "ThreeDs": {
      "Authenticated": true,
      "LiabilityShift": true,
      "Xid": "ARkvCgk5Y1t/BDFFXkUPGX9DUgs=",
      "VerificationValue": "AAABBIIFmAAAAAAAAAAAAAAAAAA="
    }
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_QueryPaymentMeans"></a>Transaction QueryPaymentMeans <span class="label text-mandatory"><a href= "https://saferpay.github.io/sndbx/Interfaces.html">Business license required</a></span> 

This method may be used to query the payment means and payer data (address) after initialize and wallet redirect.

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/QueryPaymentMeans</p></div>

<<<---

#### Request


This function may be called to retrieve information on the means of payment which was entered / chosen by the payer after the browser is redirected to the successUrl.<br> For MasterPass, the address the payer has selected in his wallet is returned as well as the RedirectUrl for DCC if DCC was skipped by the EnableAmountAdjustment attribute in Initialize.

<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Token</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Token returned by Initialize</div>
	<i class="small text-muted">
Id[1..50]<br />
				    <span>Example: <code>234uhfh78234hlasdfh8234e</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ReturnUrls</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_ReturnUrls">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Urls which are to be used to redirect the payer back to the shop if the transaction requires some kind of browser redirection (3d-secure, dcc)<br><br>These Urls are used by Saferpay to redirect the shopper back to the merchant shop. You may add query string parameters to identify your session, but please be aware that the shopper could modify these parameters inside the browser!<br> The whole url including query string parameters should be as short as possible to prevent issues with specific browsers and must not exceed 2000 characters.<br> Note: you should not add sensitive data to the query string, as its contents is plainly visible inside the browser and will be logged by our web servers.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request id]",
    "RetryIndicator": 0
  },
  "Token": "sdu5ymxx210y2dz1ggig2ey0o"
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_PayerInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payer / card holder</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RedirectRequired</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px"></div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RedirectUrl</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Available if DCC may be performed.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA Saferpay Test"
    },
    "DisplayText": "9123 45xx xxxx 1234",
    "Card": {
      "MaskedNumber": "912345xxxxxx1234",
      "ExpYear": 2015,
      "ExpMonth": 9,
      "HolderName": "Max Mustermann",
      "CountryCode": "CH"
    }
  },
  "Payer": {
    "IpAddress": "1.2.3.4",
    "IpLocation": "DE"
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_AdjustAmount"></a>Transaction AdjustAmount <span class="label text-mandatory"><a href= "https://saferpay.github.io/sndbx/Interfaces.html">Business license required</a></span> 

This method may be used to adjust the amount after query payment means.

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/AdjustAmount</p></div>

<<<---

#### Request


This function allows a change of the authorization amount which was originally set by Initialize.<br> For the time being, this is only allowed for MasterPass business integration scenario and requires a flag having been set in the Initialize call.

<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Token</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Token returned by Initialize</div>
	<i class="small text-muted">
Id[1..50]<br />
				    <span>Example: <code>234uhfh78234hlasdfh8234e</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The new amount</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request id]",
    "RetryIndicator": 0
  },
  "Token": "sdu5ymxx210y2dz1ggig2ey0o",
  "Amount": {
    "Value": "110",
    "CurrencyCode": "CHF"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_AuthorizeDirect"></a>Transaction AuthorizeDirect <span class="label text-mandatory"><a href= "https://saferpay.github.io/sndbx/Interfaces.html">Business license required</a></span> 

This function may be used to directly authorize transactions which do not require a redirect of the customer (e.g. direct debit or recurring transactions based on a previously registered alias).

<div class="danger">
<span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
<p><strong>Warning:</strong> Only PCI certified merchants may submit the card-data directly, or use their own HTML form! <a href="https://saferpay.github.io/sndbx/#pci">Click here for more information!</a></p>
</div>
<div class="warning">
<span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
<p><strong>Important:</strong> This function does not perform 3D Secure! Only the <a href="https://saferpay.github.io/jsonapi/#ChapterPaymentPage">PaymentPage</a> or <a href="https://saferpay.github.io/jsonapi/#Payment_v1_Transaction_Initialize">Transaction Initialize</a> do support 3D Secure!</p>
</div>

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/AuthorizeDirect</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay Terminal-Id</div>
	<i class="small text-muted">
Numeric[8..8]<br />
				    <span>Example: <code>12341234</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payment</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_Payment">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payment (amount, currency, ...)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeans">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the means of payment. Important: Only fully PCI certified merchants may directly use the card data. If your system is not explicitly certified to handle card data directly, then use the Saferpay Secure Card Data-Storage instead. If the customer enters a new card, you may want to use the Saferpay Hosted Register Form to capture the card data through Saferpay.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Authentication</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_StrongCustomerAuthenticationDirect">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Strong Customer Authentication (exemptions, ...)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RegisterAlias</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_RegisterAlias">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Controls whether the given means of payment should be stored inside the Saferpay Secure Card Data storage.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Payer">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the payer (IP-address)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request id]",
    "RetryIndicator": 0
  },
  "TerminalId": "[your terminal id]",
  "Payment": {
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    },
    "Description": "Test123",
    "PayerNote": "Order123_Testshop"
  },
  "PaymentMeans": {
    "Card": {
      "Number": "912345678901234",
      "ExpYear": 2015,
      "ExpMonth": 9,
      "HolderName": "Max Mustermann",
      "VerificationCode": "123"
    }
  },
  "Authentication": {
    "Exemption": "RECURRING"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Transaction</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentTransaction">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the transaction</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_PayerInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payer / card holder</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RegistrationResult</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_RegistrationResult">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the Secure Card Data registration outcome.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>MastercardIssuerInstallments</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_MastercardIssuerInstallmentsOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Mastercard card issuer installment payment options, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Transaction": {
    "Type": "PAYMENT",
    "Status": "AUTHORIZED",
    "Id": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "Date": "2015-01-30T12:45:22.258+01:00",
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    },
    "AcquirerName": "AcquirerName",
    "AcquirerReference": "Reference",
    "SixTransactionReference": "0:0:3:723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "ApprovalCode": "012345"
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA Saferpay Test"
    },
    "DisplayText": "9123 45xx xxxx 1234",
    "Card": {
      "MaskedNumber": "912345xxxxxx1234",
      "ExpYear": 2015,
      "ExpMonth": 7,
      "HolderName": "Max Mustermann",
      "CountryCode": "CH"
    }
  },
  "Payer": {
    "IpAddress": "1.2.3.4",
    "IpLocation": "DE"
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_AuthorizeReferenced"></a>Transaction AuthorizeReferenced <span class="label text-mandatory"><a href= "https://saferpay.github.io/sndbx/Interfaces.html">Business license required</a></span> 

This method may be used to perform follow-up authorizations to an earlier transaction. At this time, the referenced (initial) transaction must have been performed setting either the recurring or installment option.

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/AuthorizeReferenced</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay Terminal-Id</div>
	<i class="small text-muted">
Numeric[8..8]<br />
				    <span>Example: <code>12341234</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payment</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_BasicPayment">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payment (amount, currency, ...)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_TransactionReference">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference to previous transaction.<br><br>Exactly one element must be set.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Authentication</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_StrongCustomerAuthenticationReferenced">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Strong Customer Authentication (exemptions, ...)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>SuppressDcc</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Used to suppress direct currency conversion</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request id]",
    "RetryIndicator": 0
  },
  "TerminalId": "[your terminal id]",
  "Payment": {
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    },
    "Description": "Test123",
    "PayerNote": "Order123_Testshop"
  },
  "Authentication": {
    "Exemption": "RECURRING"
  },
  "TransactionReference": {
    "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Transaction</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentTransaction">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the transaction</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_PayerInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payer / card holder</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Dcc</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_DccInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Dcc information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Transaction": {
    "Type": "PAYMENT",
    "Status": "AUTHORIZED",
    "Id": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "Date": "2015-01-30T12:45:22.258+01:00",
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    },
    "AcquirerName": "AcquirerName",
    "AcquirerReference": "Reference",
    "SixTransactionReference": "0:0:3:723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "ApprovalCode": "012345"
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA Saferpay Test"
    },
    "DisplayText": "9123 45xx xxxx 1234",
    "Card": {
      "MaskedNumber": "912345xxxxxx1234",
      "ExpYear": 2015,
      "ExpMonth": 7,
      "HolderName": "Max Mustermann",
      "CountryCode": "CH"
    }
  },
  "Payer": {
    "IpAddress": "1.2.3.4",
    "IpLocation": "DE"
  },
  "Dcc": {
    "PayerAmount": {
      "Value": "109",
      "CurrencyCode": "USD"
    }
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_Capture"></a>Transaction Capture

This method may be used to finalize previously authorized transactions and refunds.

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/Capture</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_TransactionReference">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference to authorization.<br><br>Exactly one element must be set.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Currency must match the original transaction currency (request will be declined if currency does not match)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Billpay</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_BillpayCapture">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional Billpay specific options.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PendingNotification</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_PendingNotification">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional pending notification capture options for Paydirekt transactions.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Marketplace</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_MarketplaceCapture">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional Marketplace capture parameters.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>MastercardIssuerInstallments</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_MastercardIssuerInstallmentsSelection">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Selected Mastercard card issuer installment payment option, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request id]",
    "RetryIndicator": 0
  },
  "TransactionReference": {
    "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>CaptureId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">CaptureId of the created capture. Must be stored for later reference (eg refund).</div>
	<i class="small text-muted">
Id[1..64]<br />
				    <span>Example: <code>ECthWpbv1SI6SAIdU2p6AIC1bppA_c</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Status</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Current status of the capture. (PENDING is only used for paydirekt at the moment)</div>
	<i class="small text-muted">
Possible values: PENDING, CAPTURED.<br />
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date and time of capture. Not set if the capture state is pending.</div>
	<i class="small text-muted">
				    <span>Example: <code>2014-04-25T08:33:44.159+01:00</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Invoice</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_InvoiceInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional infos for invoice based payments.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "CaptureId": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
  "Status": "CAPTURED",
  "Date": "2015-01-30T12:45:22.258+01:00"
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_MultipartCapture"></a>Transaction MultipartCapture

This method may be used to capture multiple parts of an authorized transaction.

<div class="info">
<p><strong>Important:</strong></p>
<ul>
<li>MultipartCapture is available for SIX Acquiring contracts <strong>only!</strong></li>
<li>Your live merchant-account needs to be configured, in order to support Multipart Captures, or the request will fail!</li>
<li>No MultipartCapture request should be sent before receiving the response of a preceding request (i.e. no parallel calls are allowed).</li>
<li>The sum of multipart captures must not exceed the authorized amount.</li>
<li>A unique OrderPartId must be used for each request.</li>
</ul>
</div>

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/MultipartCapture</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_TransactionReference">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference to authorization.<br><br>Exactly one element must be set.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Currency must match the original transaction currency (request will be declined if currency does not match)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">'PARTIAL' if more captures should be possible later on, 'FINAL' if no more captures will be done on this authorization.</div>
	<i class="small text-muted">
Possible values: PARTIAL, FINAL.<br />
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>OrderPartId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Must be unique. It identifies each individual step and is especially important for follow-up actions such as refund.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>kh9ngajrfe6wfu3d0c</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Marketplace</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_MarketplaceCapture">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional Marketplace capture parameters.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request identifier]",
    "RetryIndicator": 0
  },
  "TransactionReference": {
    "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb"
  },
  "Amount": {
    "Value": "1000",
    "CurrencyCode": "CHF"
  },
  "Type": "PARTIAL",
  "OrderPartId": "123456789",
  "Marketplace": {
    "SubmerchantId": "17312345",
    "Fee": {
      "Value": "500",
      "CurrencyCode": "CHF"
    }
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>CaptureId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">CaptureId of the created capture. Must be stored for later reference (eg refund).</div>
	<i class="small text-muted">
Id[1..64]<br />
				    <span>Example: <code>ECthWpbv1SI6SAIdU2p6AIC1bppA_c</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Status</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Current status of the capture. (PENDING is only used for paydirekt at the moment)</div>
	<i class="small text-muted">
Possible values: PENDING, CAPTURED.<br />
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date and time of capture. Not set if the capture state is pending.</div>
	<i class="small text-muted">
				    <span>Example: <code>2018-08-08T12:45:22.258+01:00</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[unique request identifier]"
  },
  "CaptureId": "723n4MAjMdhjSAhAKEUdA8jtl9jb_c",
  "Status": "CAPTURED",
  "Date": "2018-08-08T13:45:22.258+02:00"
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_AssertCapture"></a>Transaction AssertCapture

<div class="warning">
<span class="glyphicon glyphicon-exclamation-sign" style="color: rgb(240, 169, 43);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
<p><strong>Attention:</strong> This method is only supported for pending captures. A pending capture is only applicable for paydirekt transactions at the moment.</p>
</div>
This method is only supported for pending capture transactions (only used for paydirekt at the moment)

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/AssertCapture</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>CaptureReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_CaptureReference">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference to the capture.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request id]",
    "RetryIndicator": 0
  },
  "CaptureReference": {
    "CaptureId": "24218eabae254caea6f898e413fe_c"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TransactionId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the referenced transaction.</div>
	<i class="small text-muted">
AlphaNumeric[1..64]<br />
				    <span>Example: <code>723n4MAjMdhjSAhAKEUdA8jtl9jb</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">OrderId of the referenced transaction. If present.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Status</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Current status of the capture. (PENDING is only used for paydirekt at the moment)</div>
	<i class="small text-muted">
Possible values: PENDING, CAPTURED.<br />
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date and time of capture. Not set if the capture state is pending.</div>
	<i class="small text-muted">
				    <span>Example: <code>2014-04-25T08:33:44.159+01:00</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
  "Status": "CAPTURED",
  "Date": "2015-01-30T12:45:22.258+01:00"
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_MultipartFinalize"></a>Transaction MultipartFinalize

This method may be used to finalize a transaction having one or more partial captures (i.e. marks the end of partial captures).

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/MultipartFinalize</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_TransactionReference">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference to authorization.<br><br>Exactly one element must be set.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request identifier]",
    "RetryIndicator": 0
  },
  "TransactionReference": {
    "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[unique request identifier]"
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_Refund"></a>Transaction Refund <span class="label text-mandatory"><a href= "https://saferpay.github.io/sndbx/Interfaces.html">Business license required</a></span> 

This method may be called to refund a previous transaction.

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/Refund</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Refund</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_Refund">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the refund (amount, currency, ...)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>CaptureReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_CaptureReference">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference to the capture you want to refund.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PendingNotification</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_PendingNotification">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional pending notification capture options for Paydirekt transactions.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[your request id]",
    "RetryIndicator": 0
  },
  "Refund": {
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    }
  },
  "CaptureReference": {
    "CaptureId": "723n4MAjMdhjSAhAKEUdA8jtl9jb_c"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Transaction</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_RefundTransaction">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the transaction</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Dcc</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_DccInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Dcc information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Transaction": {
    "Type": "REFUND",
    "Status": "AUTHORIZED",
    "Id": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "Date": "2015-01-30T12:45:22.258+01:00",
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    },
    "AcquirerName": "Saferpay Test",
    "AcquirerReference": "000000",
    "SixTransactionReference": "0:0:3:723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "ApprovalCode": "012345"
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA Saferpay Test"
    },
    "DisplayText": "9123 45xx xxxx 1234",
    "Card": {
      "MaskedNumber": "912345xxxxxx1234",
      "ExpYear": 2015,
      "ExpMonth": 9,
      "HolderName": "Max Mustermann",
      "CountryCode": "CH"
    }
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_AssertRefund"></a>Transaction AssertRefund <span class="label text-mandatory"><a href= "https://saferpay.github.io/sndbx/Interfaces.html">Business license required</a></span> 

This method may be used to inquire the status and further information of pending refunds.

<div class="warning">
<span class="glyphicon glyphicon-exclamation-sign" style="color: rgb(240, 169, 43);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
<p><strong>Attention:</strong> This method is only supported for pending refunds. A pending refund is only applicable for paydirekt transactions at the moment.</p>
</div>

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/AssertRefund</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_TransactionReference">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference to authorization.<br><br>Exactly one element must be set.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request id]",
    "RetryIndicator": 0
  },
  "TransactionReference": {
    "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TransactionId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the referenced transaction.</div>
	<i class="small text-muted">
AlphaNumeric[1..64]<br />
				    <span>Example: <code>723n4MAjMdhjSAhAKEUdA8jtl9jb</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">OrderId of the referenced transaction. If present.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Status</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Current status of the capture. (PENDING is only used for paydirekt at the moment)</div>
	<i class="small text-muted">
Possible values: PENDING, CAPTURED.<br />
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date and time of capture. Not set if the capture state is pending.</div>
	<i class="small text-muted">
				    <span>Example: <code>2014-04-25T08:33:44.159+01:00</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
  "Status": "CAPTURED",
  "Date": "2015-01-30T12:45:22.258+01:00"
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_RefundDirect"></a>Transaction RefundDirect <span class="label text-mandatory"><a href= "https://saferpay.github.io/sndbx/Interfaces.html">Business license required</a></span> 

This method may be called to refund an amount to the given means of payment (not supported for all means of payment) without referencing a previous transaction. This might be the case if the original transaction was done with a card which is not valid any more.

<div class="danger">
<span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
<p><strong>Warning:</strong> Only PCI certified merchants may submit the card-data directly, or use their own HTML form! <a href="https://saferpay.github.io/sndbx/#pci">Click here for more information!</a></p>
</div>

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/RefundDirect</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay Terminal-Id</div>
	<i class="small text-muted">
Numeric[8..8]<br />
				    <span>Example: <code>12341234</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Refund</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_Refund">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the refund (amount, currency, ...)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeans">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the means of payment. Important: Only fully PCI certified merchants may directly use the card data.<br> If your system is not explicitly certified to handle card data directly, then use the Saferpay Secure Card Data-Storage instead.<br> If the customer enters a new card, you may want to use the Saferpay Hosted Register Form to capture the card data through Saferpay.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[your request id]",
    "RetryIndicator": 0
  },
  "TerminalId": "[your terminal id]",
  "Refund": {
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    }
  },
  "PaymentMeans": {
    "Alias": {
      "Id": "alias35nfd9mkzfw0x57iwx"
    }
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Transaction</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_RefundTransaction">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the transaction</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Dcc</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_DccInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Dcc information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Transaction": {
    "Type": "REFUND",
    "Status": "AUTHORIZED",
    "Id": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "Date": "2015-01-30T12:45:22.258+01:00",
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    },
    "AcquirerName": "Saferpay Test",
    "AcquirerReference": "000000",
    "SixTransactionReference": "0:0:3:723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "ApprovalCode": "012345"
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA Saferpay Test"
    },
    "DisplayText": "9123 45xx xxxx 1234",
    "Card": {
      "MaskedNumber": "912345xxxxxx1234",
      "ExpYear": 2015,
      "ExpMonth": 9,
      "HolderName": "Max Mustermann",
      "CountryCode": "CH"
    }
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_Cancel"></a>Transaction Cancel

This method may be used to cancel previously authorized transactions and refunds.

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/Cancel</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_TransactionReference">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference to transaction to be canceled.<br><br>Exactly one element must be set.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request id]",
    "RetryIndicator": 0
  },
  "TransactionReference": {
    "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TransactionId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the referenced transaction.</div>
	<i class="small text-muted">
				    <span>Example: <code>qiuwerhfi23h4189asdhflk23489</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">OrderId of the referenced transaction. If present.</div>
	<i class="small text-muted">
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date and time of cancel.</div>
	<i class="small text-muted">
				    <span>Example: <code>2014-04-25T08:33:44.159+01:00</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
  "OrderId": "c52ad18472354511ab2c33b59e796901",
  "Date": "2015-01-30T12:45:22.258+01:00"
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_RedirectPayment"></a>Transaction RedirectPayment <span class="label text-mandatory"><a href= "https://saferpay.github.io/sndbx/Interfaces.html">Business license required</a></span> 

<div class="danger">
<span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
<p><strong>WARNING:</strong> This feature is deprecated and replaced by the <a href="index.html#ChapterPaymentPage"><strong>Payment Page</strong></a>. Please use the parameter <strong>PaymentMethods</strong> to directly select the desired 3rd party provider!</p>
</div>

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/RedirectPayment</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay terminal to use for this authorization</div>
	<i class="small text-muted">
Numeric[8..8]<br />
				    <span>Example: <code>12341234</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payment</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_Payment">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payment (amount, currency, ...)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ServiceProvider</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Service provider to be used for this payment</div>
	<i class="small text-muted">
Possible values: PAYPAL, POSTCARD, POSTFINANCE.<br />
				    <span>Example: <code>PAYPAL</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Payer">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the payer (IP-address)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ReturnUrls</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_ReturnUrls">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Urls which are to be used to redirect the payer back to the shop if the transaction requires some kind of browser redirection (3d-secure, dcc)<br><br>These Urls are used by Saferpay to redirect the shopper back to the merchant shop. You may add query string parameters to identify your session, but please be aware that the shopper could modify these parameters inside the browser!<br> The whole url including query string parameters should be as short as possible to prevent issues with specific browsers and must not exceed 2000 characters.<br> Note: you should not add sensitive data to the query string, as its contents is plainly visible inside the browser and will be logged by our web servers.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Styling</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Styling">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Custom styling resource</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Notification</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Notification">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Notification options</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[your request id]",
    "RetryIndicator": 0
  },
  "TerminalId": "[your terminal id]",
  "Payment": {
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    }
  },
  "ServiceProvider": "PAYPAL",
  "ReturnUrls": {
    "Success": "[your shop payment success url]",
    "Fail": "[your shop payment fail url]"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Token</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id for referencing later</div>
	<i class="small text-muted">
				    <span>Example: <code>234uhfh78234hlasdfh8234e</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Expiration</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Expiration date / time of the generated token in ISO 8601 format in UTC. After this time, the token won’t be accepted for any further action.</div>
	<i class="small text-muted">
				    <span>Example: <code>2015-01-30T13:45:22.258+02:00</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RedirectUrl</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Url to redirect the browser to for payment processing</div>
	<i class="small text-muted">
				    <span>Example: <code>https://www.saferpay.com/VT2/api/...</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Token": "234uhfh78234hlasdfh8234e",
  "Expiration": "2015-01-30T12:45:22.258+01:00",
  "RedirectUrl": "https://www.saferpay.com/vt2/Api/..."
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_AssertRedirectPayment"></a>Transaction AssertRedirectPayment <span class="label text-mandatory"><a href= "https://saferpay.github.io/sndbx/Interfaces.html">Business license required</a></span> 

<div class="danger">
<span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
<p><strong>WARNING:</strong> This feature is deprecated and replaced by the <a href="index.html#ChapterPaymentPage"><strong>Payment Page</strong></a>. Please use the parameter <strong>PaymentMethods</strong> to directly select the desired 3rd party provider!</p>
</div>

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/AssertRedirectPayment</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Token</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Token returned by initial call.</div>
	<i class="small text-muted">
Id[1..50]<br />
				    <span>Example: <code>234uhfh78234hlasdfh8234e</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request identifier]",
    "RetryIndicator": 0
  },
  "Token": "234uhfh78234hlasdfh8234e"
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Transaction</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentTransaction">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the transaction</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_PayerInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payer / card holder</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Transaction": {
    "Type": "PAYMENT",
    "Status": "AUTHORIZED",
    "Id": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "Date": "2015-01-30T12:45:22.258+01:00",
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    },
    "AcquirerName": "Saferpay Test",
    "AcquirerReference": "8EZRQVT0ODW4ME525",
    "SixTransactionReference": "0:0:3:723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "ApprovalCode": "012345"
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA Saferpay Test"
    },
    "DisplayText": "9123 45xx xxxx 1234",
    "Card": {
      "Number": "912345678901234",
      "MaskedNumber": "912345xxxxxx1234",
      "ExpYear": 2022,
      "ExpMonth": 9,
      "HolderName": "Max Mustermann",
      "CountryCode": "CH"
    }
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_Inquire"></a>Transaction Inquire

This method can be used to get the details of a transaction that has been authorized successfully.
<div class="info">
<span class="glyphicon glyphicon-info-sign" style="color: rgb(110, 199, 215);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
<p><strong>Fair use:</strong></p><p>This method is not intended for polling. You have to restrict the usage of this method in order to provide a fair data access to all our customers. We may contact you if we notice the excessive usage of this function and in some exceptional cases we preserve the right to limit the access to it.</p>
</div>

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/Inquire</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_TransactionReference">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference to authorization.<br><br>Exactly one element must be set.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "1.11",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request id]",
    "RetryIndicator": 0
  },
  "TransactionReference": {
    "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Transaction</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_Transaction">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the transaction</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_PayerInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payer / card holder</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Liability</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_LiabilityInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">LiabilityShift information, replaces ThreeDs Info from api version 1.8</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Dcc</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_DccInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Dcc information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "1.11",
    "RequestId": "[your request id]"
  },
  "Transaction": {
    "Type": "PAYMENT",
    "Status": "CAPTURED",
    "Id": "UlKpE6A2UxlttAOQtnYIbCj1CpIA",
    "Date": "2019-04-05T10:49:55.76+02:00",
    "Amount": {
      "Value": "1200",
      "CurrencyCode": "CHF"
    },
    "AcquirerName": "Saferpay Test Card",
    "AcquirerReference": "32436794662",
    "SixTransactionReference": "0:0:3:723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "ApprovalCode": "012345"
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA"
    },
    "DisplayText": "xxxx xxxx xxxx 0004",
    "Card": {
      "MaskedNumber": "901050xxxxxx0004",
      "ExpYear": 2022,
      "ExpMonth": 6,
      "HolderName": "Max Mustermann",
      "CountryCode": "CH"
    }
  },
  "Liability": {
    "LiabilityShift": true,
    "LiableEntity": "ThreeDs",
    "ThreeDs": {
      "Authenticated": true,
      "LiabilityShift": true,
      "Xid": "ARkvCgk5Y1t/BDFFXkUPGX9DUgs=",
      "VerificationValue": "AAABBIIFmAAAAAAAAAAAAAAAAAA="
    }
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_AlternativePayment"></a>Transaction AlternativePayment <span class="label text-mandatory"><a href= "https://saferpay.github.io/sndbx/Interfaces.html">Business license required</a></span> 

This method can be used to authorize the payments that do not have a payment-page or
for the payments that before authorization some additional steps such as authentication should be done.

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/AlternativePayment</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay terminal to use for this authorization</div>
	<i class="small text-muted">
Numeric[8..8]<br />
				    <span>Example: <code>12341234</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payment</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_Payment">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payment (amount, currency, ...)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMethod</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Service provider to be used for this payment</div>
	<i class="small text-muted">
Possible values: BANCONTACT.<br />
				    <span>Example: <code>BANCONTACT</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMethodOptions</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_AlternativePayment_PaymentMethodOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional. May be used to set specific options for the payment method.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Payer">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the payer (IP-address)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Notification</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_AlternativePaymentNotification">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Notification options</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "1.12",
    "CustomerId": "[your customer id]",
    "RequestId": "[your request id]",
    "RetryIndicator": 0
  },
  "TerminalId": "[your terminal id]",
  "Payment": {
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    }
  },
  "PaymentMethod": "BANCONTACT"
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Token</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id for referencing later</div>
	<i class="small text-muted">
				    <span>Example: <code>234uhfh78234hlasdfh8234e</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Expiration</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Expiration date / time of the generated token in ISO 8601 format in UTC. After this time, the token won’t be accepted for any further action.</div>
	<i class="small text-muted">
				    <span>Example: <code>2015-01-30T13:45:22.258+02:00</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ProcessingData</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_AlternativePaymentProcessingData">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">data required by the merchant system to process the payment (e.g. QR-code data, intent URL, ...)<br><br>Payment method specific data required to process an alternative payment.<br> Only one container (matching the PaymentMethod of the AlternativePaymentRequest message) will be present</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Token": "234uhfh78234hlasdfh8234e",
  "Expiration": "2015-01-30T12:45:22.258+01:00",
  "ProcessingData": {
    "Bancontact": {
      "QrCodeData": "someQRcodeData",
      "IntentUrl": "https://www.saferpay.com/vt2/Api/..."
    }
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_QueryAlternativePayment"></a>Transaction QueryAlternativePayment <span class="label text-mandatory"><a href= "https://saferpay.github.io/sndbx/Interfaces.html">Business license required</a></span> 

Call this method to get information about a previously initialized alternative payment transaction

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Transaction/QueryAlternativePayment</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Token</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Token returned by initial call.</div>
	<i class="small text-muted">
Id[1..50]<br />
				    <span>Example: <code>234uhfh78234hlasdfh8234e</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request identifier]",
    "RetryIndicator": 0
  },
  "Token": "234uhfh78234hlasdfh8234e"
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Transaction</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentTransaction">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the transaction</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_PayerInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payer / card holder</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Liability</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_LiabilityInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">LiabilityShift information, replaces ThreeDs Info from api version 1.8</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "1.12",
    "RequestId": "[your request id]"
  },
  "Transaction": {
    "Type": "PAYMENT",
    "Status": "CAPTURED",
    "Id": "ChAChMA5hx89vAAzEh52AUYvxWCb",
    "CaptureId": "ChAChMA5hx89vAAzEh52AUYvxWCb",
    "Date": "2019-06-19T15:04:48.733+02:00",
    "Amount": {
      "Value": "100",
      "CurrencyCode": "EUR"
    },
    "AcquirerName": "Bancontact Saferpay Test",
    "AcquirerReference": "32332251189",
    "SixTransactionReference": "0:0:3:723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "ApprovalCode": "945011"
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "BANCONTACT",
      "Name": "Bancontact"
    },
    "DisplayText": "xxxx xxxx xxxx x000 5",
    "Card": {
      "MaskedNumber": "xxxxxxxxxxxxx0005",
      "ExpYear": 2020,
      "ExpMonth": 6,
      "CountryCode": "BE"
    }
  },
  "Liability": {
    "LiabilityShift": true,
    "LiableEntity": "ThreeDs",
    "ThreeDs": {
      "Authenticated": true,
      "LiabilityShift": true,
      "Xid": "ARkvCgk5Y1t/BDFFXkUPGX9DUgs="
    }
  }
}
</pre>

<<<---








# <a name="ChapterAliasStore"></a>Secure Card Data


## <a name="Payment_v1_Alias_Insert"></a>Alias Insert

This function may be used to insert an alias without knowledge about the card details. Therefore a redirect of the customer is required.

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Alias/Insert</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RegisterAlias</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_RegisterAlias">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Registration parameters</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of payment means to register</div>
	<i class="small text-muted">
Possible values: CARD, BANK_ACCOUNT, POSTFINANCE, TWINT.<br />
				    <span>Example: <code>CARD</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ReturnUrls</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_ReturnUrls">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Urls which are to be used to redirect the payer back to the shop.<br><br>These Urls are used by Saferpay to redirect the shopper back to the merchant shop. You may add query string parameters to identify your session, but please be aware that the shopper could modify these parameters inside the browser!<br> The whole url including query string parameters should be as short as possible to prevent issues with specific browsers and must not exceed 2000 characters.<br> Note: you should not add sensitive data to the query string, as its contents is plainly visible inside the browser and will be logged by our web servers.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Styling</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Styling">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Custom styling resource for the Hosted Register form.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>LanguageCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Language used for displaying forms.<br> <br> Code-List:<br> de - German<br> en - English<br> fr - French<br> da - Danish<br> cs - Czech<br> es - Spanish<br> hr - Croatian<br> it - Italian<br> hu - Hungarian<br> nl - Dutch<br> nn - Norwegian<br> pl - Polish<br> pt - Portuguese<br> ru - Russian<br> ro - Romanian<br> sk - Slovak<br> sl - Slovenian<br> fi - Finnish<br> sv - Swedish<br> tr - Turkish<br> el - Greek<br> ja - Japanese<br> zh - Chinese</div>
	<i class="small text-muted">
				    <span>Example: <code>de</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Check</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_AliasInsertCheck">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Parameters for checking the means of payment before registering. <b>IMPORTANT NOTE:</b> The Check function is only available for SIX Payment Services VISA and Mastercard acquiring contracts!</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMethods</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Used to restrict the means of payment which are available to the payer</div>
	<i class="small text-muted">
Possible values: AMEX, BANCONTACT, BONUS, DINERS, DIRECTDEBIT, JCB, MAESTRO, MASTERCARD, MYONE, SAFERPAYTEST, UNIONPAY, VISA, VPAY. Additional values may be accepted but are ignored.<br />
				    <span>Example: <code>[&quot;VISA&quot;, &quot;MASTERCARD&quot;]</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>CardForm</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_CardForm">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Options for card data entry form (if applicable)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_AliasPaymentMeans">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Means of payment to register</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[your request id]",
    "RetryIndicator": 0
  },
  "RegisterAlias": {
    "IdGenerator": "RANDOM"
  },
  "Type": "CARD",
  "ReturnUrls": {
    "Success": "[your shop alias registration success url]",
    "Fail": "[your shop alias registration fail url]"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Token</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id for referencing later</div>
	<i class="small text-muted">
				    <span>Example: <code>234uhfh78234hlasdfh8234e</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Expiration</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Expiration date / time of the generated token in ISO 8601 format in UTC.<br> After this time is exceeded, the token will not be accepted for any further actions except Asserts.</div>
	<i class="small text-muted">
				    <span>Example: <code>2015-01-30T13:45:22.258+02:00</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RedirectRequired</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">True if a redirect must be performed to continue, false otherwise</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Redirect</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Redirect">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Mandatory if RedirectRequired is true. Contains the URL for the redirect to use for example the Saferpay hosted register form.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Token": "234uhfh78234hlasdfh8234e",
  "Expiration": "2015-01-30T12:45:22.258+01:00",
  "RedirectRequired": true,
  "Redirect": {
    "RedirectUrl": "https://www.saferpay.com/VT2/api/...",
    "PaymentMeansRequired": false
  }
}
</pre>

<<<---





## <a name="Payment_v1_Alias_AssertInsert"></a>Alias AssertInsert

This method may be used to inquire the Alias Id and further information after a successful Alias Insert call.
This function can be called up to 24 hours after the transaction was initialized.

<div class="danger"><span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
<p><strong>Caution:</strong> Please DO NOT use the AssertInsert request for polling. You should always await the reception of the SuccessUrl.</p>
</div>

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Alias/AssertInsert</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Token</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Token returned by initial call.</div>
	<i class="small text-muted">
Id[1..50]<br />
				    <span>Example: <code>234uhfh78234hlasdfh8234e</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request identifier]",
    "RetryIndicator": 0
  },
  "Token": "234uhfh78234hlasdfh8234e"
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Alias</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_AliasInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the registered alias.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the registered means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>CheckResult</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_AliasInsertCheckResult">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Result of the Check</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Alias": {
    "Id": "alias35nfd9mkzfw0x57iwx",
    "Lifetime": 1000
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA Saferpay Test"
    },
    "DisplayText": "9123 45xx xxxx 1234",
    "Card": {
      "MaskedNumber": "912345xxxxxx1234",
      "ExpYear": 2015,
      "ExpMonth": 9,
      "HolderName": "Max Mustermann",
      "CountryCode": "CH"
    }
  }
}
</pre>

<<<---





## <a name="Payment_v1_Alias_InsertDirect"></a>Alias InsertDirect

This method may be used to insert an alias directly with card-data collected by using your own HTML form.

<div class="danger"><span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 55px;height: 75px;float: left;margin-right: 15px;margin-top: 0px;"></span>
<p><strong>Warning:</strong> Only respectively PCI certified merchants may submit the card-data directly, or use their own HTML form! <a href="https://saferpay.github.io/sndbx/#pci">Click here for more information!</a></p>
</div>

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Alias/InsertDirect</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RegisterAlias</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_RegisterAlias">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Registration parameters</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeans">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Means of payment to register</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Check</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_AliasDirectInsertCheck">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Parameters for checking the means of payment before registering. <b>IMPORTANT NOTE:</b> The Check function is only available for SIX Payment Services VISA and Mastercard acquiring contracts!</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[your request id]",
    "RetryIndicator": 0
  },
  "PaymentMeans": {
    "Card": {
      "Number": "912345678901234",
      "ExpYear": 2015,
      "ExpMonth": 9,
      "HolderName": "Max Mustermann",
      "VerificationCode": "123"
    }
  },
  "RegisterAlias": {
    "IdGenerator": "RANDOM"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Alias</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_AliasInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the registered alias.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the registered means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>CheckResult</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_AliasInsertCheckResult">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Result of the Check</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Alias": {
    "Id": "alias35nfd9mkzfw0x57iwx",
    "Lifetime": 1000
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA Saferpay Test"
    },
    "DisplayText": "9123 45xx xxxx 1234",
    "Card": {
      "MaskedNumber": "912345xxxxxx1234",
      "ExpYear": 2015,
      "ExpMonth": 9,
      "HolderName": "Max Mustermann",
      "CountryCode": "CH"
    }
  }
}
</pre>

<<<---





## <a name="Payment_v1_Alias_Update"></a>Alias Update

This method may be used to update an alias' lifetime and / or its credit card expiry date

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Alias/Update</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>UpdateAlias</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_UpdateAlias">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Update parameters</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>UpdatePaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_UpdatePaymentMeans">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Means of payment to update</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[your request id]",
    "RetryIndicator": 0
  },
  "AliasUpdate": {
    "Id": "[your alias id]",
    "LifeTime": "[your lifetime]"
  },
  "UpdatePaymentMeans": {
    "Card": {
      "ExpMonth": "[your expiry month]",
      "ExpYear": "[your expiry year]"
    }
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Alias</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_AliasInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the registered alias.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the registered means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Alias": {
    "Id": "alias35nfd9mkzfw0x57iwx",
    "Lifetime": 1000
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA Saferpay Test"
    },
    "DisplayText": "9123 45xx xxxx 1234",
    "Card": {
      "MaskedNumber": "912345xxxxxx1234",
      "ExpYear": 2015,
      "ExpMonth": 9,
      "HolderName": "Max Mustermann",
      "CountryCode": "CH"
    }
  }
}
</pre>

<<<---





## <a name="Payment_v1_Alias_Delete"></a>Alias Delete

This method may be used to delete previously inserted aliases.

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Alias/Delete</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>AliasId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The Alias you want to delete. This value is case-insensitive.</div>
	<i class="small text-muted">
Id[1..40]<br />
				    <span>Example: <code>alias35nfd9mkzfw0x57iwx</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request id]",
    "RetryIndicator": 0
  },
  "AliasId": "alias35nfd9mkzfw0x57iwx"
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  }
}
</pre>

<<<---








# <a name="ChapterBatch"></a>Batch


## <a name="Payment_v1_Batch_Close"></a>Batch Close

This chapter covers the Batch Close via API

<div class="info">
<p><strong>Note:</strong> If you want to trigger the batch-close via API, make sure, to turn the automatic batch off. Please log into the Saferpay Backoffice. Go to <strong>Settings => Terminals</strong> and select the desired terminal out of the list. Turn off the Automatic closure.</p>
</div>

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/Batch/Close</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay Terminal-Id</div>
	<i class="small text-muted">
Numeric[8..8]<br />
				    <span>Example: <code>12341234</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[unique request id]",
    "RetryIndicator": 0
  },
  "TerminalId": "[your terminal id]"
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  }
}
</pre>

<<<---








# <a name="ChapterOmniChannel"></a>OmniChannel


## <a name="Payment_v1_OmniChannel_InsertAlias"></a>OmniChannel InsertAlias

This function may be used to create an alias by providing a SixTransactionReference.

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/OmniChannel/InsertAlias</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RegisterAlias</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_RegisterAlias">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Registration parameters</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>SixTransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">SIX Transaction Reference</div>
	<i class="small text-muted">
				    <span>Example: <code>1:100002:199970683910</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[your request id]",
    "RetryIndicator": 0
  },
  "SixTransactionReference": "1:100002:1:87768996410",
  "RegisterAlias": {
    "IdGenerator": "RANDOM"
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Alias</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_AliasInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the registered alias.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the registered means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>CheckResult</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_AliasInsertCheckResult">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Result of the Check</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Alias": {
    "Id": "alias35nfd9mkzfw0x57iwx",
    "Lifetime": 1000
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA Saferpay Test"
    },
    "DisplayText": "9123 45xx xxxx 1234",
    "Card": {
      "MaskedNumber": "912345xxxxxx1234",
      "ExpYear": 2015,
      "ExpMonth": 9,
      "HolderName": "Max Mustermann",
      "CountryCode": "CH"
    }
  }
}
</pre>

<<<---





## <a name="Payment_v1_OmniChannel_AcquireTransaction"></a>OmniChannel AcquireTransaction

This function may be used to acquire an authorized transaction by providing a SixTransactionReference. This transaction can then be captured or canceled.

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /Payment/v1/OmniChannel/AcquireTransaction</p></div>

<<<---

#### Request


This request allows to acquire an OmniChannel transaction.

<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RequestHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_RequestHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay terminal id</div>
	<i class="small text-muted">
Numeric[8..8]<br />
				    <span>Example: <code>12345678</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unambiguous order identifier defined by the merchant/ shop. This identifier might be used as reference later on.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>SixTransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">SIX Transaction Reference</div>
	<i class="small text-muted">
				    <span>Example: <code>1:100002:199970683910</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "[current Spec-Version]",
    "CustomerId": "[your customer id]",
    "RequestId": "[your request id]",
    "RetryIndicator": 0
  },
  "TerminalId": "17791723",
  "SixTransactionReference": "1:100002:1:87768996410",
  "OrderId": "Id of the order"
}
</pre>

<<<---

#### Response


This response returns an acquired OmniChannel transaction.

<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ResponseHeader</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_ResponseHeader">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Transaction</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentTransaction">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the transaction</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the means of payment</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Transaction": {
    "Type": "PAYMENT",
    "Status": "AUTHORIZED",
    "Id": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "Date": "2015-01-30T12:45:22.258+01:00",
    "Amount": {
      "Value": "100",
      "CurrencyCode": "CHF"
    },
    "AcquirerName": "Saferpay Test",
    "AcquirerReference": "8EZRQVT0ODW4ME525",
    "SixTransactionReference": "0:0:3:723n4MAjMdhjSAhAKEUdA8jtl9jb",
    "ApprovalCode": "012345"
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA Saferpay Test"
    },
    "DisplayText": "9123 45xx xxxx 1234",
    "Card": {
      "Number": "912345678901234",
      "MaskedNumber": "912345xxxxxx1234",
      "ExpYear": 2015,
      "ExpMonth": 9,
      "HolderName": "Max Mustermann",
      "CountryCode": "CH"
    }
  }
}
</pre>

<<<---








# <a name="ChapterRestApi"></a>Secure PayGate API

This interface offers REST based access to various Secure PayGate features.
This enables customers to integrate those features into their systems on a technical level.

<div class="info">
    <p>
        <strong>Important Note:</strong>
        The Saferpay REST API does not use the JSON API header.
        Instead, some additional HTTP header fields are required.
    </p>
</div>

<h3>Additional HTTP Headers</h3>

Instead of the `RequestHeader` container used in the JSON API, the REST API uses additional HTTP Headers to store and transfer general information about the request.
All other requirements regarding the HTTP Headers (e.g. for <a href="#encoding">content encoding</a> and <a href="#authentication">authentication</a>) still apply.

<table class="table">
  <thead>
    <tr>
      <th>Header field</th>
      <th>Possible values</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="white-space:nowrap;">Saferpay-ApiVersion</td>
      <td>
        1.14
      </td>
      <td>Version number of the interface specification.</td>
    </tr>
    <tr>
      <td style="white-space:nowrap;">Saferpay-RequestId</td>
      <td>
        <samp style="white-space:nowrap;">Id[1..50]</samp>
      </td>
      <td>Id generated by merchant system, for debugging purposes. Should be unique for each new request. If a request is retried due to an error, use the same request id.</td>
    </tr>
  </tbody>
</table>

--->>>

HTTP Headers example:

`Saferpay-ApiVersion: 1.14`

`Saferpay-RequestId: 33e8af17-35c1-4165-a343-c1c86a320f3b`

<<<---


## <a name="rest_customers_[customerId]_terminals_[terminalId]_spg-offers"></a>SecurePayGateOffer CreateOffer

This function may be used to create a SecurePayGateOffer

--->>>

<div class="info"><p><strong>Request URL:</strong></p><p><strong>POST:</strong> /rest/customers/[customerId]/terminals/[terminalId]/spg-offers</p></div>

<<<---

#### Request




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payment</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#RestApi_Models_Data_Payment">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payment (amount, currency, ...)</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ExpirationDate</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The date until the offer should be valid in ISO 8601.<br> YYYY-MM-DD<br> Must be within the next 180 days.</div>
	<i class="small text-muted">
AlphaNumeric[11..11]<br />
				    <span>Example: <code>2019-10-20</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ConfigSet</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This parameter let you define your payment page config (PPConfig) by name. If this parameters is not set, your default PPConfig will be applied if available.<br> When the PPConfig can't be found (e.g. wrong name), the Saferpay basic style will be applied to the payment page.</div>
	<i class="small text-muted">
Id[1..20]<br />
				    <span>Example: <code>name of your payment page config (case-insensitive)</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_SpgPayer">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payer</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>BillingAddressForm</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_AddressForm">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Used to have the payer enter or change his billing address in the payment process.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RegisterAlias</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#RestApi_Models_Data_RegisterAlias">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Controls whether the means of payment used for paying the offer should be stored inside the Saferpay Secure Card Data storage.<br> If the offer is paid using a payment means that does not support being stored in the Secure Card Data storage, this parameter has no effect.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "Payment": {
    "Amount": {
      "Value": "404",
      "CurrencyCode": "CHF"
    },
    "OrderId": "094c2a7ce1374f7ca184591f123b154d",
    "Options": {
      "PreAuth": true
    }
  },
  "ExpirationDate": "2020-04-23",
  "Payer": {
    "LanguageCode": "de",
    "BillingAddress": {
      "FirstName": "John",
      "LastName": "Doe",
      "Company": "Worldline",
      "Gender": "MALE",
      "Street": "Mustergasse 123",
      "Zip": "8008",
      "City": "Zurich",
      "CountryCode": "CH",
      "Email": "payer@provider.com"
    }
  },
  "BillingAddressForm": {
    "Display": true
  }
}
</pre>

<<<---

#### Response




<table class="table">
	<thead>
		<tr>
			<th colspan="2">Arguments</th>
		</tr>
	</thead>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>OfferId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The Id of the SecurePayGate offer</div>
	<i class="small text-muted">
				    <span>Example: <code>503a3d7b-072b-400f-9e7e-8ec15191c737</code></span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentLink</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The SecurePayGate link for the payment</div>
	<i class="small text-muted">
				    <span>Example: <code>https://www.saferpay.com/SecurePayGate/Payment/123456/12345678/503a3d7b-072b-400f-9e7e-8ec15191c737</code></span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "OfferId": "503a3d7b-072b-400f-9e7e-8ec15191c737",
  "PaymentLink": "https://www.saferpay.com/SecurePayGate/Payment/123456/12345678/503a3d7b-072b-400f-9e7e-8ec15191c737"
}
</pre>

<<<---








<div class="visible-print-block" id="type-dict">
	<h4>Container Dictionary</h4>
			<h2>Container "Common_Models_Data_Address"</h2>
				<table class="table" id="Common_Models_Data_Address">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>FirstName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's first name</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>John</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LastName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's last name</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Doe</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Company</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's company</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>ACME Corp.</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Gender</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's gender</div>
	<i class="small text-muted">
Possible values: MALE, FEMALE, DIVERSE, COMPANY.<br />
				    <span>Example: <code>COMPANY</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Street</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's street</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Bakerstreet 32</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Zip</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's zip code</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>8000</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>City</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's city</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Zurich</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CountryCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's country code<br> ISO 3166-1 alpha-2 country code<br> (Non-standard: XK for Kosovo)</div>
	<i class="small text-muted">
Alphabetic[2..2]<br />
				    <span>Example: <code>CH</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Email</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's email address</div>
	<i class="small text-muted">
				    <span>Example: <code>payer@provider.com</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DateOfBirth</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's date of birth in ISO 8601 extended date notation<br> YYYY-MM-DD</div>
	<i class="small text-muted">
AlphaNumeric[11..11]<br />
				    <span>Example: <code>1990-05-31</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LegalForm</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's legal form</div>
	<i class="small text-muted">
Possible values: AG, GmbH, Misc.<br />
				    <span>Example: <code>AG</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Street2</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's street, second line. Only use this, if you need two lines. It may not be supported by all acquirers.</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Stewart House</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CountrySubdivisionCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's country subdivision code<br> ISO 3166-2 country subdivision code</div>
	<i class="small text-muted">
AlphaNumeric[1..3]<br />
				    <span>Example: <code>ZH</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Phone</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's phone number</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>+41 12 345 6789</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_Models_Data_AddressForm"</h2>
				<table class="table" id="Common_Models_Data_AddressForm">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Display</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Specifies whether to show the address form or not.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MandatoryFields</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">List of fields which the payer must enter to proceed with the payment.</div>
	<i class="small text-muted">
Possible values: CITY, COMPANY, COUNTRY, EMAIL, FIRSTNAME, LASTNAME, PHONE, SALUTATION, STATE, STREET, ZIP.<br />
				    <span>Example: <code>[&quot;FIRSTNAME&quot;, &quot;LASTNAME&quot;, &quot;PHONE&quot;]</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_Models_Data_Amount"</h2>
				<table class="table" id="Common_Models_Data_Amount">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Value</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount in minor unit (CHF 1.00 &rArr; Value=100). <b>Only Integer values will be accepted!</b></div>
	<i class="small text-muted">
				    <span>Example: <code>100</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CurrencyCode</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">ISO 4217 3-letter currency code (CHF, USD, EUR, ...)</div>
	<i class="small text-muted">
				    <span>Example: <code>CHF</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_Models_Data_Payer"</h2>
				<table class="table" id="Common_Models_Data_Payer">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IpAddress</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">IPv4 address of the card holder / payer if available. Dotted quad notation.</div>
	<i class="small text-muted">
				    <span>Example: <code>111.111.111.111</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LanguageCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Language to force Saferpay to display something to the payer in a certain language. Per default, Saferpay will determine the language, using the payers browser agent.<br> <br> Code-List:<br> de - German<br> de-ch - Swiss German<br> en - English<br> fr - French<br> da - Danish<br> cs - Czech<br> es - Spanish<br> et - Estonian<br> hr - Croatian<br> it - Italian<br> hu - Hungarian<br> lv - Latvian<br> lt - Lithuanian<br> nl - Dutch<br> nn - Norwegian<br> pl - Polish<br> pt - Portuguese<br> ru - Russian<br> ro - Romanian<br> sk - Slovak<br> sl - Slovenian<br> fi - Finnish<br> sv - Swedish<br> tr - Turkish<br> el - Greek<br> ja - Japanese<br> zh - Chinese</div>
	<i class="small text-muted">
				    <span>Example: <code>de</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DeliveryAddress</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Address">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the payers delivery address</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BillingAddress</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Address">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the payers billing address</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payer identifier defined by the merchant / shop. Use a unique id for your customer (a UUID is highly recommended).<br> For GDPR reasons, we don't recommend using an id which contains personal data (eg. no name).</div>
	<i class="small text-muted">
Id[1..50]<br />
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_Models_Data_PaymentOptions"</h2>
				<table class="table" id="Common_Models_Data_PaymentOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PreAuth</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Indicates the desired transaction type. When set to true the transaction is processed as a pre-authorization otherwise as a final authorization. Please note that not all payment methods support both options and the effective transaction type is determined by Saferpay.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_Models_Data_SpgPayer"</h2>
				<table class="table" id="Common_Models_Data_SpgPayer">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IpAddress</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">IPv4 address of the card holder / payer if available. Dotted quad notation.</div>
	<i class="small text-muted">
				    <span>Example: <code>111.111.111.111</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LanguageCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Language to force Saferpay to display something to the payer in a certain language. Per default, Saferpay will determine the language, using the payers browser agent.<br> <br> Code-List:<br> de - German<br> de-ch - Swiss German<br> en - English<br> fr - French<br> da - Danish<br> cs - Czech<br> es - Spanish<br> et - Estonian<br> hr - Croatian<br> it - Italian<br> hu - Hungarian<br> lv - Latvian<br> lt - Lithuanian<br> nl - Dutch<br> nn - Norwegian<br> pl - Polish<br> pt - Portuguese<br> ru - Russian<br> ro - Romanian<br> sk - Slovak<br> sl - Slovenian<br> fi - Finnish<br> sv - Swedish<br> tr - Turkish<br> el - Greek<br> ja - Japanese<br> zh - Chinese</div>
	<i class="small text-muted">
				    <span>Example: <code>de</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DeliveryAddress</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Address">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the payers delivery address</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BillingAddress</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Address">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the payers billing address</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_RequestHeader"</h2>
				<table class="table" id="Common_RequestHeader">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SpecVersion</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Version number of the interface specification. For new implementations, the newest Version should be used.</div>
	<i class="small text-muted">
Possible values: 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19<br />
				    <span>Example: <code>1.19</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CustomerId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay customer id. Part of the Saferpay AccountID, which has the following format: 123123-12345678. The first Value is your CustomerID.</div>
	<i class="small text-muted">
Numeric[1..8]<br />
				    <span>Example: <code>123123</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>RequestId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id generated by merchant system, for debugging purposes. Should be unique for each new request. If a request is retried due to an error, use the same request id. In this case, the <strong>RetryIndicator</strong> should be increased instead, to indicate a subsequent attempt.</div>
	<i class="small text-muted">
Id[1..50]<br />
				    <span>Example: <code>33e8af17-35c1-4165-a343-c1c86a320f3b</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>RetryIndicator</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">0 if this specific request is attempted for the first time, >=1 if it is a retry.</div>
	<i class="small text-muted">
Range: inclusive between 0 and 9<br />
				    <span>Example: <code>0</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ClientInfo</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_ClientInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the caller (merchant host)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_ResponseHeader"</h2>
				<table class="table" id="Common_ResponseHeader">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>RequestId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">RequestId of the original request header</div>
	<i class="small text-muted">
Id[1..50]<br />
				    <span>Example: <code>33e8af17-35c1-4165-a343-c1c86a320f3b</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SpecVersion</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Version number of the interface specification.</div>
	<i class="small text-muted">
Possible values: 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19<br />
				    <span>Example: <code>1.19</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_AlipayOptions"</h2>
				<table class="table" id="Payment_Models_AlipayOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LocalWallet</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Preselect the Alipay local wallet. May only be used in conjunction with special Alipay integrations.</div>
	<i class="small text-muted">
Iso885915[1..64]<br />
				    <span>Example: <code>&quot;TNG&quot;</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_AlternativePayment_BancontactPaymentMethodOptions"</h2>
				<table class="table" id="Payment_Models_AlternativePayment_BancontactPaymentMethodOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AppDefaultRedirectUrl</strong><br />
	<span class="text-muted small">
				URI
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This URL is called by the bancontact payment app when the payer cancels the payment.<br> The maximum allowed length for this URL is 256 characters.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AppCompletionRedirectUrl</strong><br />
	<span class="text-muted small">
				URI
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This URL is called by the bancontact payment app once the payment is authorized successfully. <br> The maximum allowed length for this URL is 256 characters.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_AlternativePayment_PaymentMethodOptions"</h2>
				<table class="table" id="Payment_Models_AlternativePayment_PaymentMethodOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Bancontact</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_AlternativePayment_BancontactPaymentMethodOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">bancontact-specific options for this payment</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_CaptureReference"</h2>
				<table class="table" id="Payment_Models_CaptureReference">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CaptureId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the referenced capture.</div>
	<i class="small text-muted">
Id[1..64]<br />
				    <span>Example: <code>jCUC8IAQ1OCptA5I8jpzAMxC5nWA_c</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TransactionId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the referenced transaction. This should only be used if you don't have the CaptureId of the referenced Capture (probably, because it was performed with an older SpecVersion)</div>
	<i class="small text-muted">
AlphaNumeric[1..64]<br />
				    <span>Example: <code>723n4MAjMdhjSAhAKEUdA8jtl9jb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unambiguous OrderId of the referenced transaction.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderPartId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">OrderPartId of the referenced capture if a partial capture should be referenced and the CaptureId/TransactionId of the partial capture is not available.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>kh9ngajrfe6wfu3d0c</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Alias"</h2>
				<table class="table" id="Payment_Models_Data_Alias">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id / name of the alias. This value is case-insensitive.</div>
	<i class="small text-muted">
Id[1..40]<br />
				    <span>Example: <code>alias35nfd9mkzfw0x57iwx</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>VerificationCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Verification code (CVV, CVC) if applicable (if the alias referenced is a card).</div>
	<i class="small text-muted">
Numeric[3..4]<br />
				    <span>Example: <code>123</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasAuthenticationResult"</h2>
				<table class="table" id="Payment_Models_Data_AliasAuthenticationResult">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Result</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The result of the card holder authentication.</div>
	<i class="small text-muted">
Possible values: OK, NOT_SUPPORTED.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Message</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">More details, if available. Contents may change at any time, so don’t parse it.</div>
	<i class="small text-muted">
				    <span>Example: <code>Card holder authentication with 3DSv2 successful.</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Xid</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Transaction Id, given by the MPI. References the 3D Secure version 2 process.</div>
	<i class="small text-muted">
				    <span>Example: <code>1ef5b3db-3b97-47df-8272-320d0bd18ab5</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasAuthenticationResultBase"</h2>
				<table class="table" id="Payment_Models_Data_AliasAuthenticationResultBase">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Result</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The result of the card holder authentication.</div>
	<i class="small text-muted">
Possible values: OK, NOT_SUPPORTED.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Message</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">More details, if available. Contents may change at any time, so don’t parse it.</div>
	<i class="small text-muted">
				    <span>Example: <code>Card holder authentication with 3DSv2 successful.</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasDirectInsertCheck"</h2>
				<table class="table" id="Payment_Models_Data_AliasDirectInsertCheck">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of check to perform.</div>
	<i class="small text-muted">
Possible values: ONLINE.<br />
				    <span>Example: <code>ONLINE</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay Terminal-Id to be used for checking.</div>
	<i class="small text-muted">
Numeric[8..8]<br />
				    <span>Example: <code>12341234</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasInfo"</h2>
				<table class="table" id="Payment_Models_Data_AliasInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id / name of the alias</div>
	<i class="small text-muted">
				    <span>Example: <code>alias35nfd9mkzfw0x57iwx</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Lifetime</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Number of days this card is stored within Saferpay. Minimum 1 day, maximum 1600 days.</div>
	<i class="small text-muted">
				    <span>Example: <code>1000</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasInsertCheck"</h2>
				<table class="table" id="Payment_Models_Data_AliasInsertCheck">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of check to perform.</div>
	<i class="small text-muted">
Possible values: ONLINE, ONLINE_STRONG.<br />
				    <span>Example: <code>ONLINE</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay Terminal-Id to be used for checking.</div>
	<i class="small text-muted">
Numeric[8..8]<br />
				    <span>Example: <code>12341234</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasInsertCheckResult"</h2>
				<table class="table" id="Payment_Models_Data_AliasInsertCheckResult">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Result</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The result of the card check.</div>
	<i class="small text-muted">
Possible values: OK, OK_AUTHENTICATED, NOT_PERFORMED.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Message</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">More details, if available. Contents may change at any time, so don’t parse it.</div>
	<i class="small text-muted">
				    <span>Example: <code>Online card check was successful.</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Authentication</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_AliasAuthenticationResult">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">More details about the card holder authentication.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasPaymentMeans"</h2>
				<table class="table" id="Payment_Models_Data_AliasPaymentMeans">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SaferpayFields</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_SaferpayFields">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payment means data collected with SaferpayFields.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AlternativePaymentNotification"</h2>
				<table class="table" id="Payment_Models_Data_AlternativePaymentNotification">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MerchantEmails</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Email addresses to which a confirmation email will be sent to the merchants after successful authorizations.<br> A maximum of 10 email addresses is allowed.</div>
	<i class="small text-muted">
				    <span>Example: <code>[&quot;merchant1@saferpay.com&quot;, &quot;merchant2@saferpay.com&quot;]</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerEmail</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Email address to which a confirmation email will be sent to the payer after successful authorizations.</div>
	<i class="small text-muted">
				    <span>Example: <code>payer@saferpay.com</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>StateNotificationUrl</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				URI
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Url to which Saferpay will send the asynchronous confirmation for the transaction. Supported schemes are http and https. You also have to make sure to support the GET-method.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/notify</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AlternativePaymentProcessingData"</h2>
				<table class="table" id="Payment_Models_Data_AlternativePaymentProcessingData">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Bancontact</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_BancontactProcessingData">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Bancontact specific data for processing payment</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_BancontactProcessingData"</h2>
				<table class="table" id="Payment_Models_Data_BancontactProcessingData">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>QrCodeData</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Data which should be integrated into a QR code. In order to make the scanning as easy as possible,<br> the recommended format of QR code encoding is version 3, with lower error rate correction level<br> in character mode, resulting with a 29 x 29 pixels image maximum.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IntentUrl</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Url to be used for payment on the same device (web-to-app or app-to-app switch)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_BankAccount"</h2>
				<table class="table" id="Payment_Models_Data_BankAccount">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IBAN</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">International Bank Account Number in electronical format (without spaces).</div>
	<i class="small text-muted">
AlphaNumeric[1..50]<br />
				    <span>Example: <code>DE12500105170648489890</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HolderName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the account holder.</div>
	<i class="small text-muted">
Iso885915[1..50]<br />
				    <span>Example: <code>John Doe</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BIC</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Bank Identifier Code without spaces.</div>
	<i class="small text-muted">
AlphaNumeric[8..11]<br />
				    <span>Example: <code>INGDDEFFXXX</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BankName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the Bank.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_BankAccountInfo"</h2>
				<table class="table" id="Payment_Models_Data_BankAccountInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IBAN</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">International Bank Account Number in electronical format (without spaces).</div>
	<i class="small text-muted">
AlphaNumeric[1..50]<br />
				    <span>Example: <code>DE12500105170648489890</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HolderName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the account holder.</div>
	<i class="small text-muted">
Iso885915[1..50]<br />
				    <span>Example: <code>John Doe</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BIC</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Bank Identifier Code without spaces.</div>
	<i class="small text-muted">
AlphaNumeric[8..11]<br />
				    <span>Example: <code>INGDDEFFXXX</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BankName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the Bank.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CountryCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">ISO 2-letter country code of the IBAN origin (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>CH</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_BasicPayment"</h2>
				<table class="table" id="Payment_Models_Data_BasicPayment">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount data (currency, value, etc.)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
					<span>
				<span class="text-recommended">recommended</span>,
			</span>
		string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unambiguous order identifier defined by the merchant / shop. This identifier might be used as reference later on.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerNote</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Text which will be printed on payer's debit note. Supported by SIX Acquiring. No guarantee that it will show up on the payer's debit note, because his bank has to support it too.<br> Please note that maximum allowed characters are rarely supported. It's usually around 10-12.</div>
	<i class="small text-muted">
Utf8[1..50]<br />
				    <span>Example: <code>Payernote</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">A human readable description provided by the merchant that can be displayed in web sites.</div>
	<i class="small text-muted">
Utf8[1..1000]<br />
				    <span>Example: <code>Description</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_BillpayCapture"</h2>
				<table class="table" id="Payment_Models_Data_BillpayCapture">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DelayInDays</strong><br />
	<span class="text-muted small">
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Number of days to delay the due date of the invoice / direct debit (see billpay for specifics)</div>
	<i class="small text-muted">
				    <span>Example: <code>10</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Brand"</h2>
				<table class="table" id="Payment_Models_Data_Brand">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PaymentMethod</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">alphanumeric id of the payment method / brand</div>
	<i class="small text-muted">
Possible values: ALIPAY, AMEX, BANCONTACT, BONUS, DINERS, DIRECTDEBIT, EPRZELEWY, EPS, GIROPAY, IDEAL, INVOICE, JCB, MAESTRO, MASTERCARD, MYONE, PAYPAL, PAYDIREKT, POSTCARD, POSTFINANCE, SAFERPAYTEST, SOFORT, TWINT, UNIONPAY, VISA, VPAY, KLARNA.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Name</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the Brand (Visa, Mastercard, an so on – might change over time, only use for display, never for parsing). Only use it for display, never for parsing and/or mapping! Use PaymentMethod instead.</div>
	<i class="small text-muted">
				    <span>Example: <code>SaferpayTestCard</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Card"</h2>
				<table class="table" id="Payment_Models_Data_Card">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Number</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Card number without separators</div>
	<i class="small text-muted">
				    <span>Example: <code>1234123412341234</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExpYear</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Year of expiration</div>
	<i class="small text-muted">
Range: inclusive between 2000 and 9999<br />
				    <span>Example: <code>2015</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExpMonth</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Month of expiration (eg 9 for September)</div>
	<i class="small text-muted">
Range: inclusive between 1 and 12<br />
				    <span>Example: <code>9</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HolderName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the card holder</div>
	<i class="small text-muted">
Utf8[1..50]<br />
				    <span>Example: <code>John Doe</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>VerificationCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Verification code (CVV, CVC) if applicable</div>
	<i class="small text-muted">
Numeric[3..4]<br />
				    <span>Example: <code>123</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_CardForm"</h2>
				<table class="table" id="Payment_Models_Data_CardForm">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HolderName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This parameter lets you customize the holder name field on the card entry form. Per default, a mandatory holder name field is shown.</div>
	<i class="small text-muted">
Possible values: NONE, MANDATORY.<br />
				    <span>Example: <code>MANDATORY</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_CardFormInTransactionInitialize"</h2>
				<table class="table" id="Payment_Models_Data_CardFormInTransactionInitialize">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HolderName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This parameter lets you customize the holder name field on the card entry form. Per default, a mandatory holder name field is shown.</div>
	<i class="small text-muted">
Possible values: NONE, MANDATORY.<br />
				    <span>Example: <code>MANDATORY</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>VerificationCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This parameter can be used to display an entry form to request Verification Code (CVV, CVC) in case that an alias is used as PaymentMeans. Note that not all brands support Verification Code.</div>
	<i class="small text-muted">
Possible values: NONE, MANDATORY.<br />
				    <span>Example: <code>MANDATORY</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_CardInfo"</h2>
				<table class="table" id="Payment_Models_Data_CardInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MaskedNumber</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Masked card number</div>
	<i class="small text-muted">
				    <span>Example: <code>912345xxxxxx1234</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExpYear</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Year of expiration</div>
	<i class="small text-muted">
				    <span>Example: <code>2015</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExpMonth</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Month of expiration (eg 9 for September)</div>
	<i class="small text-muted">
				    <span>Example: <code>9</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HolderName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the card holder (if known)</div>
	<i class="small text-muted">
				    <span>Example: <code>John Doe</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HolderSegment</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The Segment of card holder. Only returned for Alias/AssertInsert, Alias/InsertDirect and Alias/Update calls if available.</div>
	<i class="small text-muted">
Possible values: UNSPECIFIED, CONSUMER, CORPORATE, CORPORATE_AND_CONSUMER.<br />
				    <span>Example: <code>CORPORATE</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CountryCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">ISO 2-letter country code of the card origin (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>CH</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HashValue</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The HashValue, if the hash generation is configured for the customer.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_ClientInfo"</h2>
				<table class="table" id="Payment_Models_Data_ClientInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ShopInfo</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name and version of the shop software</div>
	<i class="small text-muted">
Iso885915[1..100]<br />
				    <span>Example: <code>My Shop</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OsInfo</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the operating system</div>
	<i class="small text-muted">
Iso885915[1..100]<br />
				    <span>Example: <code>Windows Server 2013</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_CustomPlan"</h2>
				<table class="table" id="Payment_Models_Data_CustomPlan">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MinimumNumberOfInstallments</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Maximum Number of Installments. Valid values are 2–99 and<br> MaximumNumberOfInstallments must be bigger or equal MinimumNumberOfInstallments.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MaximumNumberOfInstallments</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Minimum Number of Installments. Valid values are 2–99 and<br> MinimumNumberOfInstallments must be smaller or equal MaximumNumberOfInstallments.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>InterestRate</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Interest rate in hundredth of a percent. e.g. value 125 means 1.25%.<br> Valid values are 0-99999</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>InstallmentFee</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Installment Fee</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AnnualPercentageRate</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Annual percentage rate in hundreth of a percent. e.g. value 125 means 1.25%.<br> Valid values are 0-99999</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TotalAmountDue</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Total Amount Due</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_DccInfo"</h2>
				<table class="table" id="Payment_Models_Data_DccInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerAmount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount in payer’s currency</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_DirectDebitInfo"</h2>
				<table class="table" id="Payment_Models_Data_DirectDebitInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MandateId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The unique Mandate reference, required for german direct debit payments.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CreditorId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Creditor id, required for german direct debit payments.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_IdealOptions"</h2>
				<table class="table" id="Payment_Models_Data_IdealOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IssuerId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Preselect the iDEAL issuer. If specified together with PaymentMethods preselection of iDEAL,<br> the user is redirected directly to the issuer bank.<br> If the IssuerId is set, it is mandatory to use iDEAL in PaymentMethods.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_InstallmentOptions"</h2>
				<table class="table" id="Payment_Models_Data_InstallmentOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Initial</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">If set to true, the authorization may later be referenced for installment followup transactions.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_InstallmentPlan"</h2>
				<table class="table" id="Payment_Models_Data_InstallmentPlan">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>NumberOfInstallments</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Number of Installments. Valid values are 2–99.</div>
	<i class="small text-muted">
Range: inclusive between 2 and 99<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>InterestRate</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Interest rate in hundredth of a percent. e.g. value 125 means 1.25%.<br> Valid values are 0-99999</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>InstallmentFee</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Installment Fee</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AnnualPercentageRate</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Annual percentage rate in hundredth of a percent. e.g. value 125 means 1.25%.<br> Valid values are 0-99999</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>FirstInstallmentAmount</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">First Installment Amount</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SubsequentInstallmentAmount</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Subsequent Installment Amount</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TotalAmountDue</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Total Amount Due</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_InvoiceInfo"</h2>
				<table class="table" id="Payment_Models_Data_InvoiceInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Payee</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_BankAccount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payee, eg billpay, who is responsible for collecting the bill</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ReasonForTransfer</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The reason for transfer to be stated when paying the invoice (transfer of funds)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DueDate</strong><br />
	<span class="text-muted small">
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The date by which the invoice needs to be settled</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_LiabilityInfo"</h2>
				<table class="table" id="Payment_Models_Data_LiabilityInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LiabilityShift</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Is liability shifted for this transaction</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LiableEntity</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Indicates who takes the liability for the transaction</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ThreeDs</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_ThreeDsInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Details about ThreeDs if applicable</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_MarketplaceCapture"</h2>
				<table class="table" id="Payment_Models_Data_MarketplaceCapture">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SubmerchantId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The id of the marketplace submerchant on whose behalf the capture or refund capture is being made.</div>
	<i class="small text-muted">
Id[1..15]<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Fee</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The marketplace fee that will be charged from the marketplace to the submerchant.<br> The properties Fee and FeeRefund cannot be used simultaneously.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>FeeRefund</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The fee amount that will be refunded from the marketplace to the submerchant.<br> The properties Fee and FeeRefund cannot be used simultaneously.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_MastercardIssuerInstallmentsOptions"</h2>
				<table class="table" id="Payment_Models_Data_MastercardIssuerInstallmentsOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>InstallmentPlans</strong><br />
	<span class="text-muted small">
				
				<span>array of <a class="type-details in" href="#Payment_Models_Data_InstallmentPlan">object</a>s</span>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">A maximum number of 12 fixed installment plans<br> If InstallmentPlans is present, CustomPlan must not be present</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CustomPlan</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_CustomPlan">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">An installment plan with customizable numbers of installments<br> If CustomPlan is present, InstallmentPlans must not be present<br><br>An installment plan with customizable numbers of installments</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ReceiptFreeText</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Receipt Free Text</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_MastercardIssuerInstallmentsSelection"</h2>
				<table class="table" id="Payment_Models_Data_MastercardIssuerInstallmentsSelection">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ChosenPlan</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_InstallmentPlan">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Installment Payment Data, if applicable<br><br>A single, fixed installment plan</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Notification"</h2>
				<table class="table" id="Payment_Models_Data_Notification">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MerchantEmails</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Email addresses to which a confirmation email will be sent to the merchants after successful authorizations.<br> A maximum of 10 email addresses is allowed.</div>
	<i class="small text-muted">
				    <span>Example: <code>[&quot;merchant1@saferpay.com&quot;, &quot;merchant2@saferpay.com&quot;]</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerEmail</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Email address to which a confirmation email will be sent to the payer after successful authorizations.</div>
	<i class="small text-muted">
				    <span>Example: <code>payer@saferpay.com</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>NotifyUrl</strong><br />
	<span class="text-muted small">
					<span>
				<span class="text-recommended">recommended</span>,
			</span>
		string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Url to which Saferpay will send the asynchronous confirmation for the transaction. Supported schemes are http and https. You also have to make sure to support the GET-method.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/notify</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Order"</h2>
				<table class="table" id="Payment_Models_Data_Order">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Items</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<span>array of <a class="type-details in" href="#Payment_Models_Data_OrderItem">object</a>s</span>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Order items</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_OrderItem"</h2>
				<table class="table" id="Payment_Models_Data_OrderItem">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Order item type</div>
	<i class="small text-muted">
Possible values: DIGITAL, PHYSICAL, SERVICE, GIFTCARD, DISCOUNT, SHIPPINGFEE, SALESTAX, SURCHARGE.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Product id</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>C123192</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>VariantId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Product variant id</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>C123192-red</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Name</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Product name</div>
	<i class="small text-muted">
Utf8[1..200]<br />
				    <span>Example: <code>red swiss army knife</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CategoryName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Category name</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>knives</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Product description</div>
	<i class="small text-muted">
Utf8[1..200]<br />
				    <span>Example: <code>The well known swiss army knife</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Quantity</strong><br />
	<span class="text-muted small">
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The quantity of the order item</div>
	<i class="small text-muted">
				    <span>Example: <code>3</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>UnitPrice</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Price per single item in minor unit (CHF 2.00 &rArr; Value=200). <b>Only Integer values will be accepted!</b></div>
	<i class="small text-muted">
				    <span>Example: <code>200</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IsPreOrder</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Flag, which indicates that the order item is a pre order. Per default, it is not a pre order.</div>
	<i class="small text-muted">
				    <span>Example: <code>true</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TaxRate</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Tax rate of the item price in hundredth of a percent. e.g. value 125 means 1.25%<br> Valid values are 0-99999</div>
	<i class="small text-muted">
Range: inclusive between 0 and 99999<br />
				    <span>Example: <code>2100</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TaxAmount</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Tax amount which is included in the item price</div>
	<i class="small text-muted">
				    <span>Example: <code>42</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DiscountAmount</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Discount amount including tax</div>
	<i class="small text-muted">
				    <span>Example: <code>10</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PayerInfo"</h2>
				<table class="table" id="Payment_Models_Data_PayerInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payer identifier defined by the merchant / shop.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IpAddress</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">IPv4 address of the card holder / payer if available. Dotted quad notation.</div>
	<i class="small text-muted">
				    <span>Example: <code>111.111.111.111</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IpLocation</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The location the IpAddress, if available. This might be a valid country code or a special value for 'non-country' locations (anonymous proxy, satellite phone, ...).</div>
	<i class="small text-muted">
				    <span>Example: <code>NZ</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DeliveryAddress</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Address">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px"></div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BillingAddress</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Address">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px"></div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PayerProfile"</h2>
				<table class="table" id="Payment_Models_Data_PayerProfile">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HasAccount</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Does the payer have an account?</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HasPassword</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Does the payer have a password?</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PasswordForgotten</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Was the password forgotten by the payer in the current session?</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>FirstName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's first name</div>
	<i class="small text-muted">
Utf8[1..100]<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LastName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's last name</div>
	<i class="small text-muted">
Utf8[1..100]<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Company</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's company</div>
	<i class="small text-muted">
Utf8[1..100]<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DateOfBirth</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's date of birth (ISO 8601)<br> YYYY-MM-DD</div>
	<i class="small text-muted">
AlphaNumeric[11..11]<br />
				    <span>Example: <code>1990-05-31</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LastLoginDate</strong><br />
	<span class="text-muted small">
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's last login (ISO 8601)</div>
	<i class="small text-muted">
				    <span>Example: <code>2018-05-25T18:12:43Z
            2018-05-25T19:12:43+01:00</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Gender</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's gender</div>
	<i class="small text-muted">
Possible values: MALE, FEMALE, DIVERSE, COMPANY.<br />
				    <span>Example: <code>COMPANY</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CreationDate</strong><br />
	<span class="text-muted small">
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date and Time (ISO 8601) when user account was created</div>
	<i class="small text-muted">
				    <span>Example: <code>2018-05-25T18:12:43Z
            2018-05-25T19:12:43+01:00</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PasswordLastChangeDate</strong><br />
	<span class="text-muted small">
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date and Time (ISO 8601) when the account password was changed last time</div>
	<i class="small text-muted">
				    <span>Example: <code>2018-05-25T18:12:43Z
            2018-05-25T19:12:43+01:00</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Email</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's email address</div>
	<i class="small text-muted">
				    <span>Example: <code>payer@provider.com</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SecondaryEmail</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's secondary email address</div>
	<i class="small text-muted">
				    <span>Example: <code>payer_secondary@provider.com</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Phone</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Phone">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's phone numbers</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Payment"</h2>
				<table class="table" id="Payment_Models_Data_Payment">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount data (currency, value, etc.)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
					<span>
				<span class="text-recommended">recommended</span>,
			</span>
		string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unambiguous order identifier defined by the merchant / shop. This identifier might be used as reference later on.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerNote</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Text which will be printed on payer's debit note. Supported by SIX Acquiring. No guarantee that it will show up on the payer's debit note, because his bank has to support it too.<br> Please note that maximum allowed characters are rarely supported. It's usually around 10-12.</div>
	<i class="small text-muted">
Utf8[1..50]<br />
				    <span>Example: <code>Payernote</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">A human readable description provided by the merchant that can be displayed in web sites.</div>
	<i class="small text-muted">
Utf8[1..1000]<br />
				    <span>Example: <code>Description</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MandateId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Mandate reference of the payment. Needed for German direct debits (ELV) only. The value has to be unique.</div>
	<i class="small text-muted">
Id[1..35]<br />
				    <span>Example: <code>MandateId</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Options</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_PaymentOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Specific payment options</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Recurring</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_RecurringOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Recurring options – cannot be combined with Installment.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Installment</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_InstallmentOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Installment options – cannot be combined with Recurring.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PaymentMeans"</h2>
				<table class="table" id="Payment_Models_Data_PaymentMeans">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SaferpayFields</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_SaferpayFields">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payment means data collected with SaferpayFields.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Card</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Card">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Card data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BankAccount</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_BankAccount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Bank account data for direct debit transaction</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Alias</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Alias">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Alias data if payment means was registered with Secure Card Data before.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PaymentMeansInfo"</h2>
				<table class="table" id="Payment_Models_Data_PaymentMeansInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Brand</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_Brand">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Brand information</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DisplayText</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Means of payment formatted / masked for display purposes</div>
	<i class="small text-muted">
				    <span>Example: <code>DisplayText</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Wallet</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of Wallet, if the transaction was done by a wallet</div>
	<i class="small text-muted">
				    <span>Example: <code>MasterPass</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Card</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_CardInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Card data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BankAccount</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_BankAccountInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Bank account data for direct debit transactions.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Twint</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_TwintInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Twint data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PaymentPagePayment"</h2>
				<table class="table" id="Payment_Models_Data_PaymentPagePayment">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount data (currency, value, etc.)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
					<span>
				<span class="text-recommended">recommended</span>,
			</span>
		string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unambiguous order identifier defined by the merchant / shop. This identifier might be used as reference later on.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerNote</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Text which will be printed on payer's debit note. Supported by SIX Acquiring. No guarantee that it will show up on the payer's debit note, because his bank has to support it too.<br> Please note that maximum allowed characters are rarely supported. It's usually around 10-12.</div>
	<i class="small text-muted">
Utf8[1..50]<br />
				    <span>Example: <code>Payernote</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">A human readable description provided by the merchant that will be displayed in Payment Page.</div>
	<i class="small text-muted">
Utf8[1..1000]<br />
				    <span>Example: <code>Description of payment</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MandateId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Mandate reference of the payment. Needed for German direct debits (ELV) only. The value has to be unique.</div>
	<i class="small text-muted">
Id[1..35]<br />
				    <span>Example: <code>MandateId</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Options</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_PaymentOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Specific payment options</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Recurring</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_RecurringOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Recurring options – cannot be combined with Installment.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Installment</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_InstallmentOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Installment options – cannot be combined with Recurring.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PaymentTransaction"</h2>
				<table class="table" id="Payment_Models_Data_PaymentTransaction">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of transaction. One of 'PAYMENT'</div>
	<i class="small text-muted">
Possible values: PAYMENT.<br />
				    <span>Example: <code>PAYMENT</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Status</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Current status of the transaction. One of 'AUTHORIZED','CANCELED', 'CAPTURED' or 'PENDING' (PENDING is only used for paydirekt at the moment)</div>
	<i class="small text-muted">
Possible values: AUTHORIZED, CANCELED, CAPTURED, PENDING.<br />
				    <span>Example: <code>AUTHORIZED</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique Saferpay transaction id. Used to reference the transaction in any further step.</div>
	<i class="small text-muted">
				    <span>Example: <code>K5OYS9Ad6Ex4rASU1IM1b3CEU8bb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CaptureId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique Saferpay capture id.<br> Available if the transaction was already captured (Status: CAPTURED).<br> Must be stored for later reference (eg refund).</div>
	<i class="small text-muted">
Id[1..64]<br />
				    <span>Example: <code>ECthWpbv1SI6SAIdU2p6AIC1bppA</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date / time of the authorization</div>
	<i class="small text-muted">
				    <span>Example: <code>2011-09-23T14:57:23.023+02.00</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount (currency, value, etc.) that has been authorized.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">OrderId given with request</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AcquirerName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the acquirer</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerName</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AcquirerReference</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference id of the acquirer (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SixTransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique SIX transaction reference.</div>
	<i class="small text-muted">
				    <span>Example: <code>0:0:3:K5OYS9Ad6Ex4rASU1IM1b3CEU8bb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ApprovalCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Approval id of the acquirer (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DirectDebit</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_DirectDebitInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Direct Debit information, if applicable</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Invoice</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_InvoiceInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Invoice information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PendingNotification"</h2>
				<table class="table" id="Payment_Models_Data_PendingNotification">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MerchantEmails</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Email addresses to which a confirmation email will be sent to the merchants after successful authorizations.<br> A maximum of 10 email addresses is allowed.</div>
	<i class="small text-muted">
				    <span>Example: <code>[&quot;merchant1@saferpay.com&quot;, &quot;merchant2@saferpay.com&quot;]</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>NotifyUrl</strong><br />
	<span class="text-muted small">
					<span>
				<span class="text-recommended">recommended</span>,
			</span>
		string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Url which is called by Saferpay if an action could not be completed synchronously and was reported with a ‘pending’ state (eg CAPTURE_PENDING). Up until now, this is only applicable for Paydirekt transactions.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/pendingnotify</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Phone"</h2>
				<table class="table" id="Payment_Models_Data_Phone">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Main</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's main phone number</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>+41 12 345 6789</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Mobile</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's mobile number</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>+41 79 345 6789</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Work</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's work phone number</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>+41 12 345 6789</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RecurringOptions"</h2>
				<table class="table" id="Payment_Models_Data_RecurringOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Initial</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">If set to true, the authorization may later be referenced for recurring followup transactions.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Redirect"</h2>
				<table class="table" id="Payment_Models_Data_Redirect">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>RedirectUrl</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Redirect-URL. Used to either redirect the payer or let him enter his means of payment.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://www.saferpay.com/VT2/api/...</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PaymentMeansRequired</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">True, if the given URL must be used as the target of a form containing card data entered by the card holder. If ‘false’, either a GET or POST redirect without additional data may be performed.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Refund"</h2>
				<table class="table" id="Payment_Models_Data_Refund">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
					<span>
				<span class="text-recommended">recommended</span>,
			</span>
		string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference defined by the merchant.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Description provided by merchant</div>
	<i class="small text-muted">
Utf8[1..1000]<br />
				    <span>Example: <code>Description</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RefundTransaction"</h2>
				<table class="table" id="Payment_Models_Data_RefundTransaction">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of transaction. One of 'REFUND'</div>
	<i class="small text-muted">
Possible values: REFUND.<br />
				    <span>Example: <code>REFUND</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Status</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Current status of the transaction. One of 'AUTHORIZED','CANCELED', 'CAPTURED' or 'PENDING' (PENDING is only used for paydirekt at the moment)</div>
	<i class="small text-muted">
Possible values: AUTHORIZED, CANCELED, CAPTURED, PENDING.<br />
				    <span>Example: <code>AUTHORIZED</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique Saferpay transaction id. Used to reference the transaction in any further step.</div>
	<i class="small text-muted">
				    <span>Example: <code>K5OYS9Ad6Ex4rASU1IM1b3CEU8bb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CaptureId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique Saferpay capture id.<br> Available if the transaction was already captured (Status: CAPTURED).<br> Must be stored for later reference (eg refund).</div>
	<i class="small text-muted">
Id[1..64]<br />
				    <span>Example: <code>ECthWpbv1SI6SAIdU2p6AIC1bppA</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date / time of the authorization</div>
	<i class="small text-muted">
				    <span>Example: <code>2011-09-23T14:57:23.023+02.00</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount (currency, value, etc.) that has been authorized.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">OrderId given with request</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AcquirerName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the acquirer</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerName</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AcquirerReference</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference id of the acquirer (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SixTransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique SIX transaction reference.</div>
	<i class="small text-muted">
				    <span>Example: <code>0:0:3:K5OYS9Ad6Ex4rASU1IM1b3CEU8bb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ApprovalCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Approval id of the acquirer (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DirectDebit</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_DirectDebitInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Direct Debit information, if applicable</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Invoice</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_InvoiceInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Invoice information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RegisterAlias"</h2>
				<table class="table" id="Payment_Models_Data_RegisterAlias">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IdGenerator</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id generator to be used by Saferpay.</div>
	<i class="small text-muted">
Possible values: MANUAL, RANDOM, RANDOM_UNIQUE.<br />
				    <span>Example: <code>MANUAL</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Alias id to be used for registration if not generated by Saferpay. Mandatory if IdGenerator is 'MANUAL'. This value is case-insensitive.</div>
	<i class="small text-muted">
Id[1..40]<br />
				    <span>Example: <code>alias35nfd9mkzfw0x57iwx</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Lifetime</strong><br />
	<span class="text-muted small">
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Number of days this card is to be stored within Saferpay. If not filled, the default lifetime will be used.</div>
	<i class="small text-muted">
Range: inclusive between 1 and 1600<br />
				    <span>Example: <code>1000</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RegistrationErrorInfo"</h2>
				<table class="table" id="Payment_Models_Data_RegistrationErrorInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ErrorName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name / id of the error.</div>
	<i class="small text-muted">
				    <span>Example: <code>ErrorName</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ErrorMessage</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Description of the error.</div>
	<i class="small text-muted">
				    <span>Example: <code>ErrorMessage</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RegistrationResult"</h2>
				<table class="table" id="Payment_Models_Data_RegistrationResult">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Success</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Result of registration</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Alias</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_AliasInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">If Success is 'true', information about the alias</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Error</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_RegistrationErrorInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">If Success is 'false', information on why the registration failed</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AuthenticationResult</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_AliasAuthenticationResultBase">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">contains information whether the alias is saved with the strong authentication details or not.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_ReturnUrls"</h2>
				<table class="table" id="Payment_Models_Data_ReturnUrls">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Success</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Return url for successful transaction</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/success</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Fail</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Return url for failed transaction</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/fail</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Abort</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Return url for transaction aborted by the payer.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/abort</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RiskFactors"</h2>
				<table class="table" id="Payment_Models_Data_RiskFactors">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DeliveryType</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Delivery method</div>
	<i class="small text-muted">
Possible values: EMAIL, SHOP, HOMEDELIVERY, PICKUP, HQ.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerProfile</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_PayerProfile">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payer relevant information</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IsB2B</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Is the transaction B2B?</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_SaferpayFields"</h2>
				<table class="table" id="Payment_Models_Data_SaferpayFields">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Token</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay Fields token</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_StrongCustomerAuthenticationDirect"</h2>
				<table class="table" id="Payment_Models_Data_StrongCustomerAuthenticationDirect">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Exemption</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of Exemption</div>
	<i class="small text-muted">
Possible values: LOW_VALUE, TRANSACTION_RISK_ANALYSIS, RECURRING.<br />
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_StrongCustomerAuthenticationInteractive"</h2>
				<table class="table" id="Payment_Models_Data_StrongCustomerAuthenticationInteractive">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Exemption</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of Exemption</div>
	<i class="small text-muted">
Possible values: LOW_VALUE, TRANSACTION_RISK_ANALYSIS.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ThreeDsChallenge</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">3DS Secure challenge options</div>
	<i class="small text-muted">
Possible values: AVOID, FORCE.<br />
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_StrongCustomerAuthenticationReferenced"</h2>
				<table class="table" id="Payment_Models_Data_StrongCustomerAuthenticationReferenced">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Exemption</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of Exemption</div>
	<i class="small text-muted">
Possible values: RECURRING.<br />
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Styling"</h2>
				<table class="table" id="Payment_Models_Data_Styling">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CssUrl</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px"><strong>DEPRECATED:</strong>: This feature will be removed in one of the next versions. Consider using payment page config (PPConfig) or Saferpay Fields instead.<br> <br> Custom styling resource (url) which will be referenced in web pages displayed by Saferpay to apply your custom styling.<br> This file must be hosted on a SSL/TLS secured web server (the url must start with https://).<br> If a custom CSS is provided, any design related settings set in the payment page config (PPConfig) will be ignored and the default design will be used.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/merchant.css</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ContentSecurityEnabled</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">When enabled, then ContentSecurity/SAQ-A is requested, which leads to the CSS being loaded from the saferpay server.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Theme</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This parameter let you customize the appearance of the displayed payment pages. Per default a lightweight responsive styling will be applied.<br> If you don't want any styling use 'NONE'.</div>
	<i class="small text-muted">
Possible values: DEFAULT, SIX, NONE.<br />
				    <span>Example: <code>DEFAULT</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_ThreeDsInfo"</h2>
				<table class="table" id="Payment_Models_Data_ThreeDsInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Authenticated</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Indicates, whether the payer has successfuly authenticated him/herself or not.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LiabilityShift</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Indicates whether liability shift to issuer is possible or not. Not present if PaymentMeans container was not present in Initialize request. True, if liability shift to issuer is possible, false if not (only SSL transaction). <br> Please note, that the authentification can be true, but the liabilityshift is false. The issuer has the right to deny the liabiliy shift during the authorization. You can continue to capture the payment here, but we recommend to cancel unsecure payments.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Xid</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Transaction Id, given by the MPI. References the 3D Secure process.</div>
	<i class="small text-muted">
				    <span>Example: <code>ARkvCgk5Y1t/BDFFXkUPGX9DUgs= for 3D Secure version 1 /
            1ef5b3db-3b97-47df-8272-320d0bd18ab5 for 3D Secure version 2</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>VerificationValue</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The Authentication Value generated by the card issuer's 3D Secure Access Control Server. Available only for 3D Secure 1.</div>
	<i class="small text-muted">
				    <span>Example: <code>AAABBIIFmAAAAAAAAAAAAAAAAAA=</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Transaction"</h2>
				<table class="table" id="Payment_Models_Data_Transaction">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of transaction. One of 'PAYMENT', 'REFUND'</div>
	<i class="small text-muted">
Possible values: PAYMENT, REFUND.<br />
				    <span>Example: <code>PAYMENT</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Status</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Current status of the transaction. One of 'AUTHORIZED','CANCELED', 'CAPTURED' or 'PENDING' (PENDING is only used for paydirekt at the moment)</div>
	<i class="small text-muted">
Possible values: AUTHORIZED, CANCELED, CAPTURED, PENDING.<br />
				    <span>Example: <code>AUTHORIZED</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique Saferpay transaction id. Used to reference the transaction in any further step.</div>
	<i class="small text-muted">
				    <span>Example: <code>K5OYS9Ad6Ex4rASU1IM1b3CEU8bb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CaptureId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique Saferpay capture id.<br> Available if the transaction was already captured (Status: CAPTURED).<br> Must be stored for later reference (eg refund).</div>
	<i class="small text-muted">
Id[1..64]<br />
				    <span>Example: <code>ECthWpbv1SI6SAIdU2p6AIC1bppA</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date / time of the authorization</div>
	<i class="small text-muted">
				    <span>Example: <code>2011-09-23T14:57:23.023+02.00</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount (currency, value, etc.) that has been authorized.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">OrderId given with request</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AcquirerName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the acquirer</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerName</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AcquirerReference</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference id of the acquirer (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SixTransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique SIX transaction reference.</div>
	<i class="small text-muted">
				    <span>Example: <code>0:0:3:K5OYS9Ad6Ex4rASU1IM1b3CEU8bb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ApprovalCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Approval id of the acquirer (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DirectDebit</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_DirectDebitInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Direct Debit information, if applicable</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Invoice</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_InvoiceInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Invoice information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_TransactionReference"</h2>
				<table class="table" id="Payment_Models_Data_TransactionReference">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TransactionId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the referenced transaction.</div>
	<i class="small text-muted">
AlphaNumeric[1..64]<br />
				    <span>Example: <code>723n4MAjMdhjSAhAKEUdA8jtl9jb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unambiguous OrderId of the referenced transaction.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_TwintInfo"</h2>
				<table class="table" id="Payment_Models_Data_TwintInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CertificateExpirationDate</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Twint token expiry date</div>
	<i class="small text-muted">
				    <span>Example: <code>2019-11-08T12:29:37.000+01:00</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_UpdateAlias"</h2>
				<table class="table" id="Payment_Models_Data_UpdateAlias">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The id of the alias that should be updated.. This value is case-insensitive.</div>
	<i class="small text-muted">
Id[1..40]<br />
				    <span>Example: <code>alias35nfd9mkzfw0x57iwx</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Lifetime</strong><br />
	<span class="text-muted small">
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Number of days this card is to be stored within Saferpay.</div>
	<i class="small text-muted">
Range: inclusive between 1 and 1600<br />
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_UpdateCreditCard"</h2>
				<table class="table" id="Payment_Models_Data_UpdateCreditCard">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExpYear</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Year of expiration</div>
	<i class="small text-muted">
Range: inclusive between 2000 and 9999<br />
				    <span>Example: <code>2015</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExpMonth</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Month of expiration (eg 9 for September)</div>
	<i class="small text-muted">
Range: inclusive between 1 and 12<br />
				    <span>Example: <code>9</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_UpdatePaymentMeans"</h2>
				<table class="table" id="Payment_Models_Data_UpdatePaymentMeans">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Card</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_UpdateCreditCard">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Card data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Wallet"</h2>
				<table class="table" id="Payment_Models_Data_Wallet">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The type of the wallet.</div>
	<i class="small text-muted">
Possible values: MASTERPASS.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PaymentMethods</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">May be used to restrict the brands which should be allowed. If not sent, we use all brands configured on this terminal.</div>
	<i class="small text-muted">
Possible values: ALIPAY, AMEX, BANCONTACT, BONUS, DINERS, DIRECTDEBIT, EPRZELEWY, EPS, GIROPAY, IDEAL, INVOICE, JCB, MAESTRO, MASTERCARD, MYONE, PAYPAL, PAYDIREKT, POSTCARD, POSTFINANCE, SAFERPAYTEST, SOFORT, TWINT, UNIONPAY, VISA, VPAY, KLARNA.<br />
				    <span>Example: <code>[&quot;VISA&quot;, &quot;MASTERCARD&quot;]</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>RequestDeliveryAddress</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Have the payer select a delivery address in his wallet. If not sent, no address is obtained from wallet.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>EnableAmountAdjustment</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This option is very specific for the MasterPass business scenario where the amount may be adjusted after the redirect to MasterPass and QueryPaymentMeans to allow for changes in shipping costs. <br> If this is set to true, DCC will not be done right away (but may be done later with an additional redirect). <br> DON’T USE THIS IF YOU’RE NOT SURE – IT’S PROBABLY NOT WHAT YOU WANT!</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_FraudPrevention"</h2>
				<table class="table" id="Payment_Models_FraudPrevention">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Result</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The result of the performed fraud prevention check</div>
	<i class="small text-muted">
Possible values: APPROVED, MANUAL_REVIEW.<br />
				    <span>Example: <code>APPROVED</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_PaymentMethodsOptions"</h2>
				<table class="table" id="Payment_Models_PaymentMethodsOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Alipay</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_AlipayOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional. Options which only apply to Alipay.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Ideal</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_IdealOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional. Options which only apply to IDEAL.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "RestApi_Models_Data_Payment"</h2>
				<table class="table" id="RestApi_Models_Data_Payment">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_Amount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount data (currency, value, etc.)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unambiguous order identifier defined by the merchant / shop. This identifier might be used as reference later on.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">A human readable description provided by the merchant that will be displayed in Payment Page.</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Description of payment</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Options</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_PaymentOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Specific payment options</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "RestApi_Models_Data_RegisterAlias"</h2>
				<table class="table" id="RestApi_Models_Data_RegisterAlias">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IdGenerator</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id generator to be used by Saferpay.</div>
	<i class="small text-muted">
Possible values: RANDOM.<br />
				    <span>Example: <code>RANDOM</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>

</div>


# <a name="changelog"></a> Changelog

## Table of Contents
- [Version 1.15](#v1.15.0.0.20200121)
- [Version 1.14](#v1.14.0.0.20191119)
- [Version 1.13](#v1.13.0.0.20190917)
- [Version 1.12](#v1.12.0.0.20190716)
- [Version 1.11](#v1.11.0.0.20190521)
- [Version 1.10](#v1.10.0.0.20181113)
- [Version 1.9](#v1.9.0.20180515)
- [Version 1.8](#v1.8.0.20171114)
- [Version 1.7](#v1.7.0.20170822)
- [Version 1.6](#v1.6.0.20170404)
- [Version 1.5](#v1.5.0.20170207)
- [Version 1.4](#v1.4.0.20161015)

## <a name="v1.15.0.0.20200121"></a> Version 1.15 (released 2020-01-21)
- available on Sandbox: 2020-01-07
- introduced version 1.15
- added value `1.15` for _SpecVersion_
- added container _Ideal_ to [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request to enable the preselection of an iDEAL issuer
- added value `APPLEPAY` for _Wallets_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request to enable the preselection of Apple Pay


## <a name="v1.14.0.0.20191119"></a> Version 1.14 (released 2019-11-19)
- available on Sandbox: 2019-11-05
- introduced version 1.14
- added value `1.14` for _SpecVersion_
- added new [Saferpay Secure PayGate API](index.html#ChapterRestApi) for automated creation of Saferpay Secure PayGate offers
- added container _SaferpayFields_ to container _PaymentMeans_ in [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) and [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) requests


## <a name="v1.13.0.0.20190917"></a> Version 1.13 (released 2019-09-17)
- available on Sandbox: 2019-09-10
- introduced version 1.13
- added value `1.13` for _SpecVersion_
- added container _PaymentMethodsOptions_ to  [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) to allow the setting of payment method specific options. Currently used for Bancontact specific settings
- added new country code value _XK_ (Kosovo) to field CountryCode
- added new value _DIVERSE_ in field Gender
- added new error code _PAYMENTMEANS_NOT_SUPPORTED_ with corresponding error message "Unsupported means of payment (e.g. non SEPA IBAN)"


## <a name="v1.12.0.0.20190716"></a> Version 1.12 (released 2019-07-16)
- available on Sandbox: 2019-07-02
- introduced version 1.12
- added value `1.12` for _SpecVersion_
- added method [Alias/Update](index.html#Payment_v1_Alias_Update) for updating the details of an alias
- added methods [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) and [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) which enable the implementation of customized checkout processes (i.e. in mobile shopping apps) - at the moment only available for Bancontact
- replaced _MerchantEmail_ with _MerchantEmails_ that can be filled with up to 10 email addresses to which the payment notification is sent

## <a name="v1.11.0.0.20190521"></a> Version 1.11 (released 2019-05-21)
- available on Sandbox: 2019-05-07
- introduced version 1.11
- added value `1.11` for _SpecVersion_
- added method [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire) for inquiring the details of previous transaction
- added container _PaymentMethodsOptions_ to [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) to allow for setting payment method specific options
- added _Condition_ to [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request to control the minimum authentication level 
- added _HolderSegment_ to [Alias/AssertInsert](index.html#Payment_v1_Alias_AssertInsert) and [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) responses to indicate the segment (e.g. Corporate) of the card holder
- added _CaptureId_ to [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/Refund](index.html#Payment_v1_Transaction_Refund), [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) and [OmniChannel/AcquireTransaction](index.html#Payment_v1_OmniChannel_AcquireTransaction) responses to identify a (partial) capture for refunding
- added value `IF_ALLOWED_BY_SCHEME` for field `Condition` in [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize) request
- added value `ALIPAY` for _Brand.PaymentMethod_, _PaymentMethods_ and _Wallet.PaymentMethods_

## <a name="v1.10.0.0.20181113"></a> Version 1.10 (released 2018-11-13)
- available on Sandbox: 2018-08-14
- introduced version 1.10
- added value `1.10` for _SpecVersion_
- added method [Transaction/MultipartCapture](index.html#Payment_v1_Transaction_MultipartCapture) for capturing multiple parts of a transaction also supporting enhanced clearing for marketplaces
- added method [Transaction/MultipartFinalize](index.html#Payment_v1_Transaction_MultipartFinalize) to finalize a transaction that is still open for capturing additional parts
- added container _MarketPlace_ to [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) request to support enhanced clearing for marketplaces
- removed container _Partial_ from [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) request - see method [Transaction/MultipartCapture](index.html#Payment_v1_Transaction_MultipartCapture) for details
- replaced _TransactionId_ and _OrderId_ with _CaptureId_ in [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) response to uniquely identify captures
- replaced container _TransactionReference_ with _CaptureReference_ in [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) and [Transaction/AssertCapture](index.html#Payment_v1_Transaction_AssertCapture) request to uniquely identify captures
- added value `TWINT` for field `Type` in [Alias/Insert](index.html#Payment_v1_Alias_Insert) requests (only available in the Sandbox environment until further notice)
- added subcontainer `Twint` to container `PaymentMeans`

## <a name="v1.9.0.20180515"></a> Version 1.9 (released 2018-05-15)
- available on Sandbox: 2018-04-26
- introduced version 1.9
- added value `1.9` for _SpecVersion_
- replaced container _ThreeDs_ from previous versions with _Liability_ in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) responses

## <a name="v1.8.0.20171114"></a> Version 1.8 (released 2017-11-14)
- available on Sandbox: 2017-11-02
- introduced version 1.8
- added value `1.8` for _SpecVersion_
- added _SixTransactionReference_ to [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) and [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) responses for Omni Channel use cases
- added method [OmniChannel/AcquireTransaction](index.html#Payment_v1_OmniChannel_AcquireTransaction) for retrieving a previously authorized transaction from another channel
- added method [OmniChannel/InsertAlias](index.html#Payment_v1_OmniChannel_InsertAlias) for retrieving an alias for a card used in a previously authorized transaction from another channel
- added container _CardForm_ for [Alias/Insert](index.html#Payment_v1_Alias_Insert) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) requests for adjusting the card form's mandatory fields

## <a name="v1.7.0.20170822"></a> Version 1.7 (released 2017-08-22)
- available on Sandbox: 2017-08-03
- introduced version 1.7
- added value `1.7` for _SpecVersion_
- added value `TWINT` for _Brand.PaymentMethod_
- added _ApprovalCode_ to [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) and [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) responses
- added _PaymentMethods_ to [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) and [Alias/Insert](index.html#Payment_v1_Alias_Insert) requests
- increased number of concurrent Basic Authentication credentials to 10
- improved description for pending statuses

## <a name="v1.6.0.20170404"></a> Version 1.6 (released 2017-04-04)
- available on Sandbox: 2017-03-14
- introduced version 1.6
- added value `1.6` for _SpecVersion_
- added container _Check_ for [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) request
- added container _CheckResult_ for [Alias/AssertInsert](index.html#Payment_v1_Alias_AssertInsert) and [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) responses

## <a name="v1.5.0.20170207"></a> Version 1.5 (released 2017-02-07)
- introduced version 1.5
- added value `1.5` for _SpecVersion_
- added method [Transaction/AssertCapture](index.html#Payment_v1_Transaction_AssertCapture) for checking the status of a pending capture (currently needed for paydirekt)
- added method [Transaction/AssertRefund](index.html#Payment_v1_Transaction_AssertRefund) for checking the status of a pending refund (currently needed for paydirekt)
- added container _PendingNotification_ for [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) requests for notification settings on pending captures (currently needed for paydirekt)
- added container _PendingNotification_ for [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) requests for notification settings on pending captures (currently needed for paydirekt)
- added _Status_ in  [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) responses to indicate the status of a capture
- changed _Date_ in  [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) responses to optional, e.g. for pending captures
- changed [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request to allow _BillingAddressForm.Display_ and _DeliveryAddressForm.Display_ both set to `true` at the same time
- added _ContentSecurityEnabled_ to _Styling_ container to control Content Security Policy
- corrected type documentation for _CountrySubdivisionCode_ to "_AlphaNumeric_" in the address containers

## <a name="v1.4.0.20161015"></a> Version 1.4 (released 2016-10-15)
- new version 1.4
  - added value `1.4` for _SpecVersion_
  - added option _SuppressDcc_ for [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced)
  - added values `BANCONTACT` and `PAYDIREKT` for _Brand.PaymentMethod_ and _PaymentMethods_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)
  - added validation for element _Payment.MandateId_
  - added option _ConfigSet_ for [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)
- added a note that partial captures are currently only supported for PayPal
- added a note that values for AliasID are case-insensitive
- corrected example for [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect)
- corrected example for [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced)
- corrected example for [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize)
- corrected example for [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize)
- improved description for _TransactionReference_
- corrected example for _BillpayCapture.DelayInDays_
- improved description for _ReturnUrls_
