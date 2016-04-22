Server-to-server communication:

<div class="samples" role="tabpanel">
	<ul id="tabs" class="nav nav-tabs" data-tabs="tabs">
		<li class="active"><a aria-expanded="false" href="#csharp" data-toggle="tab">C#</a></li>
		<li class=""><a aria-expanded="true" href="#java" data-toggle="tab">Java</a></li>
		<li class=""><a aria-expanded="true" href="#php" data-toggle="tab">PHP</a></li>
	</ul>
	<div id="tab-content" class="tab-content">
		<div class="tab-pane active" id="csharp">
			<pre class="prettyprint">private object SubmitRequest(string sfpUrl, object request, string sfpLogin, string sfpPassword)
{
	using (var client = new WebClient())
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
}</pre>
		</div>
		  <div class="tab-pane active" id="java">
			<pre class="prettyprint"> public static JsonObject sendRequest(URL sfpUrl, JsonObject request, String sfpLogin, String sfpPassword) throws IOException {
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
			<pre class="prettyprint">//JSONObj is a multidimensional Array, that assembles the JSON structure
//$username and $password for the http-Basic Authentication
//$url is the SaferpayURL eg. https://www.saferpay.com/api/Payment/v1/Transaction/Initialize
function do_post($username,$password,$url, $JSONObj){
	//Set Options for CURL
	$curl = curl_init($url);
	curl_setopt($curl, CURLOPT_HEADER, false);
	//Return Response to Application
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	//Set Content-Headers to JSON
	curl_setopt($curl, CURLOPT_HTTPHEADER,array("Content-type: application/json"));
	//Execute call via http-POST
	curl_setopt($curl, CURLOPT_POST, true);
	//Set POST-Body
		//convert DATA-Array into a JSON-Object
	curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($JSONObj));
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
	if ( $status != 200 ) {
		die("Error: call to URL $url failed with status $status, response $json_response, curl_error " . curl_error($curl) . ", curl_errno " . curl_errno($curl) . "HTTP-Status: " . $status . "&lt;||||&gt; DUMP: URL: ". $url . " &lt;|||&gt; JSON: " . var_dump($JSONObj));
	}
	//IMPORTANT!!!
	//Close connection!
	curl_close($curl);
	//Convert response into an Array
	$response = json_decode($jsonResponse, true);
	return $response;
}
</pre>
		</div>
	</div>
</div>
