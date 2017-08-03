# Changelog
## Table of Contents
- [Version 1.7](#v1.7.0.20170822)
- [Version 1.6](#v1.6.0.20170404)
- [Version 1.5](#v1.5.0.20170207)
- [Version 1.4](#v1.4.0.20161015)

## <a name="v1.7.0.20170822"></a> Version 1.7 (released 2017-08-22)
- available on Sandbox: 2017-08-03
- introduced version 1.7
- added value `1.7` for _SpecVersion_
- added value `"TWINT"` for _Brand.PaymentMethod_
- added `ApprovalCode` to _PaymentPage/Assert_, _Transaction/AuthorizeDirect_, _Transaction/AuthorizeReferenced_, _Transaction/RefundDirect_ and _Transaction/Refund_ responses
- added `PaymentMethods` to _Transaction/Initialize_ and _Alias/Insert_ requests
- number of concurrent Basic Authentication credentials increased to 10
- improved description for pending statuses

## <a name="v1.6.0.20170404"></a> Version 1.6 (released 2017-04-04)
- available on Sandbox: 2017-03-14
- introduced version 1.6
- added value `1.6` for _SpecVersion_
- added container _Check_ for [Alias/InsertDirect](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Alias_InsertDirect) request
- added container _CheckResult_ for [Alias/AssertInsert](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Alias_AssertInsert) and [Alias/InsertDirect](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Alias_InsertDirect) responses

## <a name="v1.5.0.20170207"></a> Version 1.5 (released 2017-02-07)
- introduced version 1.5
- added value `1.5` for _SpecVersion_
- added method [Transaction/AssertCapture](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_AssertCapture) for checking the status of a pending capture (currently needed for paydirekt)
- added method [Transaction/AssertRefund](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_AssertRefund) for checking the status of a pending refund (currently needed for paydirekt)
- added container _PendingNotification_ for [Transaction/Capture](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_Capture) requests for notification settings on pending captures (currently needed for paydirekt)
- added container _PendingNotification_ for [Transaction/Refund](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_Refund) requests for notification settings on pending captures (currently needed for paydirekt)
- added _Status_ in  [Transaction/Capture](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_Capture) responses to indicate the status of a capture
- changed _Date_ in  [Transaction/Capture](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_Capture) responses to optional, e.g. for pending captures
- changed [PaymentPage/Initialize](http://saferpay.github.io/jsonapi/index.html#Payment_v1_PaymentPage_Initialize) request to allow _BillingAddressForm.Display_ and _DeliveryAddressForm.Display_ both set to `true` at the same time
- added _ContentSecurityEnabled_ to _Styling_ container to control Content Security Policy
- corrected type documentation for _CountrySubdivisionCode_ to "_AlphaNumeric_" in the address containers

## <a name="v1.4.0.20161015"></a> Version 1.4 (released 2016-10-15)
- new version 1.4
  - added value `1.4` for _SpecVersion_
  - added option _SuppressDcc_ for [Transaction/AuthorizeReferenced](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_AuthorizeReferenced)
  - added values `BANCONTACT` and `PAYDIREKT` for _Brand.PaymentMethod_ and _PaymentMethods_ in [PaymentPage/Initialize](http://saferpay.github.io/jsonapi/index.html#Payment_v1_PaymentPage_Initialize)
  - added validation for element _Payment.MandateId_
  - added option _ConfigSet_ for [PaymentPage/Initialize](http://saferpay.github.io/jsonapi/index.html#Payment_v1_PaymentPage_Initialize)
- added a note that partial captures are currently only supported for PayPal
- added a note that values for AliasID are case-insensitive
- corrected example for [Transaction/AuthorizeDirect](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_AuthorizeDirect)
- corrected example for [Transaction/AuthorizeReferenced](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_AuthorizeReferenced)
- corrected example for [Transaction/Authorize](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_Authorize)
- corrected example for [Transaction/Initialize](http://saferpay.github.io/jsonapi/index.html#Payment_v1_Transaction_Initialize)
- improved description for _TransactionReference_
- corrected example for _BillpayCapture.DelayInDays_
- improved description for _ReturnUrls_
