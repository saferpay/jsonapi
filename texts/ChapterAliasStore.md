# <a name="ChapterAliasStore"></a>Secure Card Data


## <a name="Payment_v1_Alias_Insert"></a>Alias Insert

This function may be used to insert an alias without knowledge about the card details. Therefore a redirect of the customer is required.

<div class="danger"><span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 30px;height: 100%;float: left;margin-right: 15px;margin-top: 0;"></span>
<p><strong>Warning:</strong> Only PCI certified merchants may submit the card-data directly, or use their own HTML form! <a href="https://docs.saferpay.com/home/integration-guide/data-security-and-pci-dss">Click here for more information!</a></p>
</div>

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
	<strong>ReturnUrl</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_ReturnUrl">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">URL which is used to redirect the payer back to the shop.<br><br>This Url is used by Saferpay to redirect the shopper back to the merchant shop. You may add query string parameters to identify your session, but please be aware that the shopper could modify these parameters inside the browser!<br> The whole url including query string parameters should be as short as possible to prevent issues with specific browsers and must not exceed 2000 characters.<br> Note: you should not add sensitive data to the query string, as its contents is plainly visible inside the browser and will be logged by our web servers.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Styling</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_ExtendedStyling">object</a>
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
	<div style="padding-bottom: 10px">Language used for displaying forms.<br> <br> Code-List:<br> bg - Bulgarian<br> cs - Czech<br> da - Danish<br> de - German<br> de-ch - Swiss German<br> el - Greek<br> en - English<br> es - Spanish<br> et - Estonian<br> fi - Finnish<br> fr - French<br> hr - Croatian<br> hu - Hungarian<br> is - Icelandic<br> it - Italian<br> ja - Japanese<br> lt - Lithuanian<br> lv - Latvian<br> nl - Dutch<br> nn - Norwegian<br> pl - Polish<br> pt - Portuguese<br> ro - Romanian<br> ru - Russian<br> sk - Slovak<br> sl - Slovenian<br> sv - Swedish<br> tr - Turkish<br> uk - Ukrainian<br> zh - Chinese</div>
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
	<div style="padding-bottom: 10px">Parameters for checking the means of payment before registering.<br> <b>IMPORTANT NOTE:</b> The Check function is only available for certain brands / acquirers! For more information, see <a href="https://docs.saferpay.com/home/integration-guide/licences-and-interfaces/secure-card-data">Saferpay Integration Guide for Secure Card Data</a></p></div>
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
Possible values: AMEX, BANCONTACT, BONUS, DINERS, DIRECTDEBIT, JCB, MAESTRO, MASTERCARD, MYONE, UNIONPAY, VISA. Additional values may be accepted but are ignored.<br />
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
				
				<a class="type-details in" href="#Payment_Models_Data_InsertAliasSupportingPaymentMeans">object</a>
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
	<strong>Notification</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_AliasNotification">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Url to which Saferpay will send the asynchronous confirmation for the process completion. Supported schemes are http and https. You also have to make sure to support the GET-method.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/notify/123</code></span>
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
  "ReturnUrl": {
    "Url": "[your shop alias registration url]"
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
	<div style="padding-bottom: 10px">Contains general information about the response.</div>
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

<div class="danger"><span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 30px;height: 100%;float: left;margin-right: 15px;margin-top: 0;"></span>
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
	<div style="padding-bottom: 10px">Contains general information about the response.</div>
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
				
				<a class="type-details in" href="#Payment_Models_Data_AliasPaymentMeansInfo">object</a>
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

<div class="danger"><span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 30px;height: 100%;float: left;margin-right: 15px;margin-top: 0;"></span>
<p><strong>Warning:</strong> Only respectively PCI certified merchants may submit the card-data directly, or use their own HTML form! <a href="https://docs.saferpay.com/home/integration-guide/data-security-and-pci-dss">Click here for more information!</a></p>
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
				
				<a class="type-details in" href="#Payment_Models_Data_AliasInsertDirectPaymentMeans">object</a>
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
				<tr>
					<td class="col-sm-4 text-right">
	<strong>IssuerReference</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_IssuerReference">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains that is received from the issuer in the response of a successful payment by other payment providers. This data will be used for authorizations based on this alias.</div>
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
	<div style="padding-bottom: 10px">Contains general information about the response.</div>
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
				
				<a class="type-details in" href="#Payment_Models_Data_AliasPaymentMeansInfo">object</a>
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
	<div style="padding-bottom: 10px">Contains general information about the response.</div>
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
				
				<a class="type-details in" href="#Payment_Models_Data_AliasPaymentMeansInfo">object</a>
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
	<div style="padding-bottom: 10px">Contains general information about the response.</div>
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






