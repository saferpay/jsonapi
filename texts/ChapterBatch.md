# <a name="ChapterBatch"></a>Batch


## <a name="Payment_v1_Batch_Close"></a>Batch Close

<span class="POST request-method">POST</span><br>
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







