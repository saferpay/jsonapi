# <a name="changelog"></a> Changelog

## Table of Contents
- [Version 1.25](#v1.25.0.0.20211116)
- [Version 1.24](#v1.24.0.0.20210914)
- [Version 1.23](#v1.23.0.0.20210713)
- [Version 1.22](#v1.22.0.0.20210518)
- [Version 1.21](#v1.21.0.0.20210323)
- [Version 1.20](#v1.20.0.0.20201110)
- [Version 1.19](#v1.19.0.0.20200915)
- [Version 1.18](#v1.18.0.0.20200714)
- [Version 1.17](#v1.17.0.0.20200512)
- [Version 1.16](#v1.16.0.0.20200317)
- [Version 1.15](#v1.15.0.0.20200121)
- [Version 1.14](#v1.14.0.0.20191119)
- [Version 1.13](#v1.13.0.0.20190917)
- [Version 1.12](#v1.12.0.0.20190716)
- [Version 1.11](#v1.11.0.0.20190521)
- [Version 1.10](#v1.10.0.0.20181113)
- [Version 1.9](#v1.9.0.20180515)
- [Version 1.8](#v1.8.0.20171114)
- [Version 1.7](#v1.7.0.20170822)
- [Version 1.6](#v1.6.0.20170404)
- [Version 1.5](#v1.5.0.20170207)
- [Version 1.4](#v1.4.0.20161015)

## <a name="v1.25.0.0.20211116"></a> Version 1.25 (released 2021-11-16)
- available on Sandbox: 2021-11-02
- introduced version 1.25
- added value `1.25` for _SpecVersion_
- added container _GooglePay_ to [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) and [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) requests
- added value `GOOGLEPAY` for _Wallets_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request to enable the preselection of Apple Pay
- added container _PayPal_ to [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert) response
- added parameter _RestrictRefundAmountToCapturedAmount_ to container _Refund_ in [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) request
- added parameter _LogoUrl_ to containers _PaymentMethods_ and _Wallets_ in Management API [TerminalInfo PaymentMethods](index.html#rest_customers_terminals_payment-methods) response

## <a name="v1.24.0.0.20210914"></a> Version 1.24 (released 2021-09-14)
- available on Sandbox: 2021-08-31
- introduced version 1.24
- added value `1.24` for _SpecVersion_
- replaced parameter `NotifyUrl` in the _Notification_ container with the two separate parameters `SuccessNotifyUrl` and `FailNotifyUrl` in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) and [Transaction/RedirectPayment](index.html#Payment_v1_Transaction_RedirectPayment) requests
- added container _Klarna_ to [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request
- added container _OriginalCreditTransfer_ to [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) request
- added container _ApplePay_ to [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) and [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) requests

## <a name="v1.23.0.0.20210713"></a> Version 1.23 (released 2021-07-13)
- available on Sandbox: 2021-07-13
- introduced version 1.23
- added value `1.23` for _SpecVersion_
- added container _RedirectNotifyUrls_ to [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) request
- added container _SchemeToken_ to [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) and [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) requests
- added container _IssuerReference_ to [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) request
- removed parameter _VerificationValue_ from [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire), [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment), [Alias/AssertInsert](index.html#Payment_v1_Alias_AssertInsert), [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) and [OmniChannel/InsertAlias](index.html#Payment_v1_OmniChannel_InsertAlias) responses
- marked parameter _CssUrl_ as ***deprecated*** in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)

## <a name="v1.22.0.0.20210518"></a> Version 1.22 (released 2021-05-18)
- available on Sandbox: 2021-05-04
- introduced version 1.22
- added value `1.22` for _SpecVersion_
- changed values of parameter _LiableEntity_ to ALL_CAPS instead of PascalCase in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert),  [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire) and [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) responses
- added parameter _InPsd2Scope_ to container _Liability_ in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert),  [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire) and [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) responses
- added parameters _Version_ and _AuthenticationType_ to container _ThreeDs_ in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert),  [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire) and [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) responses

## <a name="v1.21.0.0.20210323"></a> Version 1.21 (released 2021-03-23)
- available on Sandbox: 2021-03-09
- introduced version 1.21
- added value `1.21` for _SpecVersion_
- added new function to [Saferpay Management API](index.html#ChapterRestApi) for automated creation of Saferpay Fields Access Tokens
- added parameter _Initiator_ to [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) request
- added container _IssuerReference_ to [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) request and [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/Refund](index.html#Payment_v1_Transaction_Refund), [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect), [Transaction/AssertRedirectPayment](index.html#Payment_v1_Transaction_AssertRedirectPayment), [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire), [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) and [OmniChannel/AcquireTransaction](index.html#Payment_v1_OmniChannel_AcquireTransaction) responses
- added container _Risk_ to the [Error Message](index.html#errorhandling)
- added parameter _PayerMessage_ to the [Error Message](index.html#errorhandling)

## <a name="v1.20.0.0.20201110"></a> Version 1.20 (released 2020-11-10)
- available on Sandbox: 2020-10-27
- introduced version 1.20
- added value `1.20` for _SpecVersion_
- added containers _Order_ and _RiskFactors_ to [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) and [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) requests
- added _AllowPartialAuthorization_ flag in _Options_ container under _Payments_ in [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect)
- added container _FraudPrevention_ to [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) and [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) responses

## <a name="v1.19.0.0.20200915"></a> Version 1.19 (released 2020-09-15)
- available on Sandbox: 2020-09-01
- introduced version 1.19
- added value `1.19` for _SpecVersion_
- added container _PayerProfile_ to container _RiskFactors_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) requests
- added containers _Order_ and _RiskFactors_ to [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) request
- added container _FraudPrevention_ in [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert) and [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) responses
- removed parameters _AccountCreationDate_ and _PasswordLastChangeDate_ from container _RiskFactors_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) requests (moved to container _PayerProfile_)
- added parameter _Description_ to container _Payment_ in [Saferpay Secure PayGate API CreateOffer](index.html#rest_customers_[customerId]_terminals_[terminalId]_spg-offers) request

## <a name="v1.18.0.0.20200714"></a> Version 1.18 (released 2020-07-14)
- available on Sandbox: 2020-07-01
- introduced version 1.18
- added value `1.18` for _SpecVersion_
- added parameter _Id_ to container _Payer_ in  [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize), [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/RedirectPayment](index.html#Payment_v1_Transaction_RedirectPayment), [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) requests and [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/QueryPaymentMeans](index.html#Payment_v1_Transaction_QueryPaymentMeans), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/AssertRedirectPayment](index.html#Payment_v1_Transaction_AssertRedirectPayment), [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire), [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) responses
- added container _Order_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) requests
- added container _RiskFactors_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) requests
- added container _RegisterAlias_ in [Secure PayGate API SecurePayGateOffer CreateOffer](index.html#rest_customers_[customerId]_terminals_[terminalId]_spg-offers)

## <a name="v1.17.0.0.20200512"></a> Version 1.17 (released 2020-05-12)
- available on Sandbox: 2020-04-28
- introduced version 1.17
- added value `1.17` for _SpecVersion_
- added parameter _VerificationCode_ to container _CardForm_ in [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) request
- added container _SaferpayFields_ in [Alias/Insert](index.html#Payment_v1_Alias_Insert) and [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) requests
- removed parameter _RedirectUrl_ in [Alias/Insert](index.html#Payment_v1_Alias_Insert) response
- added parameter _RedirectRequired_ in [Alias/Insert](index.html#Payment_v1_Alias_Insert) response
- added container _Redirect_ in [Alias/Insert](index.html#Payment_v1_Alias_Insert) response
- marked parameter _CssUrl_ as _**deprecated**_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize), [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/RedirectPayment](index.html#Payment_v1_Transaction_RedirectPayment) and [Alias/Insert](index.html#Payment_v1_Alias_Insert) requests

## <a name="v1.16.0.0.20200317"></a> Version 1.16 (released 2020-03-17)
- available on Sandbox: 2020-03-03
- introduced version 1.16
- added value `1.16` for _SpecVersion_
- added value `ONLINE_STRONG` for _Check.Type_ in [Alias/Insert](index.html#Payment_v1_Alias_Insert) request
- added value `OK_AUTHENTICATED` for _CheckResult.Result_ in [Alias/AssertInsert](index.html#Payment_v1_Alias_AssertInsert) response
- added container _Authentication_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize), [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced) requests
- added container _Authentication_ to container _CheckResult_ in [Alias/AssertInsert](index.html#Payment_v1_Alias_AssertInsert), [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) and [OmniChannel/InsertAlias](index.html#Payment_v1_OmniChannel_InsertAlias) responses
- added container _AuthenticationResult_ in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize) and [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) responses
- added container _MastercardIssuerInstallments_ in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize) and [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) responses
- added container _MastercardIssuerInstallments_ in [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) request

## <a name="v1.15.0.0.20200121"></a> Version 1.15 (released 2020-01-21)
- available on Sandbox: 2020-01-07
- introduced version 1.15
- added value `1.15` for _SpecVersion_
- added container _Ideal_ to [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request to enable the preselection of an iDEAL issuer
- added value `APPLEPAY` for _Wallets_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request to enable the preselection of Apple Pay


## <a name="v1.14.0.0.20191119"></a> Version 1.14 (released 2019-11-19)
- available on Sandbox: 2019-11-05
- introduced version 1.14
- added value `1.14` for _SpecVersion_
- added new [Saferpay Secure PayGate API](index.html#ChapterRestApi) for automated creation of Saferpay Secure PayGate offers
- added container _SaferpayFields_ to container _PaymentMeans_ in [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) and [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) requests


## <a name="v1.13.0.0.20190917"></a> Version 1.13 (released 2019-09-17)
- available on Sandbox: 2019-09-10
- introduced version 1.13
- added value `1.13` for _SpecVersion_
- added container _PaymentMethodsOptions_ to  [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) to allow the setting of payment method specific options. Currently used for Bancontact specific settings
- added new country code value _XK_ (Kosovo) to field CountryCode
- added new value _DIVERSE_ in field Gender
- added new error code _PAYMENTMEANS_NOT_SUPPORTED_ with corresponding error message "Unsupported means of payment (e.g. non SEPA IBAN)"


## <a name="v1.12.0.0.20190716"></a> Version 1.12 (released 2019-07-16)
- available on Sandbox: 2019-07-02
- introduced version 1.12
- added value `1.12` for _SpecVersion_
- added method [Alias/Update](index.html#Payment_v1_Alias_Update) for updating the details of an alias
- added methods [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) and [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) which enable the implementation of customized checkout processes (i.e. in mobile shopping apps) - at the moment only available for Bancontact
- replaced _MerchantEmail_ with _MerchantEmails_ that can be filled with up to 10 email addresses to which the payment notification is sent

## <a name="v1.11.0.0.20190521"></a> Version 1.11 (released 2019-05-21)
- available on Sandbox: 2019-05-07
- introduced version 1.11
- added value `1.11` for _SpecVersion_
- added method [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire) for inquiring the details of previous transaction
- added container _PaymentMethodsOptions_ to [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) to allow for setting payment method specific options
- added _Condition_ to [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request to control the minimum authentication level 
- added _HolderSegment_ to [Alias/AssertInsert](index.html#Payment_v1_Alias_AssertInsert) and [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) responses to indicate the segment (e.g. Corporate) of the card holder
- added _CaptureId_ to [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/Refund](index.html#Payment_v1_Transaction_Refund), [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) and [OmniChannel/AcquireTransaction](index.html#Payment_v1_OmniChannel_AcquireTransaction) responses to identify a (partial) capture for refunding
- added value `IF_ALLOWED_BY_SCHEME` for field `Condition` in [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize) request
- added value `ALIPAY` for _Brand.PaymentMethod_, _PaymentMethods_ and _Wallet.PaymentMethods_
- removed `VerificationValue` from `ThreeDs` container

## <a name="v1.10.0.0.20181113"></a> Version 1.10 (released 2018-11-13)
- available on Sandbox: 2018-08-14
- introduced version 1.10
- added value `1.10` for _SpecVersion_
- added method [Transaction/MultipartCapture](index.html#Payment_v1_Transaction_MultipartCapture) for capturing multiple parts of a transaction also supporting enhanced clearing for marketplaces
- added method [Transaction/MultipartFinalize](index.html#Payment_v1_Transaction_MultipartFinalize) to finalize a transaction that is still open for capturing additional parts
- added container _MarketPlace_ to [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) request to support enhanced clearing for marketplaces
- removed container _Partial_ from [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) request - see method [Transaction/MultipartCapture](index.html#Payment_v1_Transaction_MultipartCapture) for details
- replaced _TransactionId_ and _OrderId_ with _CaptureId_ in [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) response to uniquely identify captures
- replaced container _TransactionReference_ with _CaptureReference_ in [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) and [Transaction/AssertCapture](index.html#Payment_v1_Transaction_AssertCapture) request to uniquely identify captures
- added value `TWINT` for field `Type` in [Alias/Insert](index.html#Payment_v1_Alias_Insert) requests (only available in the Sandbox environment until further notice)
- added subcontainer `Twint` to container `PaymentMeans`

## <a name="v1.9.0.20180515"></a> Version 1.9 (released 2018-05-15)
- available on Sandbox: 2018-04-26
- introduced version 1.9
- added value `1.9` for _SpecVersion_
- replaced container _ThreeDs_ from previous versions with _Liability_ in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) responses

## <a name="v1.8.0.20171114"></a> Version 1.8 (released 2017-11-14)
- available on Sandbox: 2017-11-02
- introduced version 1.8
- added value `1.8` for _SpecVersion_
- added _SixTransactionReference_ to [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) and [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) responses for Omni Channel use cases
- added method [OmniChannel/AcquireTransaction](index.html#Payment_v1_OmniChannel_AcquireTransaction) for retrieving a previously authorized transaction from another channel
- added method [OmniChannel/InsertAlias](index.html#Payment_v1_OmniChannel_InsertAlias) for retrieving an alias for a card used in a previously authorized transaction from another channel
- added container _CardForm_ for [Alias/Insert](index.html#Payment_v1_Alias_Insert) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) requests for adjusting the card form's mandatory fields

## <a name="v1.7.0.20170822"></a> Version 1.7 (released 2017-08-22)
- available on Sandbox: 2017-08-03
- introduced version 1.7
- added value `1.7` for _SpecVersion_
- added value `TWINT` for _Brand.PaymentMethod_
- added _ApprovalCode_ to [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) and [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) responses
- added _PaymentMethods_ to [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) and [Alias/Insert](index.html#Payment_v1_Alias_Insert) requests
- increased number of concurrent Basic Authentication credentials to 10
- improved description for pending statuses

## <a name="v1.6.0.20170404"></a> Version 1.6 (released 2017-04-04)
- available on Sandbox: 2017-03-14
- introduced version 1.6
- added value `1.6` for _SpecVersion_
- added container _Check_ for [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) request
- added container _CheckResult_ for [Alias/AssertInsert](index.html#Payment_v1_Alias_AssertInsert) and [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) responses

## <a name="v1.5.0.20170207"></a> Version 1.5 (released 2017-02-07)
- introduced version 1.5
- added value `1.5` for _SpecVersion_
- added method [Transaction/AssertCapture](index.html#Payment_v1_Transaction_AssertCapture) for checking the status of a pending capture (currently needed for paydirekt)
- added method [Transaction/AssertRefund](index.html#Payment_v1_Transaction_AssertRefund) for checking the status of a pending refund (currently needed for paydirekt)
- added container _PendingNotification_ for [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) requests for notification settings on pending captures (currently needed for paydirekt)
- added container _PendingNotification_ for [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) requests for notification settings on pending captures (currently needed for paydirekt)
- added _Status_ in  [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) responses to indicate the status of a capture
- changed _Date_ in  [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) responses to optional, e.g. for pending captures
- changed [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request to allow _BillingAddressForm.Display_ and _DeliveryAddressForm.Display_ both set to `true` at the same time
- added _ContentSecurityEnabled_ to _Styling_ container to control Content Security Policy
- corrected type documentation for _CountrySubdivisionCode_ to "_AlphaNumeric_" in the address containers

## <a name="v1.4.0.20161015"></a> Version 1.4 (released 2016-10-15)
- new version 1.4
  - added value `1.4` for _SpecVersion_
  - added option _SuppressDcc_ for [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced)
  - added values `BANCONTACT` and `PAYDIREKT` for _Brand.PaymentMethod_ and _PaymentMethods_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)
  - added validation for element _Payment.MandateId_
  - added option _ConfigSet_ for [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)
- added a note that partial captures are currently only supported for PayPal
- added a note that values for AliasID are case-insensitive
- corrected example for [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect)
- corrected example for [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced)
- corrected example for [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize)
- corrected example for [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize)
- improved description for _TransactionReference_
- corrected example for _BillpayCapture.DelayInDays_
- improved description for _ReturnUrls_
