# Changelog

TODO: format

Changes
Version 1.4 R72 (Changeset 68698)
new version 1.4
added value "1.4" for SpecVersion
added option SuppressDcc for Transaction/AuthorizeReferenced
added values "BANCONTACT" and "PAYDIREKT" for Brand.PaymentMethod and PaymentMethods in PaymentPage/Initialize
added validation for element Payment.MandateId
added option ConfigSet for PaymentPage/Initialize
(non-public) added new container P2PAustria in PaymentPage/Initialize request, PaymentPage/Assert response, Transaction/Initialize request, Transaction/Authorize response, Transaction/QueryPaymentMeans response, Transaction/AuthorizeDirect request and response, Transaction/Refund request and response, Transaction/RefundDirect request and response, Transaction/RedirectPayment request and Transaction/AssertRedirectPayment response
(non-public) added new container VisaCheckoutLight in PaymentMeans
added a note that partial captures are currently only supported for PayPal
added a note that values for AliasID are case-insensitive
corrected example for Transaction/AuthorizeDirect
corrected example for Transaction/AuthorizeReferenced
corrected example for Transaction/Authorize
corrected example for Transaction/Initialize
improved description for TransactionReference
corrected example for BillpayCapture.DelayInDays
improved description for ReturnUrls
