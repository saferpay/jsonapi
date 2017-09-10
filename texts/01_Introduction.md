﻿<a name="intro"></a>Introduction
============

This page describes the Saferpay JSON application programming interface.

Our API is designed to have predictable, resource-oriented URLs and to use HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which can be understood by off-the-shelf HTTP clients. JSON will be returned in all responses from the API, including errors.

--->>>

Base URL production system:

`https://www.saferpay.com/api`

Base URL test system:

`https://test.saferpay.com/api`

Test accounts:

<a target="_blank" href="https://test.saferpay.com/BO/Welcome">Request your personal test account</a><br />
<a target="_blank" href="https://www.six-payment-services.com/en/site/saferpay-support/testaccount.html">View shared test account data</a>

<<<---

<a name="encoding"></a>Content Encoding
================

`UTF-8` must be used for text encoding (there are restrictions on allowed characters for specific fields though).

`Content-Type` and `Accept` headers should be set to `application/json` for server-to-server calls. Redirects use the standard browser types.

--->>>

HTTP Headers:

`Content-Type: application/json; charset=utf-8`

`Accept: application/json`

<<<---

<a name="formats"></a>Formats
=======

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

<a name="authentication"></a>Authentication
==============

Saferpay supports the mechanism of basic authentication or a client certificate for authentication of a
server (host) system.

<a name="authentication_basic"></a>HTTP basic authentication
-------------------------

This is the default authentication method. Technical users for the JSON API can be
created by the merchant in the Saferpay Backoffice under [**Settings > JSON API basic authentication**](https://test.saferpay.com/BO/Settings/JsonApiLogin). The password will not be stored
at SIX (only a securely salted hash thereof). There will be no password recovery
besides creating a new user / password pair from your Backoffice account.

The password must meet some complexity requirements. We suggest using / generating
dedicated passwords with a length of 16 alphanumeric characters (up to 32 characters).

<img src="https://raw.githubusercontent.com/saferpay/jsonapi/master/Images/BO_basic_auth_1.png" alt="Basic Authentication">

--->>>

HTTP Header:

`Authorization: Basic [your base64 encoded user name + password]`

<<<---

<a name="authentication_cert"></a> HTTPS Client Certificate Authentication
-------------------------

Alternatively, Saferpay also supports authentication via a client certificate.

>
>    <i class="glyphicon glyphicon-hand-right"></i> **Important**: This feature is only available for Saferpay Business merchants!
>

A client certificate for the JSON-API can be ordered in the Saferpay Backoffice under [**Settings > JSON API client certificate**](https://test.saferpay.com/BO/Settings/JsonApiClientCertificate). In order to get to the “JSON API Client Certificate 

If you have a Saferpay Business licence, you will find the HTTPS Client Certificate Authentication section under the form for HTTPS Basic Authentication.

<img src="https://raw.githubusercontent.com/saferpay/jsonapi/master/Images/BO_Client_certificate_1.png" alt="Basic Aiuthentication">

Generate the CSR as described on the page and import it using the upload button.
The signed client certificate will then be downloaded through your browser.


<a name="integration"></a>Integration
===========

### Integration Guide

While these Documents are meant as a quick reference and technical specification of the Saferpay JSON-API, [the Saferpay Integration Guide](https://saferpay.github.io/sndbx/index.html) contains an in debth explanation about payment-flows, tips and tricks, aswell as best practices for those, who want to integrate the JSON-API and its features for the first time.
It will also help to understand certain characteristics about the different payment methods we offer, as well as the rules you must follow, when processing vital credit card data and more.

### Server-to-Server code Samples

The JSON API is a modern and lightweight interface, that can be used with all shop
systems and all programming languages. Only a few steps are neccessary to integrate
your only shop with Saferpay. The proceeding is mostly as follows:

1. Initialize via secure server-to-server call
2. Integrate iframe to redirect your customer
3. Authorize/ assert customer interaction via secure server-to-server call

In secure server-to-server calls you have to submit a JSON request containing
you processing instructions to the defined URLs. The URL and the JSON structure
varies depening on the action/resource you want to call. For further details check
the description of resources below.

Server-to-server calls are a secure way to submit and gather data. Hence, a server-to-server
call should always follow after the customer returns back to the shop, to gather
information about the outcome of e.g. 3D Secure.

>
>    <i class="glyphicon glyphicon-hand-right"></i> **Caution**: Please DO NOT use client side scripting languages like JavaScript to execute the server-to-server (JSON) calls directly. Clients could manipulate the code, or even try to extract the credentials, to execute refunds or other requests with malicious intentions. Always execute the requests and keep your credentials on your server!
>
>
>    <i class="glyphicon glyphicon-hand-right"></i> **Caution**: Please DO NOT use polling for any request -especially the Asserts-. You should always await the reception of the Successurl and/or NotifyUrl. Saferpay does not support polling in any way!
>

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
        string authInfo = string.Format("{0}:{1}", sfpLogin, sfpPassword);
        client.Headers[HttpRequestHeader.Authorization] = "Basic " + Convert.ToBase64String(Encoding.UTF8.GetBytes(authInfo));
        client.Headers[HttpRequestHeader.Accept] = "application/json";
        client.Headers[HttpRequestHeader.ContentType] = "application/json; charset=utf-8";
        client.Encoding = Encoding.UTF8;
        try
        {
            var responseData = client.UploadString(sfpUrl, JsonConvert.SerializeObject(request));
            return JsonConvert.DeserializeObject(responseData);
        }
        catch (WebException)
        {
            Trace.WriteLine("Web exception occured");
            // handle error response here
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
		'CustomerId' => "123456",
		'RequestId' => "aScdFewDSRFrfas2wsad3",
		'RetryIndicator' => 0,
		'ClientInfo' => array(
		    'ShopInfo' => "My Shop",
		    'OsInfo' => "Windows Server 2013"
	    )
    ),
    'TerminalId' => "17654321",
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
function do_post($username, $password, $url, array $payload) {
    //Set Options for CURL
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HEADER, false);
    //Return Response to Application
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    //Set Content-Headers to JSON
    curl_setopt($curl, CURLOPT_HTTPHEADER, array(
        "Content-type: application/json",
        "Accept: application/json"
    ));
    //Execute call via http-POST
    curl_setopt($curl, CURLOPT_POST, true);
    //Set POST-Body
        //convert DATA-Array into a JSON-Object
    curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($payload));
    //WARNING!!!!!
    //This option should NOT be "false"
    //Otherwise the connection is not secured
    //You can turn it of if you're working on the test-system with no vital data
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
    //HTTP-Basic Authentication for the Saferpay JSON-API
    curl_setopt($curl, CURLOPT_USERPWD, $username . ":" . $password);
    //CURL-Execute &amp; catch response
    $jsonResponse = curl_exec($curl);
    //Get HTTP-Status
    //Abort if Status != 200
    $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    if ($status != 200) {
        die("Error: call to URL $url failed with status $status, response $jsonResponse, curl_error: " . curl_error($curl) . ", curl_errno ".curl_errno($curl)."HTTP-Status: ".$status."&lt;||||&gt; DUMP: URL: ".$url." &lt;|||&gt; JSON: ".var_dump($payload));
    }
    //IMPORTANT!!!
    //Close connection!
    curl_close($curl);
    //Convert response into a multidimensional Array (see above example!)
    $response = json_decode($jsonResponse, true);
    return $response;
}</pre>
    </div>
  </div>
</div>

<<<---

If you include the redirect pages into page using an iframe, you can react on size changes
of the iframe content by listening to a message event containing the new sizing information.

Please note: Depending on the bank, issuer, or payment provider, the page can try to break
out of the iframe or lack telling you the actual size of the content.

--->>>

Handle JavaScript events from Saferpay:

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
