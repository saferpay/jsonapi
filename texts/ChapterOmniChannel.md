# <a name="ChapterOmniChannel"></a>OmniChannel



## <a name="Payment_v1_OmniChannel_InsertAlias"></a>OmniChannel InsertAlias

This function may be used to create an alias by providing a SixTransactionReference.

--->>>

<div class="info">
	<p><strong>Request URL:</strong></p>
	<p><strong>POST:</strong> /Payment/v1/OmniChannel/InsertAlias</p>
</div>

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
</td>;
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>RegisterAlias</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		
			<a class="type-details in" href="#Payment_Models_Data_RegisterAlias">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Registration parameters</div>
	<i class="small text-muted">
			</i>
</td>;
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
	
	<div style="padding-bottom: 10px">SIX Tranasaction Reference</div>
	<i class="small text-muted">
					<span>Example: 1:100002:199970683910</span>
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>;
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>Alias</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		
			<a class="type-details in" href="#Payment_Models_Data_AliasInfo">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Information about the registered alias.</div>
	<i class="small text-muted">
			</i>
</td>;
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
	
	<div style="padding-bottom: 10px">Information about the registered means of payment</div>
	<i class="small text-muted">
			</i>
</td>;
				</tr>
				<tr>
					<td class="col-sm-4 text-right">
	<strong>CheckResult</strong><br />
	<span class="text-muted small">
		
			<a class="type-details in" href="#Payment_Models_Data_AliasInsertCheckResult">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Result of the Check</div>
	<i class="small text-muted">
			</i>
</td>;
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
  "Alias": {
    "Id": "alias35nfd9mkzfw0x57iwx",
    "Lifetime": 1000
  },
  "PaymentMeans": {
    "Brand": {
      "PaymentMethod": "SAFERPAYTEST",
      "Name": "Saferpay Test Card"
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

<div class="info">
	<p><strong>Request URL:</strong></p>
	<p><strong>POST:</strong> /Payment/v1/OmniChannel/AcquireTransaction</p>
</div>

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
		
			<a class="type-details in" href="#Common_RequestHeader">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">General information about the request.</div>
	<i class="small text-muted">
			</i>
</td>;
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
</td>;
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
					<span>Example: c52ad18472354511ab2c33b59e796901</span>
	</i>
</td>;
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
	
	<div style="padding-bottom: 10px">SIX Tranasaction Reference</div>
	<i class="small text-muted">
					<span>Example: 1:100002:199970683910</span>
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
		
			<a class="type-details in" href="#Common_ResponseHeader">container</a>
	</span>
</td>
<td class="col-sm-8">
	
	<div style="padding-bottom: 10px">Contains general informations about the response.</div>
	<i class="small text-muted">
			</i>
</td>;
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
</td>;
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
</td>;
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
      "PaymentMethod": "SAFERPAYTEST",
      "Name": "Saferpay Test Card"
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






