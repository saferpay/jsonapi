# Changelog

* [Version 1.4](#v14)

## <a name='v14'></a> Version 1.4 (Released: 15. Nov 2016)

* new version 1.4
  * added value "1.4" for SpecVersion
  * added option SuppressDcc for [Transaction/AuthorizeReferenced](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_AuthorizeReferenced)
  * added values "BANCONTACT" and "PAYDIREKT" for Brand.PaymentMethod and PaymentMethods in [PaymentPage/Initialize](http://saferpay.github.io/jsonapi/index.html#Payment_v1_PaymentPage_Initialize)
  * added validation for element Payment.MandateId
  * added option ConfigSet for [PaymentPage/Initialize](http://saferpay.github.io/jsonapi/index.html#Payment_v1_PaymentPage_Initialize)
* added a note that partial captures are currently only supported for PayPal
* added a note that values for AliasID are case-insensitive
* corrected example for [Transaction/AuthorizeDirect](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_AuthorizeDirect)
* corrected example for [Transaction/AuthorizeReferenced](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_AuthorizeReferenced)
* corrected example for [Transaction/Authorize](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_Authorize)
* corrected example for [Transaction/Initialize](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_Initialize)
* improved description for TransactionReference
* corrected example for BillpayCapture.DelayInDays
* improved description for ReturnUrls
