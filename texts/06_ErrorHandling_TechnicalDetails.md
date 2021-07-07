--->>>

List of behaviors:

<table class="table table-striped">
  <tr>
    <td class="text-right col-sm-3">ABORT</td>
    <td class="col-sm-9">Do not retry this request. It will never succeed.</td>
  </tr>
  <tr>
    <td class="text-right">RETRY</td>
    <td>Request is valid and understood, but can't be processed at this time. This request can be retried.</td>
  </tr>
  <tr>
    <td class="text-right">RETRY_LATER</td>
    <td>This request can be retried later after certain state/ error condition has been changed.</td>
  </tr>
  <tr>
    <td class="text-right">OTHER_MEANS</td>
    <td>Special case of retry. Please provide another means of payment.</td>
  </tr>
</table>


List of error names (these names will not change, so you may parse these and attach your logic to the ErrorName):

<table class="table table-striped">
  <tr>
      <td class="text-right">ACTION_NOT_SUPPORTED</td>
      <td>
          The requested action is not supported in the given context or the action can't be executed with the request data.
      </td>
  </tr>
  <tr>
      <td class="text-right">ALIAS_INVALID</td>
      <td>
          The alias is not known or already used (in case of registration).<br />
          <i>Solution:</i> Use another alias for registration
      </td>
  </tr>
  <tr>
      <td class="text-right">AMOUNT_INVALID</td>
      <td>
          The amount does not adhere to the restrictions for this action. E.g. it might be exceeding the allowed capture amount.
      </td>
  </tr>
  <tr>
      <td class="text-right col-sm-4">AUTHENTICATION_FAILED</td>
      <td class="col-sm-8">
          Wrong password, wrong client certificate, invalid token, wrong HMAC.<br />
          <i>Solution:</i> Use proper credentials, fix HMAC calculation, use valid token
      </td>
  </tr>
  <tr>
      <td class="text-right">BLOCKED_BY_RISK_MANAGEMENT</td>
      <td>
          Action blocked by risk management<br />
          <i>Solution:</i> Unblock in Saferpay Risk Management (Backoffice)
      </td>
  </tr>
  <tr>
      <td class="text-right">CARD_CHECK_FAILED</td>
      <td>
          Invalid card number or cvc (this is only returned for the SIX-internal chard check feature for Alias/InsertDirect).<br />
          <i>Solution:</i> Let the card holder correct the entered data
      </td>
  </tr>
  <tr>
      <td class="text-right">CARD_CVC_INVALID</td>
      <td>
          Wrong cvc entered<br />
          <i>Solution:</i> Retry with correct cvc
      </td>
  </tr>
  <tr>
      <td class="text-right">CARD_CVC_REQUIRED</td>
      <td>
          Cvc not entered but required<br />
          <i>Solution:</i> Retry with cvc entered
      </td>
  </tr>
  <tr>
      <td class="text-right">COMMUNICATION_FAILED</td>
      <td>
          The communication to the processor failed.<br />
          <i>Solution:</i> Try again or use another means of payment
      </td>
  </tr>
  <tr>
      <td class="text-right">COMMUNICATION_TIMEOUT</td>
      <td>
          Saferpay did not receive a response from the external system in time. It’s possible that an authorization was created, but Saferpay is not able to know this.<br />
          <i>Solution:</i> Check with the acquirer if there is an authorization which needs to be canceled.
      </td>
  </tr>
  <tr>
      <td class="text-right">CONDITION_NOT_SATISFIED</td>
      <td>
          The condition which was defined in the request could not be satisfied.
      </td>
  </tr>
  <tr>
      <td class="text-right">CURRENCY_INVALID</td>
      <td>
          Currency does not match referenced transaction currency.
      </td>
  </tr>
  <tr>
      <td class="text-right">GENERAL_DECLINED</td>
      <td>
          Transaction declined by unknown reason
      </td>
  </tr>
  <tr>
      <td class="text-right">INTERNAL_ERROR</td>
      <td>
          Internal error in Saferpay<br />
          <i>Solution:</i> Try again
      </td>
  </tr>
  <tr>
      <td class="text-right">NO_CONTRACT</td>
      <td>
          No contract available for the brand / currency combination.<br />
          <i>Solution:</i> Use another card or change the currency to match an existing contract or have the currency activated for the contract.
      </td>
  </tr>
  <tr>
      <td class="text-right">NO_CREDITS_AVAILABLE</td>
      <td>
          No more credits available for this account.<br />
          <i>Solution:</i> Buy more transaction credits
      </td>
  </tr>
  <tr>
      <td class="text-right">PAYER_AUTHENTICATION_REQUIRED</td>
      <td>
          Payer authentication required to proceed (soft decline).
      </td>
  </tr>
  <tr>
      <td class="text-right">PAYMENTMEANS_INVALID</td>
      <td>
          Invalid means of payment (e.g. invalid card)
      </td>
  </tr>
  <tr>
      <td class="text-right">PAYMENTMEANS_NOT_SUPPORTED</td>
      <td>
          Unsupported means of payment (e.g. non SEPA IBAN)
      </td>
  </tr>
  <tr>
      <td class="text-right">PERMISSION_DENIED</td>
      <td>
          No permission (e.g. terminal does not belong to the customer)
      </td>
  </tr>
  <tr>
      <td class="text-right">3DS_AUTHENTICATION_FAILED</td>
      <td>
          3D-secure authentication failed – the transaction must be aborted.<br />
          <i>Solution:</i> Use another card or means of payment
      </td>
  </tr>
  <tr>
      <td class="text-right">TOKEN_EXPIRED</td>
      <td>
          The token is expired.<br />
          <i>Solution:</i> Create a new token.
      </td>
  </tr>
  <tr>
      <td class="text-right">TOKEN_INVALID</td>
      <td>
          The token either does not exist for this customer or was already used
      </td>
  </tr>
  <tr>
      <td class="text-right">TRANSACTION_ABORTED</td>
      <td>
          The transaction was aborted by the payer.
      </td>
  </tr>
  <tr>
      <td class="text-right">TRANSACTION_ALREADY_CAPTURED</td>
      <td>
          Transaction already captured.
      </td>
  </tr>
  <tr>
      <td class="text-right">TRANSACTION_DECLINED</td>
      <td>
          Declined by the processor.<br />
          <i>Solution:</i> Use another card or check details.
      </td>
  </tr>
  <tr>
      <td class="text-right">TRANSACTION_IN_WRONG_STATE</td>
      <td></td>
  </tr>
  <tr>
      <td class="text-right">TRANSACTION_NOT_FOUND</td>
      <td></td>
  </tr>
  <tr>
      <td class="text-right">TRANSACTION_NOT_STARTED</td>
      <td>
          The transaction was not started by the payer. Therefore, no final result for the transaction is available.<br />
          <i>Solution:</i> Try again later.
      </td>
  </tr>
  <tr>
      <td class="text-right">UNEXPECTED_ERROR_BY_ACQUIRER</td>
      <td>
          The acquirer returned an unexpected error code.<br />
          <i>Solution:</i> Try again
      </td>
  </tr>
  <tr>
      <td class="text-right">VALIDATION_FAILED</td>
      <td>
          Validation failed.<br />
          <i>Solution:</i> Fix request
      </td>
  </tr>
</table>

<<<---
