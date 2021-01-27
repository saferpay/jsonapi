## Common Error Messages

<p><strong>AUTHENTICATION_FAILED - "Invalid credentials":</strong> In this case either the CustomerId, JSON API Password, JSON API User, or a combination of all three is not correct! You have to make sure, that all three things belong to the same Saferpay account! Furthermore, it can also happen, if you are trying to access the wrong environment. For example, if you are trying to use your test-account on the production-environment, you'll also recieve this error, as your account is unknown there. So please make also sure, that you are on the correct environment, based on the <strong>Base Url</strong>, see Chapter <strong><a href="index.html#integration">Integration - Building the correct API URL</a></strong>. If you have a pre-built module, you can usually find a switch, to select the test-, or live-mode, inside your admin-backend.</p>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Behavior": "ABORT",
  "ErrorName": "AUTHENTICATION_FAILED",
  "ErrorMessage": "Unable to authenticate request",
  "ErrorDetail": [
    "Invalid credentials"
  ]
}
</pre>

<hr />
<p><strong>NO_CONTRACT:</strong> In this case, you are either asking for a payment method, that is not activated on your account, or the requested currency is not set up for you.</p> 

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Behavior": "ABORT",
  "ErrorName": "NO_CONTRACT",
  "ErrorMessage": "No contract for the combination of terminal, means of payment/service provider and currency",
  "TransactionId": "bAvfOzbpIlI5rAzG74IEA0x3j47b",
  "ProcessorResult": "",
  "ProcessorMessage": ""
}
</pre>

<hr />
<p><strong>PERMISSION_DENIED - "Invalid License":</strong> Should you get this error, you are trying to acces Saferpay Business functions, without the corresponding contract. <a href="https://saferpay.github.io/sndbx/Interfaces.html">More on that here</a>.</p>

<p>Example:</p>
<pre class="prettyprint">
{
 "ResponseHeader": {
   "SpecVersion": "[current Spec-Version]",
   "RequestId": "[your request id]"
 },
 "Behavior": "ABORT",
 "ErrorName": "PERMISSION_DENIED",
 "ErrorMessage": "Permission denied",
 "ErrorDetail": [
   "Invalid license"
 ]
}
</pre>

<hr />
<p><strong>TRANSACTION_IN_WRONG_STATE:</strong> This means, that there are steps in the transaction flow you have to execute, before the currently executed one, for example missing a redirect, or initializing and then authorizing the transaction, without providing the necessary means of payment. Please see our <a href="https://saferpay.github.io/sndbx/index.html">Integration Guide</a> for more information about the available flows.</p>

<p>Example:</p>
<pre class="prettyprint">
{
  "ResponseHeader": {
    "SpecVersion": "[current Spec-Version]",
    "RequestId": "[your request id]"
  },
  "Behavior": "ABORT",
  "ErrorName": "TRANSACTION_IN_WRONG_STATE",
  "ErrorMessage": "Invalid action"
}
</pre>
