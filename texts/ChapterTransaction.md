# <a name="ChapterTransaction"></a>Transaction

## <a name="ChapterTransactionProcess"></a> Payment Process with the Transaction Interface

This chapter will give you a simple overview about the general transaction flow, when using the Transaction Interface.

><i class="glyphicon glyphicon-hand-right"></i> **IMPORTANT NOTE** The Transaction Interface offers all sorts of options to do transactions. This flow only describes the general flow. Furthermore, you may want to [**read our Saferpay Integration guide**](https://saferpay.github.io/sndbx/Integration_trx.html), which offers an in debth explanation on how to integrate the Transaction Interface, optional features, best practices and more.

### Transaction-flow

1. [Transaction Initialize](https://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_Initialize)
  * Initializes the Payment and generates the RedirectUrl for the [iFrame Integration](https://saferpay.github.io/sndbx/CssiFrame.html).
2. Open the RedirectUrl inside an HTML-iFrame, to show the hosted card entry form!
3. Return to Return Url depending on the outcome of the 3D Secure procedure. The ReturnUrls are defined in step 1!
4. [Transaction Authorize](https://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_Authorize)
  * Authorizes the card, which has been gathered in step 2. Up until now, *no transaction has been made*!
5. Depending on the outcome of step 4 you may
  * [Capture/Finalize the Transaction](https://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_Capture)
  * [Cancel/Abort the Transaction](https://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_Cancel)
6. Transaction is finished!



## <a name="Payment_v1_Transaction_Initialize"></a>Transaction Initialize <span class="label text-mandatory">Business license</span> 

This method may be used to start a transaction which may involve either DCC and / or 3d-secure.

--->>>

```
POST /Payment/v1/Transaction/Initialize
```

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
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
					<span>Example: name of your payment page config (case-insensitive)</span>
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
					<span>Example: 12341234</span>
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
		
			<a class="type-details in" href="#Payment_Models_Data_Payment">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentMeans">container</a>
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
	<strong>Payer</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_Payer">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_ReturnUrls">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_Styling">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_Wallet">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Wallet system to be used for the transaction (this cannot be combined with PaymentMeans above).</div>
	<i class="small text-muted">
			</i>
</td>;
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PaymentMethods</strong><br />
	<span class="text-muted small">
		string[]
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Used to restrict the means of payment which are available to the payer</div>
	<i class="small text-muted">
Possible values: AMEX, BANCONTACT, BONUS, DINERS, JCB, MAESTRO, MASTERCARD, MYONE, POSTCARD, VISA, VPAY.<br />
					<span>Example: [&quot;VISA&quot;, &quot;MASTERCARD&quot;]</span>
	</i>
</td>;
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>CardForm</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_CardForm">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Options for card data entry form (if applicable)</div>
	<i class="small text-muted">
			</i>
</td>;
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "1.8",
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
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
					<span>Example: 234uhfh78234hlasdfh8234e</span>
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
					<span>Example: 2015-01-30T13:45:22.258+02:00</span>
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
		
			<a class="type-details in" href="#Payment_Models_Data_Redirect">container</a>
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
    "SpecVersion": "1.8",
    "RequestId": "[your request id]"
  },
  "Token": "234uhfh78234hlasdfh8234e",
  "Expiration": "2015-01-30T12:45:22.258+01:00",
  "LiabilityShift": false,
  "RedirectRequired": true,
  "Redirect": {
    "RedirectUrl": "https://www.saferpay.com/vt2/Api/...",
    "PaymentMeansRequired": true
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_Authorize"></a>Transaction Authorize <span class="label text-mandatory">Business license</span> 

This function may be called to complete an authorization which was started by a call to Transaction/Initialize.

--->>>

```
POST /Payment/v1/Transaction/Authorize
```

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
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
					<span>Example: 234uhfh78234hlasdfh8234e</span>
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
	
	<div style="padding-bottom: 10px">WITH_LIABILITY_SHIFT: the authorization will be executed if the previous 3d-secure process indicates that the liability shift to the issuer is possible (liability shift may still be declined with the authorization though). This condition will be ignored for brands which Saferpay does not offer 3d-secure for.<br> <br> If left out, the authorization will be done if allowed, but possibly without liability shift to the issuer. See the specific result codes in the response message.</div>
	<i class="small text-muted">
Possible values: WITH_LIABILITY_SHIFT.<br />
					<span>Example: WITH_LIABILITY_SHIFT</span>
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
					<span>Example: 123</span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RegisterAlias</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_RegisterAlias">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Controls whether the given means of payment should be stored inside the saferpay Secure Card Data storage.</div>
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
    "SpecVersion": "1.8",
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentTransaction">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PayerInfo">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_RegistrationResult">container</a>
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
	<strong>ThreeDs</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_ThreeDsInfo">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">3d-secure information if applicable</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Dcc</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_DccInfo">container</a>
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
    "SpecVersion": "1.8",
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
    "AcquirerName": "VISA Saferpay Test",
    "AcquirerReference": "Reference",
    "SixTransactionReference": "0:0:3:MUOGAWA9pKr6rAv5dUKIbAjrCGYA",
    "ApprovalCode": "012345"
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "VISA",
      "Name": "VISA"
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
  },
  "ThreeDs": {
    "Authenticated": true,
    "LiabilityShift": true,
    "Xid": "ARkvCgk5Y1t/BDFFXkUPGX9DUgs=",
    "VerificationValue": "AAABBIIFmAAAAAAAAAAAAAAAAAA="
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_QueryPaymentMeans"></a>Transaction QueryPaymentMeans <span class="label text-mandatory">Business license</span> 

This method may be used to query the payment means and payer data (address) after initialize and wallet redirect.

--->>>

```
POST /Payment/v1/Transaction/QueryPaymentMeans
```

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
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
					<span>Example: 234uhfh78234hlasdfh8234e</span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>ReturnUrls</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_ReturnUrls">container</a>
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
    "SpecVersion": "1.8",
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PayerInfo">container</a>
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
    "SpecVersion": "1.8",
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





## <a name="Payment_v1_Transaction_AdjustAmount"></a>Transaction AdjustAmount <span class="label text-mandatory">Business license</span> 

This method may be used to adjust the amount after query payment means.

--->>>

```
POST /Payment/v1/Transaction/AdjustAmount
```

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
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
					<span>Example: 234uhfh78234hlasdfh8234e</span>
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
		
			<a class="type-details in" href="#Payment_Models_Data_Amount">container</a>
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
    "SpecVersion": "1.8",
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
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
    "SpecVersion": "1.8",
    "RequestId": "[your request id]"
  }
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_AuthorizeDirect"></a>Transaction AuthorizeDirect <span class="label text-mandatory">Business license</span> 

This function may be used to directly authorize transactions which do not require a redirect of the customer (e.g. direct debit or recurring transactions based on a previously registered alias).

--->>>

```
POST /Payment/v1/Transaction/AuthorizeDirect
```

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
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
					<span>Example: 12341234</span>
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
		
			<a class="type-details in" href="#Payment_Models_Data_Payment">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentMeans">container</a>
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
	<strong>RegisterAlias</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_RegisterAlias">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Controls whether the given means of payment should be stored inside the saferpay Secure Card Data storage.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_Payer">container</a>
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
    "SpecVersion": "1.8",
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentTransaction">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PayerInfo">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_RegistrationResult">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Information about the Secure Card Data registration outcome.</div>
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
    "SpecVersion": "1.8",
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





## <a name="Payment_v1_Transaction_AuthorizeReferenced"></a>Transaction AuthorizeReferenced <span class="label text-mandatory">Business license</span> 

This method may be used to perform follow-up authorizations to an earlier transaction. At this time, the referenced (initial) transaction must have been performed setting either the recurring or installment option.

--->>>

```
POST /Payment/v1/Transaction/AuthorizeReferenced
```

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
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
					<span>Example: 12341234</span>
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
		
			<a class="type-details in" href="#Payment_Models_Data_BasicPayment">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_TransactionReference">container</a>
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
    "SpecVersion": "1.8",
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentTransaction">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PayerInfo">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_DccInfo">container</a>
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
    "SpecVersion": "1.8",
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



--->>>

```
POST /Payment/v1/Transaction/Capture
```

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_TransactionReference">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_Amount">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_BillpayCapture">container</a>
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
	<strong>Partial</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_PartialCapture">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Optional partial capture options.<br> Note: Partial-Captures are only available with PayPal!</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PendingNotification</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_PendingNotification">container</a>
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
    "SpecVersion": "1.8",
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
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
					<span>Example: 723n4MAjMdhjSAhAKEUdA8jtl9jb</span>
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
					<span>Example: c52ad18472354511ab2c33b59e796901</span>
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
		date
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Date and time of capture. Not set if the capture state is pending.</div>
	<i class="small text-muted">
AlphaNumeric[11..11]<br />
					<span>Example: 2014-04-25T08:33:44.159Z</span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Invoice</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_InvoiceInfo">container</a>
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
    "SpecVersion": "1.8",
    "RequestId": "[your request id]"
  },
  "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
  "Status": "CAPTURED",
  "Date": "2015-01-30T12:45:22.258+01:00"
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_AssertCapture"></a>Transaction AssertCapture


<div class="warning">
  <p><strong>Attention:</strong> This method is only supported for pending captures. A pending capture is only applicable for paydirekt transactions at the moment.</p>
</div>

--->>>

```
POST /Payment/v1/Transaction/AssertCapture
```

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_TransactionReference">container</a>
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
    "SpecVersion": "1.8",
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
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
					<span>Example: 723n4MAjMdhjSAhAKEUdA8jtl9jb</span>
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
					<span>Example: c52ad18472354511ab2c33b59e796901</span>
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
	
	<div style="padding-bottom: 10px">Current status of the capture (PENDING is only used for paydirekt at the moment).</div>
	<i class="small text-muted">
Possible values: PENDING, CAPTURED.<br />
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Date</strong><br />
	<span class="text-muted small">
		date
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Date and time of capture. Not set if the capture state is pending.</div>
	<i class="small text-muted">
AlphaNumeric[11..11]<br />
					<span>Example: 2014-04-25T08:33:44.159Z</span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "1.8",
    "RequestId": "[your request id]"
  },
  "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
  "Status": "CAPTURED",
  "Date": "2015-01-30T12:45:22.258+01:00"
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_Refund"></a>Transaction Refund <span class="label text-mandatory">Business license</span> 

This method may be called to refund a previous transaction.

--->>>

```
POST /Payment/v1/Transaction/Refund
```

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_Refund">container</a>
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
	<strong>TransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		
			<a class="type-details in" href="#Payment_Models_Data_CaptureTransactionReference">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Reference to the transaction you want to refund. Note, that not all processors support refunds.</div>
	<i class="small text-muted">
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>PendingNotification</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_PendingNotification">container</a>
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
    "SpecVersion": "1.8",
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_RefundTransaction">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_DccInfo">container</a>
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
    "SpecVersion": "1.8",
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





## <a name="Payment_v1_Transaction_AssertRefund"></a>Transaction AssertRefund <span class="label text-mandatory">Business license</span> 

<div class="warning">
  <p><strong>Attention:</strong> This method is only supported for pending refunds. A pending refund is only applicable for paydirekt transactions at the moment.</p>
</div>

--->>>

```
POST /Payment/v1/Transaction/AssertRefund
```

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_TransactionReference">container</a>
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
    "SpecVersion": "1.8",
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
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
					<span>Example: 723n4MAjMdhjSAhAKEUdA8jtl9jb</span>
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
					<span>Example: c52ad18472354511ab2c33b59e796901</span>
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
	
	<div style="padding-bottom: 10px">Current status of the capture (PENDING is only used for paydirekt at the moment).</div>
	<i class="small text-muted">
Possible values: PENDING, CAPTURED.<br />
			</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Date</strong><br />
	<span class="text-muted small">
		date
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Date and time of capture. Not set if the capture state is pending.</div>
	<i class="small text-muted">
AlphaNumeric[11..11]<br />
					<span>Example: 2014-04-25T08:33:44.159Z</span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "1.8",
    "RequestId": "[your request id]"
  },
  "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
  "Status": "CAPTURED",
  "Date": "2015-01-30T12:45:22.258+01:00"
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_RefundDirect"></a>Transaction RefundDirect <span class="label text-mandatory">Business license</span> 

This method may be called to refund an amount to the given means of payment (not supported for all means of payment) without referencing a previous transaction. This might be the case if the original transaction was done with a card which is not valid any more.

--->>>

```
POST /Payment/v1/Transaction/RefundDirect
```

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
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
					<span>Example: 12341234</span>
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
		
			<a class="type-details in" href="#Payment_Models_Data_Refund">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentMeans">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Information on the means of payment</div>
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
    "SpecVersion": "1.8",
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_RefundTransaction">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_DccInfo">container</a>
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
    "SpecVersion": "1.8",
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



--->>>

```
POST /Payment/v1/Transaction/Cancel
```

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_TransactionReference">container</a>
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
    "SpecVersion": "1.8",
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
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
					<span>Example: qiuwerhfi23h4189asdhflk23489</span>
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
					<span>Example: c52ad18472354511ab2c33b59e796901</span>
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
					<span>Example: 2014-04-25T08:33:44.159Z</span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "1.8",
    "RequestId": "[your request id]"
  },
  "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
  "OrderId": "c52ad18472354511ab2c33b59e796901",
  "Date": "2015-01-30T12:45:22.258+01:00"
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_RedirectPayment"></a>Transaction RedirectPayment <span class="label text-mandatory">Business license</span> 

>
>    <i class="glyphicon glyphicon-hand-right"></i> **WARNING**: This feature is deprecated and replaced by the [**Payment Page**](https://saferpay.github.io/jsonapi/index.html#ChapterPaymentPage). Please use the parameter "PaymentMethods" to directly select the desired 3rd party provider!
>



--->>>

```
POST /Payment/v1/Transaction/RedirectPayment
```

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
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
					<span>Example: 12341234</span>
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
		
			<a class="type-details in" href="#Payment_Models_Data_Payment">container</a>
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
					<span>Example: PAYPAL</span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Payer</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_Payer">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_ReturnUrls">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_Styling">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_Notification">container</a>
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
    "SpecVersion": "1.8",
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
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
					<span>Example: 234uhfh78234hlasdfh8234e</span>
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
					<span>Example: 2015-01-30T13:45:22.258+02:00</span>
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
					<span>Example: https://www.saferpay.com/VT2/api/...</span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "1.8",
    "RequestId": "[your request id]"
  },
  "Token": "234uhfh78234hlasdfh8234e",
  "Expiration": "2015-01-30T12:45:22.258+01:00",
  "RedirectUrl": "https://www.saferpay.com/vt2/Api/..."
}
</pre>

<<<---





## <a name="Payment_v1_Transaction_AssertRedirectPayment"></a>Transaction AssertRedirectPayment <span class="label text-mandatory">Business license</span> 

>
>    <i class="glyphicon glyphicon-hand-right"></i> **WARNING**: This feature is deprecated and replaced by the [**Payment Page**](https://saferpay.github.io/jsonapi/index.html#ChapterPaymentPage). Please use the parameter "PaymentMethods" to directly select the desired 3rd party provider!
>

--->>>

```
POST /Payment/v1/Transaction/AssertRedirectPayment
```

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
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
					<span>Example: 234uhfh78234hlasdfh8234e</span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "RequestHeader": {
    "SpecVersion": "1.8",
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentTransaction">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentMeansInfo">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PayerInfo">container</a>
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
    "SpecVersion": "1.8",
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






