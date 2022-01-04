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
Possible values: ALIPAY, AMEX, BANCONTACT, BONUS, DINERS, DIRECTDEBIT, EPRZELEWY, EPS, GIROPAY, IDEAL, INVOICE, JCB, KLARNA, MAESTRO, MASTERCARD, MYONE, PAYPAL, PAYDIREKT, POSTCARD, POSTFINANCE, SOFORT, TWINT, UNIONPAY, VISA, WLCRYPTOPAYMENTS.<br />
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
Possible values: MASTERPASS, APPLEPAY, GOOGLEPAY.<br />
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
				
				<a class="type-details in" href="#Payment_Models_Data_PaymentPageStyling">object</a>
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
	<div style="padding-bottom: 10px">Use this container if you need to get a billing address from the payer during the payment process.<br> Saferpay can show an address form and depending on the means of payment, it is also possible to get the address from the means of payment (e.g. PayPal or any kind of wallet) if available.<br> Check the options in the container for different behaviors.<br> In case you also provide payer addresses, these are used as default values to prefill the address form (if displayed) and are overwritten by the final address entered by the payer or provided by the payment method.</div>
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
	<div style="padding-bottom: 10px">Use this container if you need to get a delivery address from the payer during the payment process.<br> Saferpay can show an address form and depending on the means of payment, it is also possible to get the address from the means of payment (e.g. PayPal or any kind of wallet) if available.<br> Check the options in the container for different behaviors.<br> In case you also provide payer addresses, these are used as default values to prefill the address form (if displayed) and are overwritten by the final address entered by the payer or provided by the payment method.</div>
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
	<div style="padding-bottom: 10px">Optional Condition for Authorization (only 3DSv2), to control, whether or not, transactions without LiabilityShift should be accepted. <strong>Important Note:</strong> This only filters out transactions, where the condition is conclusive <strong>before</strong> the authorization itself. It is possible, that LiabilityShift is rejected after the authorization. Please always check the <strong>Liability</strong> container, within the authorization-response, to be 100% sure, if LiabilityShift applies, or not!<br> Default: IF_ALLOWED_BY_SCHEME (empty)</div>
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
    "LiableEntity": "THREEDS",
    "ThreeDs": {
      "Authenticated": true,
      "LiabilityShift": true,
      "Xid": "ARkvCgk5Y1t/BDFFXkUPGX9DUgs="
    }
  }
}
</pre>

<<<---






