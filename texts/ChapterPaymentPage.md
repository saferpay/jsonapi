# <a name="ChapterPaymentPage"></a>Payment Page

The Payment Page Interface provides a simple integration of Saferpay without the need to implement a user interface for card data entry (the 'eCommerce' Saferpay license). You will get a redirect link to our payment page.

## <a name="ChapterPaymentPageFlow"></a> Payment Flow with the Payment Page

1. **Transaction Initialization** <br /> A Payment Page URL which can be integrated via redirect, iFrame or light box to perform the payment, is generated with the function <a target="_self" href="http://saferpay.github.io/jsonapi/#Payment_v1_PaymentPage_Initialize">PaymentPage Initialize</a>

><i class="glyphicon glyphicon-hand-right"></i> **Important** After the payment page processing is finished, the payer is redirected back to the shop. The redirect address is chosen depending on the outcome of the request (success, failure, abort)

2. **Transaction Status Validation** <br /> To validate the status of the transaction you need to call the function <a target="_self" href="http://saferpay.github.io/jsonapi/#Payment_v1_PaymentPage_Assert">PaymentPage Assert</a> by using the Token 
provided in the PaymentPage Initialize Response.

><i class="glyphicon glyphicon-hand-right"></i> **Important** To ensure that the return addresses have not been modified (e.g. swapping the FailUrl for the SuccessUrl), Assert Request should always be performed after the payer is returned to the shop's success page. Depending on the provider, the transaction status returned is either AUTHORIZED (reservation), or CAPTURED (booked). Thus even if you do not perform a subsequent Capture Request, the payment might be booked (captured) automatically. Please view the  <a target="_blank" href="https://saferpay.github.io/sndbx/index.html#pm-functions">Payment Method Feature matrix</a> to check which payment methods are captured automatically.

3. **Capture or Cancelation** <br /> A successful transaction authorization, with the status ***AUTHORIZED*** needs to be  either: <br /> **a.** **Captured** with a <a target="_self" href="http://saferpay.github.io/jsonapi/#Payment_v1_Transaction_Capture">Capture Request</a> by using the Transaction ID provided  in the PaymentPage Assert Response or the unique OrderID defined in the PaymentPage Initialize Request.<br /> **or** <br /> **b.** Cancelled with a <a target="_self" href="http://saferpay.github.io/jsonapi/#Payment_v1_Transaction_Cancel">Cancel Request</a> by using the Transaction ID provided in the Assert Response or the unique OrderID defined in the Transaction Initialize Request.<br /> 4. **Daily Close** <br /> Transactions with the Status ***CAPTURED*** are considered by the automatic Daily Close (daily at 10 PM CET) to initiate the actual money flow. The auto Daily Close can also be deactivated in the Saferpay Backoffice and instead manually triggered via the API with the function <a target="_self" href="http://saferpay.github.io/jsonapi/index.html#ChapterBatch ">Batch Close</a>






## <a name="Payment_v1_PaymentPage_Initialize"></a>PaymentPage Initialize


This method can be used to start a transaction with the Payment Page which may involve either DCC and / or 3d-secure

--->>>

```
POST /Payment/v1/PaymentPage/Initialize
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
	
	<div style="padding-bottom: 10px">Saferpay terminal id</div>
	<i class="small text-muted">
Numeric[8..8]<br />
					<span>Example: 12345678</span>
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
		
			<a class="type-details in" href="#Payment_Models_Data_PaymentPagePayment">container</a>
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
		string[]
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Used to restrict the means of payment which are available to the payer for this transaction. If only one payment method id is set, the payment selection step will be skipped.</div>
	<i class="small text-muted">
Possible values: AMEX, BANCONTACT, BONUS, DINERS, DIRECTDEBIT, EPRZELEWY, EPS, GIROPAY, IDEAL, INVOICE, JCB, MAESTRO, MASTERCARD, MYONE, PAYPAL, PAYDIREKT, POSTCARD, POSTFINANCE, SOFORT, VISA, VPAY.<br />
					<span>Example: [&quot;VISA&quot;, &quot;MASTERCARD&quot;]</span>
	</i>
</td>
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Wallets</strong><br />
	<span class="text-muted small">
		string[]
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Used to control if wallets should be enabled on the payment selection page and to go directly to the given wallet (if exactly one wallet is filled and PaymentMethods is not set).</div>
	<i class="small text-muted">
Possible values: MASTERPASS.<br />
					<span>Example: [&quot;MASTERPASS&quot;]</span>
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
	
	<div style="padding-bottom: 10px">Information about the payer</div>
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
	<strong>BillingAddressForm</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_AddressForm">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_AddressForm">container</a>
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
		
			<a class="type-details in" href="#Payment_Models_Data_CardForm">container</a>
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
    "SpecVersion": "1.6",
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
	
	<div style="padding-bottom: 10px">Token for later referencing</div>
	<i class="small text-muted">
					<span>Example: 234uhfh78234hlasdfh8234e1234</span>
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
					<span>Example: 2011-07-14T19:43:37+01:00</span>
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
					<span>Example: https://www.saferpay.com/vt2/api/PaymentPage/1234/12341234/z2p7a0plpgsd41m97wjvm5jza</span>
	</i>
</td>
				</tr>

</table>


--->>>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "1.6",
    "RequestId": "Id of the request"
  },
  "Token": "234uhfh78234hlasdfh8234e1234",
  "Expiration": "2015-01-30T12:45:22.258+01:00",
  "RedirectUrl": "https://www.saferpay.com/vt2/api/..."
}
</pre>

<<<---





## <a name="Payment_v1_PaymentPage_Assert"></a>PaymentPage Assert

Call this function to safely check the status of the transaction from your server. Depending on the payment provider, the resulting transaction may either be an authorization or may already be captured (meaning the financial flow was already triggered). This will be visible in the status of the transaction container returned in the response.

If the transaction failed (the payer was redirected to the Fail url or he manipulated the return url), an error response with an http status code 400 or higher containing an error message will be returned providing some information on the transaction failure.

--->>>

```
POST /Payment/v1/PaymentPage/Assert
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
    "SpecVersion": "1.6",
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
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RegistrationResult</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_RegistrationResult">container</a>
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
    "SpecVersion": "1.6",
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
    "AcquirerName": "VISA Saferpay Test",
    "AcquirerReference": "000000"
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
  }
}
</pre>

<<<---






