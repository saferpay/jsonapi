# <a name="ChapterTransaction"></a>Transaction

## <a name="ChapterTransactionProcess"></a> Payment Process with the Transaction Interface

This chapter will give you a simple overview about the general transaction flow, when using the Transaction Interface.

<div class="warning">
	<p><strong>Important Note:</strong> The Transaction Interface offers all sorts of options to perform transactions. This flow only describes the general flow. Furthermore, you may want to <a href="https://saferpay.github.io/sndbx/Integration_trx.html">read our Saferpay Integration guide</a>, which offers an in depth explanation on how to integrate the Transaction Interface, optional features, best practices and more.</p>
</div>

### Transaction-flow

1. [Transaction Initialize](index.html#Payment_v1_Transaction_Initialize)
    - Initializes the Payment and generates the RedirectUrl for the [iFrame Integration](https://saferpay.github.io/sndbx/CssiFrame.html).
2. Open the RedirectUrl inside an HTML-iFrame, to show the hosted card entry form!
3. Return to ReturnUrl. The ReturnUrl is defined in step 1!
4. [Transaction Authorize](index.html#Payment_v1_Transaction_Authorize)
    - Authorizes the card, which has been gathered in step 2. Up until now, _no transaction has been made_!
5. Depending on the outcome of step 4 you may
    - [Capture/Finalize the Transaction](index.html#Payment_v1_Transaction_Capture)
    - [Cancel/Abort the Transaction](index.html#Payment_v1_Transaction_Cancel)
6. Transaction is finished!

## <a name="Payment_v1_Transaction_Initialize"></a>Transaction Initialize <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>
This method may be used to start a transaction which may involve either DCC and / or 3d-secure.

<div class="danger">
<span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 30px;height: 100%;float: left;margin-right: 15px;margin-top: 0;"></span>
<p><strong>Warning:</strong> Only PCI certified merchants may submit the card-data directly, or use their own HTML form! <a href="https://docs.saferpay.com/home/integration-guide/data-security-and-pci-dss">Click here for more information!</a></p>
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
						<tr>
							<td class="col-sm-4 text-right">
	<strong>ConfigSet</strong><br />
	<span class="text-muted small">
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This parameter let you define your payment page config (PPConfig) by name. If this parameter is not set, your default PPConfig will be applied if available.<br> When the PPConfig can't be found (e.g. wrong name), the Saferpay basic style will be applied to the payment page.</div>
	<i class="small text-muted">
Id[1..20]<br />
				    <span>Example: <code>name of your payment page config (case-insensitive)</code></span>
	</i>
</td>
						</tr>
						<tr>
							<td class="col-sm-4 text-right">
	<strong>Notification</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_Data_TransactionNotification">object</a>
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
	<strong>Order</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_Data_Order">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional order information. Only used for payment method Klarna (mandatory) and for Fraud Intelligence (optional).</div>
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
	<strong>PaymentMethods</strong><br />
	<span class="text-muted small">
		        array of strings	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Used to restrict the means of payment which are available to the payer</div>
	<i class="small text-muted">
Possible values: AMEX, BANCONTACT, DINERS, DIRECTDEBIT, JCB, MAESTRO, MASTERCARD, VISA. Additional values may be accepted but are ignored.<br />
				    <span>Example: <code>[&quot;VISA&quot;, &quot;MASTERCARD&quot;]</code></span>
	</i>
</td>
						</tr>
						<tr>
							<td class="col-sm-4 text-right">
	<strong>RedirectNotifyUrls</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_Data_RedirectNotifyUrls">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">If a redirect of the payer is required, these URLs will be used by Saferpay to notify you when the payer has completed the required steps and the transaction is ready to be authorized or when the operation has failed or has been aborted by the payer.<br> If no redirect of the payer is required, then these URLs will not be called (see RedirectRequired attribute of the Transaction Initialize response).<br><br>Supported schemes are http and https. You also have to make sure to support the GET-method.<br> The whole url including query string parameters must not exceed 2000 characters.<br> Note: you should not add sensitive data to the query string, as its contents are logged by our web servers.</div>
	<i class="small text-muted">
			</i>
</td>
						</tr>
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
	<strong>ReturnUrl</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        <a class="type-details in" href="#Payment_Models_Data_ReturnUrl">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">URL which is used to redirect the payer back to the shop if the transaction requires some kind of browser redirection (3d-secure, dcc)<br><br>This Url is used by Saferpay to redirect the shopper back to the merchant shop. You may add query string parameters to identify your session, but please be aware that the shopper could modify these parameters inside the browser!<br> The whole url including query string parameters should be as short as possible to prevent issues with specific browsers and must not exceed 2000 characters.<br> Note: you should not add sensitive data to the query string, as its contents is plainly visible inside the browser and will be logged by our web servers.</div>
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
	<strong>Styling</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_Data_HostedFormStyling">object</a>
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
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay terminal to use for this authorization</div>
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
  "ReturnUrl": {
    "Url": "[your shop payment url]"
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
	<strong>Expiration</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        date	</span>
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
		        boolean	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Indicates if liability shift to issuer is possible or not. Not present if PaymentMeans container was not present in InitializeTransaction request. True, if liability shift to issuer is possible, false if not.</div>
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
						<tr>
							<td class="col-sm-4 text-right">
	<strong>RedirectRequired</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        boolean	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">True if a redirect must be performed to continue, false otherwise</div>
	<i class="small text-muted">
			</i>
</td>
						</tr>
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
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id for referencing later</div>
	<i class="small text-muted">
				    <span>Example: <code>234uhfh78234hlasdfh8234e</code></span>
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

## <a name="Payment_v1_Transaction_Authorize"></a>Transaction Authorize <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>
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
	<strong>Condition</strong><br />
	<span class="text-muted small">
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">THREE_DS_AUTHENTICATION_SUCCESSFUL_OR_ATTEMPTED: the authorization will be executed if the previous 3d-secure process indicates that the liability shift to the issuer is possible<br> (liability shift may still be declined with the authorization though). This condition will be ignored for brands which Saferpay does not offer 3d-secure for.<br> ---<br> If left out, the authorization will be done if allowed, but possibly without liability shift to the issuer. See the specific result codes in the response message.</div>
	<i class="small text-muted">
Possible values: NONE, THREE_DS_AUTHENTICATION_SUCCESSFUL_OR_ATTEMPTED.<br />
				    <span>Example: <code>NONE</code></span>
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
		        string	</span>
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
						<tr>
							<td class="col-sm-4 text-right">
	<strong>Liability</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_Data_LiabilityInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">LiabilityShift information, replaces ThreeDs Info from API version 1.8</div>
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
  "Liability": {
    "LiabilityShift": true,
    "LiableEntity": "THREEDS",
    "ThreeDs": {
      "Authenticated": true,
      "Xid": "ARkvCgk5Y1t/BDFFXkUPGX9DUgs="
    }
  }
}
</pre>

<<<---

## <a name="Payment_v1_Transaction_AuthorizeDirect"></a>Transaction AuthorizeDirect <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>
This function may be used to directly authorize transactions which do not require a redirect of the customer (e.g. direct debit or recurring transactions based on a previously registered alias).

<div class="danger">
<span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 30px;height: 100%;float: left;margin-right: 15px;margin-top: 0;"></span>
<p><strong>Warning:</strong> Only PCI certified merchants may submit the card-data directly, or use their own HTML form! <a href="https://docs.saferpay.com/home/integration-guide/data-security-and-pci-dss">Click here for more information!</a></p>
</div>
<div class="warning">
<span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 30px;height: 100%;float: left;margin-right: 15px;margin-top: 0;"></span>
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
	<strong>Authentication</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_Data_StrongCustomerAuthenticationDirect">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Authentication information for this transaction.</div>
	<i class="small text-muted">
			</i>
</td>
						</tr>
						<tr>
							<td class="col-sm-4 text-right">
	<strong>Initiator</strong><br />
	<span class="text-muted small">
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Specify if the transaction was initiated by the merchant (default behavior if not specified) or by the payer.<br> This is relevant for most credit and debit cards managed by Mastercard, Visa and American Express card schemes (in card scheme jargon: MERCHANT means MIT, PAYER means CIT).<br> For these schemes, transactions initiated by the payer usually require authentication of the card holder, which is not possible if you use Transaction/AuthorizeDirect (use Transaction/Initialize or PaymentPage/Initialize if you're not sure).<br> Saferpay will flag the transaction accordingly (also taking the optional Exemption in the Authentication container into account) on the protocols which support this and card issuers might approve or decline transactions depending on this flagging.</div>
	<i class="small text-muted">
Possible values: MERCHANT, PAYER.<br />
				    <span>Example: <code>MERCHANT</code></span>
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
	<div style="padding-bottom: 10px">Optional order information. Only used for payment method Klarna (mandatory) and for Fraud Intelligence (optional).</div>
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
	<strong>Payment</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        <a class="type-details in" href="#Payment_Models_Data_P2PEnabledPayment">object</a>
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
		        <a class="type-details in" href="#Payment_Models_Data_AuthorizeDirectPaymentMeans">object</a>
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
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        string	</span>
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
						<tr>
							<td class="col-sm-4 text-right">
	<strong>Liability</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_Data_LiabilityInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">LiabilityShift information, replaces ThreeDs Info from api version 1.26</div>
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
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        <a class="type-details in" href="#Payment_Models_Data_P2PEnabledPaymentMeansInfo">object</a>
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

## <a name="Payment_v1_Transaction_AuthorizeReferenced"></a>Transaction AuthorizeReferenced <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>
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
	<strong>Notification</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_Data_TransactionNotification">object</a>
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
	<strong>SuppressDcc</strong><br />
	<span class="text-muted small">
		        boolean	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Used to suppress direct currency conversion</div>
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
		        string	</span>
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

## <a name="Payment_v1_Transaction_Capture"></a>Transaction Capture <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>
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
	<strong>Amount</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
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
						<tr>
							<td class="col-sm-4 text-right">
	<strong>MerchantFundDistributor</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_Data_MerchantFundDistributorCapture">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional Merchant Fund Distributor capture parameters.</div>
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
	<strong>CaptureId</strong><br />
	<span class="text-muted small">
		        string	</span>
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
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        date	</span>
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
	<strong>Status</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Current status of the capture. (PENDING is only used for paydirekt at the moment)</div>
	<i class="small text-muted">
Possible values: PENDING, CAPTURED.<br />
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

## <a name="Payment_v1_Transaction_MultipartCapture"></a>Transaction MultipartCapture <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>
This method may be used to capture multiple parts of an authorized transaction.

<div class="info">
<p><strong>Important:</strong></p>
<ul>
<li>MultipartCapture is available for PayPal, Klarna and card payments Visa, Mastercard, Maestro, Diners/Discover, JCB and American Express which are acquired by Worldline.</li>
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
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        <a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
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
	<strong>MerchantFundDistributor</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_Data_MerchantFundDistributorCapture">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional ForeignRetailer capture parameters.</div>
	<i class="small text-muted">
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
		        string	</span>
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
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">'PARTIAL' if more captures should be possible later on, 'FINAL' if no more captures will be done on this authorization.</div>
	<i class="small text-muted">
Possible values: PARTIAL, FINAL.<br />
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
	<strong>CaptureId</strong><br />
	<span class="text-muted small">
		        string	</span>
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
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        date	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date and time of capture. Not set if the capture state is pending.</div>
	<i class="small text-muted">
				    <span>Example: <code>2018-08-08T12:45:22.258+01:00</code></span>
	</i>
</td>
						</tr>
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
	<strong>Status</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Current status of the capture. (PENDING is only used for paydirekt at the moment)</div>
	<i class="small text-muted">
Possible values: PENDING, CAPTURED.<br />
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

## <a name="Payment_v1_Transaction_AssertCapture"></a>Transaction AssertCapture <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>

<div class="warning">
<span class="glyphicon glyphicon-exclamation-sign" style="color: rgb(240, 169, 43);font-size: 30px;height: 100%;float: left;margin-right: 15px;margin-top: 0;"></span>
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
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        date	</span>
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
	<strong>OrderId</strong><br />
	<span class="text-muted small">
		        string	</span>
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
	<strong>Status</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        string	</span>
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
	<strong>TransactionId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the referenced transaction.</div>
	<i class="small text-muted">
AlphaNumeric[1..64]<br />
				    <span>Example: <code>723n4MAjMdhjSAhAKEUdA8jtl9jb</code></span>
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

## <a name="Payment_v1_Transaction_MultipartFinalize"></a>Transaction MultipartFinalize <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>
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
    "RequestId": "[unique request identifier]"
  }
}
</pre>

<<<---

## <a name="Payment_v1_Transaction_Refund"></a>Transaction Refund <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>
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
	<strong>PaymentMethodsOptions</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_RefundPaymentMethodsOptions">object</a>
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
	<strong>PendingNotification</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_Data_PendingNotification">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional pending notification options</div>
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

## <a name="Payment_v1_Transaction_AssertRefund"></a>Transaction AssertRefund <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>
This method may be used to inquire the status and further information of pending refunds.

<div class="warning">
<span class="glyphicon glyphicon-exclamation-sign" style="color: rgb(240, 169, 43);font-size: 30px;height: 100%;float: left;margin-right: 15px;margin-top: 0;"></span>
<p><strong>Attention:</strong> This method is only supported for pending refunds. A pending refund is only applicable for paydirekt or WL Crypto Payments transactions at the moment.</p>
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
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        date	</span>
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
	<strong>OrderId</strong><br />
	<span class="text-muted small">
		        string	</span>
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
	<strong>Status</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        string	</span>
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
	<strong>TransactionId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the referenced transaction.</div>
	<i class="small text-muted">
AlphaNumeric[1..64]<br />
				    <span>Example: <code>723n4MAjMdhjSAhAKEUdA8jtl9jb</code></span>
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

## <a name="Payment_v1_Transaction_RefundDirect"></a>Transaction RefundDirect <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>
This method may be called to refund an amount to the given means of payment (not supported for all means of payment) without referencing a previous transaction. This might be the case if the original transaction was done with a card which is not valid any more.

<div class="danger">
<span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 30px;height: 100%;float: left;margin-right: 15px;margin-top: 0;"></span>
<p><strong>Warning:</strong> Only PCI certified merchants may submit the card-data directly, or use their own HTML form! <a href="https://docs.saferpay.com/home/integration-guide/data-security-and-pci-dss">Click here for more information!</a></p>
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
	<strong>OriginalCreditTransfer</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_Data_OriginalCreditTransfer">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the Original Credit Transfer like the Address of the Recipient.</div>
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
		        <a class="type-details in" href="#Payment_Models_Data_RefundDirectSupportingPaymentMeans">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the means of payment. Important: Only fully PCI certified merchants may directly use the card data.<br> If your system is not explicitly certified to handle card data directly, then use the Saferpay Secure Card Data-Storage instead.<br> If the customer enters a new card, you may want to use the Saferpay Hosted Register Form to capture the card data through Saferpay.</div>
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
		        <a class="type-details in" href="#Payment_Models_Data_RefundDirect">object</a>
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
		        string	</span>
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
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        <a class="type-details in" href="#Payment_Models_Data_P2PEnabledPaymentMeansInfo">object</a>
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

## <a name="Payment_v1_Transaction_Cancel"></a>Transaction Cancel <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>
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
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        date	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date and time of cancel.</div>
	<i class="small text-muted">
				    <span>Example: <code>2014-04-25T08:33:44.159+01:00</code></span>
	</i>
</td>
						</tr>
						<tr>
							<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
		        string	</span>
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
	<strong>TransactionId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the referenced transaction.</div>
	<i class="small text-muted">
				    <span>Example: <code>qiuwerhfi23h4189asdhflk23489</code></span>
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

## <a name="Payment_v1_Transaction_RedirectPayment"></a>Transaction RedirectPayment <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>

<div class="danger">
<span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 30px;height: 100%;float: left;margin-right: 15px;margin-top: 0;"></span>
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
	<strong>ReturnUrl</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        <a class="type-details in" href="#Payment_Models_Data_ReturnUrl">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">URL which is used to redirect the payer back to the shop if the transaction requires some kind of browser redirection (3d-secure, dcc)<br><br>This Url is used by Saferpay to redirect the shopper back to the merchant shop. You may add query string parameters to identify your session, but please be aware that the shopper could modify these parameters inside the browser!<br> The whole url including query string parameters should be as short as possible to prevent issues with specific browsers and must not exceed 2000 characters.<br> Note: you should not add sensitive data to the query string, as its contents is plainly visible inside the browser and will be logged by our web servers.</div>
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
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Service provider to be used for this payment</div>
	<i class="small text-muted">
Possible values: POSTCARD, POSTFINANCE.<br />
				    <span>Example: <code>POSTFINANCE</code></span>
	</i>
</td>
						</tr>
						<tr>
							<td class="col-sm-4 text-right">
	<strong>Styling</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_Data_HostedFormStyling">object</a>
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
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay terminal to use for this authorization</div>
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
  "ServiceProvider": "POSTFINANCE",
  "ReturnUrl": {
    "Url": "[your shop payment url]"
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
	<strong>Expiration</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        date	</span>
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
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Url to redirect the browser to for payment processing</div>
	<i class="small text-muted">
				    <span>Example: <code>https://www.saferpay.com/VT2/api/...</code></span>
	</i>
</td>
						</tr>
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
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id for referencing later</div>
	<i class="small text-muted">
				    <span>Example: <code>234uhfh78234hlasdfh8234e</code></span>
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

## <a name="Payment_v1_Transaction_AssertRedirectPayment"></a>Transaction AssertRedirectPayment <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>

<div class="danger">
<span class="glyphicon glyphicon-remove-sign" style="color: rgb(224, 122, 105);font-size: 30px;height: 100%;float: left;margin-right: 15px;margin-top: 0;"></span>
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
		        string	</span>
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

## <a name="Payment_v1_Transaction_Inquire"></a>Transaction Inquire <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>
This method can be used to get the details of a transaction that has been authorized successfully.

<div class="info">
<span class="glyphicon glyphicon-info-sign" style="color: rgb(110, 199, 215);font-size: 30px;height: 100%;float: left;margin-right: 15px;margin-top: 0;"></span>
<p><strong>Fair use:</strong>This method is not intended for polling. You have to restrict the usage of this method in order to provide a fair data access to all our customers. We may contact you if we notice the excessive usage of this function and in some exceptional cases we preserve the right to limit the access to it.</p>
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
	<strong>PaymentMeans</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        <a class="type-details in" href="#Payment_Models_Data_P2PEnabledPaymentMeansInfo">object</a>
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
    "LiableEntity": "THREEDS",
    "ThreeDs": {
      "Authenticated": true,
      "Xid": "ARkvCgk5Y1t/BDFFXkUPGX9DUgs="
    }
  }
}
</pre>

<<<---

## <a name="Payment_v1_Transaction_AlternativePayment"></a>Transaction AlternativePayment <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>
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
						<tr>
							<td class="col-sm-4 text-right">
	<strong>Order</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_Data_Order">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional order information. Only used for payment method Klarna (mandatory) and for Fraud Intelligence (optional).</div>
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
		        string	</span>
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
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay terminal to use for this authorization</div>
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
	<strong>Expiration</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        date	</span>
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
		        string</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id for referencing later</div>
	<i class="small text-muted">
				    <span>Example: <code>234uhfh78234hlasdfh8234e</code></span>
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

## <a name="Payment_v1_Transaction_QueryAlternativePayment"></a>Transaction QueryAlternativePayment <span class="label text-mandatory"><a href= "https://docs.saferpay.com/home/master/licensing">Available depending on license</a></span>

<span class="POST request-method">POST</span><br>
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
		        string	</span>
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
    "LiableEntity": "THREEDS",
    "ThreeDs": {
      "Authenticated": true,
      "Xid": "ARkvCgk5Y1t/BDFFXkUPGX9DUgs="
    }
  }
}
</pre>

<<<---
