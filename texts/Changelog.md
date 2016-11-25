# Changelog

## History

* [Version 1.4](#v14)

## <a name='v14'></a> Version 1.4 (Released: 15. Nov 2016)

* new version 1.4
  * added value "1.4" for _SpecVersion_
  * added option _SuppressDcc_ for [Transaction/AuthorizeReferenced](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_AuthorizeReferenced)
  * added values "_BANCONTACT_" and "_PAYDIREKT_" for _Brand.PaymentMethod_ and _PaymentMethods_ in [PaymentPage/Initialize](http://saferpay.github.io/jsonapi/index.html#Payment_v1_PaymentPage_Initialize)
  * added validation for element _Payment.MandateId_
  * added option _ConfigSet_ for [PaymentPage/Initialize](http://saferpay.github.io/jsonapi/index.html#Payment_v1_PaymentPage_Initialize)
* added a note that partial captures are currently only supported for PayPal
* added a note that values for AliasID are case-insensitive
* corrected example for [Transaction/AuthorizeDirect](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_AuthorizeDirect)
* corrected example for [Transaction/AuthorizeReferenced](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_AuthorizeReferenced)
* corrected example for [Transaction/Authorize](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_Authorize)
* corrected example for [Transaction/Initialize](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_Initialize)
* improved description for _TransactionReference_
* corrected example for _BillpayCapture.DelayInDays_
* improved description for _ReturnUrls_
