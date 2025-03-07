



<table class="table">
			<thead>
				<tr>
					<th colspan="2">Arguments</th>
				</tr>
			</thead>
						<tr>
							<td class="col-sm-4 text-right">
	<strong>Behavior</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">What can be done to resolve the error?</div>
	<i class="small text-muted">
Possible values: DO_NOT_RETRY, OTHER_MEANS, RETRY, RETRY_LATER.<br />
			</i>
</td>
						</tr>
						<tr>
							<td class="col-sm-4 text-right">
	<strong>ErrorDetail</strong><br />
	<span class="text-muted small">
		        array of strings	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">More details, if available. Contents may change at any time, so don’t parse it.</div>
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
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Description of the error. The contents of this element might change without notice, so do not parse it.</div>
	<i class="small text-muted">
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
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name / id of the error. These names will not change, so you may parse these and attach your logic to the ErrorName.</div>
	<i class="small text-muted">
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
	<div style="padding-bottom: 10px">OrderId of the failed transaction. This is only returned in the PaymentPage Assert Response and the Transaction Authorize Response.</div>
	<i class="small text-muted">
			</i>
</td>
						</tr>
						<tr>
							<td class="col-sm-4 text-right">
	<strong>PayerMessage</strong><br />
	<span class="text-muted small">
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">A text message provided by the card issuer detailing the reason for a declined authorization. It is safe to display it to the payer.</div>
	<i class="small text-muted">
			</i>
</td>
						</tr>
						<tr>
							<td class="col-sm-4 text-right">
	<strong>ProcessorMessage</strong><br />
	<span class="text-muted small">
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Message returned by acquirer or processor</div>
	<i class="small text-muted">
			</i>
</td>
						</tr>
						<tr>
							<td class="col-sm-4 text-right">
	<strong>ProcessorName</strong><br />
	<span class="text-muted small">
		        string	</span>
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
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Result code returned by acquirer or processor</div>
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
	<strong>Risk</strong><br />
	<span class="text-muted small">
		        <a class="type-details in" href="#Payment_Models_RiskDetails">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains additional risk related information for the transaction that is blocked by risk.</div>
	<i class="small text-muted">
			</i>
</td>
						</tr>
						<tr>
							<td class="col-sm-4 text-right">
	<strong>TransactionId</strong><br />
	<span class="text-muted small">
		        string	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the failed transaction, if available</div>
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
  "Behavior": "DO_NOT_RETRY",
  "ErrorName": "VALIDATION_FAILED",
  "ErrorMessage": "Request validation failed",
  "ErrorDetail": [
    "PaymentMeans.BankAccount.IBAN: The field IBAN is invalid."
  ],
  "TransactionId": "723n4MAjMdhjSAhAKEUdA8jtl9jb",
  "OrderId": "c52ad18472354511ab2c33b59e796901"
}
</pre>

<<<---



