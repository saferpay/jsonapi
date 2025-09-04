# <a name="changelog"></a> Changelog

## Table of Contents

-   [Version 1.48](#v1.48.0.0.20250916)
-   [Version 1.47](#v1.47.0.0.20250708)
-   [Version 1.46](#v1.46.0.0.20250506)
-   [Version 1.45](#v1.45.0.0.20250318)
-   [Version 1.44](#v1.44.0.0.20250121)
-   [Version 1.43](#v1.43.0.0.20241112)
-   [Version 1.42](#v1.42.0.0.20240917)
-   [Version 1.41](#v1.41.0.0.20240716)
-   [Version 1.40](#v1.40.0.0.20240521)
-   [Version 1.39](#v1.39.0.0.20240319)
-   [Version 1.38](#v1.38.0.0.20240123)
-   [Version 1.37](#v1.37.0.0.20231114)
-   [Version 1.36](#v1.36.0.0.20230912)
-   [Version 1.35](#v1.35.0.0.20230718)
-   [Version 1.34](#v1.34.0.0.20230516)
-   [Version 1.33](#v1.33.0.0.20230321)
-   [Version 1.32](#v1.32.0.0.20230117)
-   [Version 1.31](#v1.31.0.0.20221115)
-   [Version 1.30](#v1.30.0.0.20220920)
-   [Version 1.29](#v1.29.0.0.20220719)
-   [Version 1.28](#v1.28.0.0.20220517)
-   [Version 1.27](#v1.27.0.0.20220315)
-   [Version 1.26](#v1.26.0.0.20220118)
-   [Version 1.25](#v1.25.0.0.20211116)
-   [Version 1.24](#v1.24.0.0.20210914)
-   [Version 1.23](#v1.23.0.0.20210713)
-   [Version 1.22](#v1.22.0.0.20210518)
-   [Version 1.21](#v1.21.0.0.20210323)
-   [Version 1.20](#v1.20.0.0.20201110)
-   [Version 1.19](#v1.19.0.0.20200915)
-   [Version 1.18](#v1.18.0.0.20200714)
-   [Version 1.17](#v1.17.0.0.20200512)
-   [Version 1.16](#v1.16.0.0.20200317)
-   [Version 1.15](#v1.15.0.0.20200121)
-   [Version 1.14](#v1.14.0.0.20191119)
-   [Version 1.13](#v1.13.0.0.20190917)
-   [Version 1.12](#v1.12.0.0.20190716)
-   [Version 1.11](#v1.11.0.0.20190521)
-   [Version 1.10](#v1.10.0.0.20181113)
-   [Version 1.9](#v1.9.0.20180515)
-   [Version 1.8](#v1.8.0.20171114)
-   [Version 1.7](#v1.7.0.20170822)
-   [Version 1.6](#v1.6.0.20170404)
-   [Version 1.5](#v1.5.0.20170207)
-   [Version 1.4](#v1.4.0.20161015)

## <a name="v1.48.0.0.20250916"></a> Version 1.48 (released 2025-09-16)

-   available on Sandbox: 2025-09-02
-   introduced version 1.48
-   added value `1.48` for _SpecVersion_
-   introduced a new function to provide Dynamic Currency Conversion (DCC) inquiry details for your customer: [Transaction\DccInquiry](index.html#Payment_v1_Transaction_DccInquiry)
-   A mistake in the JSON API documentation has been fixed:
    -   SaferpayFields- and SchemeToken-PaymentMeans are not supported in [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect).
    -   Alias- and SchemeToken-PaymentMeans are not supported in [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect)

## <a name="v1.47.0.0.20250708"></a> Version 1.47 (released 2025-07-08)

-   available on Sandbox: 2025-06-24
-   introduced version 1.47
-   added value `1.47` for _SpecVersion_
-   added value `ONLINE_STRONG` to `Type` in the `Check` container and added new container `ExternalThreeDS` in [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect)

## <a name="v1.46.0.0.20250506"></a> Version 1.46 (released 2025-05-20)

-   available on Sandbox: 2025-05-06
-   introduced version 1.46
-   added value `1.46` for _SpecVersion_
-   added new subcontainer `ExternalThreeDS` to container `Authentication`. This affects the following requests:
    -   [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect)

## <a name="v1.45.0.0.20250318"></a> Version 1.45 (released 2025-03-18)

-   available on Sandbox: 2025-03-04
-   introduced version 1.45
-   added value `1.45` for _SpecVersion_
-   added `Tokenization` to the following responses:
    -   [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert)
    -   [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize)
    -   [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect)
    -   [Alias/Insert](index.html#Payment_v1_Alias_Insert)
    -   [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect)
    -   [Alias/Update](index.html#Payment_v1_Alias_Update)
    -   [Alias/Inquire](index.html#Payment_v1_Alias_Inquire)
-   added `REKA` as valid value for the field `PaymentMethods`
-   removed `BONUS` and `MYONE` as valid values for the field `PaymentMethods`
-   removed `Billpay` from the request in [Transaction/Capture](index.html#Payment_v1_Transaction_Capture)
-   removed `A2A` from the request in [Transaction/Refund](index.html#Payment_v1_Transaction_Refund)
-   removed `Invoice` from the following responses
    -   [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert)
    -   [Transaction/Refund](index.html#Payment_v1_Transaction_Refund)
    -   [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect)
    -   [Transaction/RefundDirect](index.html#Payment_v1_Transaction_AssertRedirectPayment)
    -   [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire)
    -   [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment)
    -   [OmniChannel/AcquireTransaction](index.html#Payment_v1_OmniChannel_AcquireTransaction)
-   added `PayerNote` to the following requests:
    -   [Transaction/Refund](index.html#Payment_v1_Transaction_Refund)
    -   [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect)

## <a name="v1.44.0.0.20250121"></a> Version 1.44 (released 2025-01-21)

-   available on Sandbox: 2025-01-07
-   introduced version 1.44
-   added value `1.44` for _SpecVersion_
-   improved documentation of some API response fields related to payment methods to clarify that new, currently undocumented values might be returned in the future by Saferpay as support for new payment methods is implemented. The following API responses are affected:
    -   [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert)
    -   [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire)
-   added new function to [Saferpay Management API](index.html#ChapterManagementApi) for deleting Fields AccessTokens
-   added new function [Alias/Inquire](index.html#Payment_v1_Alias_Inquire)
-   added masked token PAN and expiry date to `Card` container to the following responses:
    -   [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize)
    -   [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect)
    -   [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect)
    -   [Transaction/Refund](index.html#Payment_v1_Transaction_Refund)
    -   [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire)
-   removed subcontainer `Ideal` from container `PaymentMethodsOptions` in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)

## <a name="v1.43.0.0.20241112"></a> Version 1.43 (released 2024-11-12)

-   available on Sandbox: 2024-10-29
-   introduced version 1.43
-   added value `1.43` for _SpecVersion_
-   added `DCC` Information to the response of [OmniChannel/AcquireTransaction](index.html#Payment_v1_OmniChannel_AcquireTransaction)
-   added `BLIK` as valid value for the field `PaymentMethods`
-   added new `MerchantFundDistributor` container with `ForeignRetailer` subcontainer. This affects the following requests:
    -   [Transaction/Capture](index.html#Payment_v1_Transaction_Capture)
    -   [Transaction/MultipartCapture](index.html#Payment_v1_Transaction_MultipartCapture)
-   added `CLICKTOPAY` as valid value to `Wallet` in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) requests to enable the preselection of Click to Pay
-   added `CLICKTOPAY` as valid value to `Wallet` in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert) responses
    -   only provided in responses starting from API version v1.43, in older API versions this information is not provided in the response

## <a name="v1.42.0.0.20240917"></a> Version 1.42 (released 2024-09-17)

-   available on Sandbox: 2024-09-03
-   introduced version 1.42
-   added value `1.42` for _SpecVersion_
-   added iDEAL with AccountHolderName to `PaymentMethodsOptions` of [Transaction/Refund](index.html#Payment_v1_Transaction_Refund)

## <a name="v1.41.0.0.20240716"></a> Version 1.41 (released 2024-07-16)

-   available on Sandbox: 2024-07-02
-   introduced version 1.41
-   added value `1.41` for _SpecVersion_
-   added additional info about the used ISO-standard and applied restrictions to field `LanguageCode` of the _Payer_ container and [SecureCardData/AliasInsert](index.html#Payment_v1_Alias_Insert) requests
-   added new subcontainer _ForeignRetailer_ to container _Marketplace_. This affects the following requests:
    -   [Transaction/Capture](index.html#Payment_v1_Transaction_Capture)
    -   [Transaction/MultipartCapture](index.html#Payment_v1_Transaction_MultipartCapture)

## <a name="v1.40.0.0.20240521"></a> Version 1.40 (released 2024-05-21)

-   available on Sandbox: 2024-05-07
-   introduced version 1.40
-   added value `1.40` for _SpecVersion_
-   added Scheme Token type `MDES` and `VTS` (only available for Worldline Acquiring)
-   added `WECHATPAY` as valid value for the field `PaymentMethods`
-   added `SchemeToken` to `PaymentMeans` container
-   added `POSTFINANCEPAY` as valid value for `Type` in [Alias/Insert](index.html#Payment_v1_Alias_Insert)
-   removed `PAYPAL` as option in [Transaction/RedirectPayment](index.html#Payment_v1_Transaction_RedirectPayment) (feature is deprecated)
-   removed `POSTFINANCE` and `POSTCARD` as valid values for `PaymentMethods` in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) requests
-   removed `POSTFINANCE` as valid value for `Type` in [Alias/Insert](index.html#Payment_v1_Alias_Insert)
-   removed `BANCONTACT` as valid value for `PaymentMethods` in [Alias/Insert](index.html#Payment_v1_Alias_Insert)

## <a name="v1.39.0.0.20240319"></a> Version 1.39 (released 2024-03-19)

-   available on Sandbox: 2024-03-01
-   introduced version 1.39
-   added value `1.39` for _SpecVersion_
-   removed `Styling` container from [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) in all API versions
-   [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert) can now be called up to 120 hours for pending transactions (instead of 96 hours before)
-   removed `Transaction/QueryPaymentMeans` and `Transaction/AdjustAmount` methods from Saferpay Payment API
-   added `MandatoryFields` field to _BillingAddressForm_ container in [SecurePayGate Create SingleUsePaymentLink](index.html#rest_customers_[customerId]_terminals_[terminalId]_spg-offers)
-   option `MANUAL_REVIEW` in field `Result` of _FraudPrevention_ container is now called `CHALLENGED`. This affects following requests:
    -   [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert)
    -   [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize)
    -   [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect)
    -   [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire)
    -   [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment)

## <a name="v1.38.0.0.20240123"></a> Version 1.38 (released 2024-01-23)

-   available on Sandbox: 2024-01-04
-   introduced version 1.38
-   added value `1.38` for _SpecVersion_
-   added 48 bits support to `ColorDepth`
-   removed Alipay from `PaymentMethodOptions` container [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)
-   added `PaymentMethodsOptions` to [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) for A2A AccountHolderName
-   added `WITH_SUCCESSFUL_THREE_DS_CHALLENGE` value to `Condition` in [SecurePayGate Create SingleUsePaymentLink](index.html#rest_customers_[customerId]_terminals_[terminalId]_spg-offers) requests
-   Token expiration increased for [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert) and pending transactions
-   improve case validation
-   common error message improvements

## <a name="v1.37.0.0.20231114"></a> Version 1.37 (released 2023-11-14)

-   available on Sandbox: 2023-10-27
-   introduced version 1.37
-   added value `1.37` for _SpecVersion_
-   added `POSTFINANCEPAY` as valid value for field `PaymentMethods` in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) requests
-   extended selection of possible characters for `PayerId`, affecting the following requests and responses:
    -   [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)
    -   [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert)
    -   [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize)
    -   [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize)
    -   [Transaction/QueryPaymentMeans](index.html#Payment_v1_Transaction_QueryPaymentMeans)
    -   [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect)
    -   [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced)
    -   [Transaction/RedirectPayment](index.html#Payment_v1_Transaction_RedirectPayment)
    -   [Transaction/AssertRedirectPayment](index.html#Payment_v1_Transaction_AssertRedirectPayment)
    -   [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire)
    -   [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment)
    -   [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment)
-   added `TokenType` field to `SchemeToken`, affecting the following requests and responses:
    -   [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize)
    -   [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect)

## <a name="v1.36.0.0.20230912"></a> Version 1.36 (released 2023-09-12)

-   available on Sandbox: 2023-08-29
-   introduced version 1.36
-   added value `1.36` for _SpecVersion_
-   removed `CheckResult` from [OmniChannel/InsertAlias](index.html#Payment_v1_OmniChannel_InsertAlias) response
-   removed `UNIONPAY` as valid value from field `PaymentMethods` in [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) requests
-   removed `LegalForm` from the `BillingAddress`, `DeliveryAddress` and `Recipient` container, affecting the following requests and responses:
    -   [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)
    -   [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert)
    -   [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize)
    -   [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize)
    -   [Transaction/QueryPaymentMeans](index.html#Payment_v1_Transaction_QueryPaymentMeans)
    -   [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect)
    -   [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced)
    -   [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect)
    -   [Transaction/RedirectPayment](index.html#Payment_v1_Transaction_RedirectPayment)
    -   [Transaction/AssertRedirectPayment](index.html#Payment_v1_Transaction_AssertRedirectPayment)
    -   [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire)
    -   [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment)
    -   [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment)
    -   [OmniChannel/AcquireTransaction](index.html#Payment_v1_OmniChannel_AcquireTransaction)
    -   [SecurePayGate Create SingleUsePaymentLink](index.html#rest_customers_[customerId]_terminals_[terminalId]_spg-offers)
-   renamed the following values of the `Condition` field
    -   `WITH_LIABILITY_SHIFT` is now `THREE_DS_AUTHENTICATION_SUCCESSFUL_OR_ATTEMPTED`
    -   `IF_ALLOWED_BY_SCHEME` is now `NONE`
-   added `Condition` field to [SecurePayGate Create SingleUsePaymentLink](index.html#rest_customers_[customerId]_terminals_[terminalId]_spg-offers) requests

## <a name="v1.35.0.0.20230718"></a> Version 1.35 (released 2023-07-18)

-   available on Sandbox: 2023-07-04
-   introduced version 1.35
-   added value `1.35` for _SpecVersion_
-   added CARD as value from field PaymentMethod in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) requests
-   added [CustomerLicense](index.html#rest_customers_[customerId]_license) method to Saferpay Management API
-   removed `CustomerLicenseConfiguration` method from Saferpay Management API
-   added endpoint SecurePayGate `Delete` [SingleUsePaymentLink](index.html#rest_customers_[customerId]_terminals_[terminalId]_spg-offers_[offerId]) to Saferpay Management API
-   added container `payer` to [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize) and [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect)
-   added container `notification` to [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) and [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced)
-   added property `PayerDccReceiptEmail` to [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize), [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) and [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced)
-   per default, in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) the field `HolderName` is not shown
-   [SecurePayGate Create SingleUsePaymentLink](index.html#rest_customers_[customerId]_terminals_[terminalId]_spg-offers), argument `ExpirationDate` is now in the format`yyyy-MM-ddTHH:mm:ssK` and has to be at least 1h in the future and within 180 days
-   the `CountrySubdivisionCode` in the address containers now also accepts complete country codes (e.g. `CH-ZH`) beside the already accepted subdivision codes

## <a name="v1.34.0.0.20230516"></a> Version 1.34 (released 2023-05-16)

-   available on Sandbox: 2023-05-03
-   introduced version 1.34
-   added value `1.34` for _SpecVersion_
-   added parameter `DeviceFingerprintTransactionId` to container _RiskFactors_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize), [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) and [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) requests
-   removed `MASTERPASS` as valid value from field `Wallets` in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) requests
-   removed `UNIONPAY` as valid value from field `PaymentMethods` in [SecureCardData/AliasInsert](index.html#Payment_v1_Alias_Insert) requests
-   added additional info about expected values to field `LanguageCode` of the _Payer_ container and [SecureCardData/AliasInsert](index.html#Payment_v1_Alias_Insert) requests
-   updated link to [license information](https://docs.saferpay.com/home/master/licensing)

## <a name="v1.33.0.0.20230321"></a> Version 1.33 (released 2023-03-21)

-   available on Sandbox: 2023-03-07
-   introduced version 1.33
-   added value `1.33` for _SpecVersion_
-   added `NotifyUrl` to the [SecureCardData/AliasInsert](index.html#Payment_v1_Alias_Insert) request
-   added the value `FraudPrevention` to the [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire) response
-   added `ACCOUNTTOACCOUNT` as a possible payment method in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) and [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert)
-   a new method was added which allows the merchant to fetch data about a previously created SingeUsePaymentLink: `/rest/customers/{customerId}/terminals/{terminalId}/spg-offers/{offerId}`
-   the error behavior `ABORT` was renamed to `DO_NOT_RETRY`
-   the new error message `UPDATE_CARD_INFORMATION` was added
-   `DeviceFingerprint` was removed from all versions
-   the `Twint` object was removed from the response of:
    -   [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert)
    -   [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize)
    -   [Transaction/QueryPaymentMeans](index.html#Payment_v1_Transaction_QueryPaymentMeans)
    -   [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect)
    -   [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced)
    -   [Transaction/Refund](index.html#Payment_v1_Transaction_Refund)
    -   [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect)
    -   [Transaction/AssertRedirectPayment](index.html#Payment_v1_Transaction_AssertRedirectPayment)
    -   [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire)
    -   [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment)
    -   [OmniChannel/AcquireTransaction](index.html#Payment_v1_OmniChannel_AcquireTransaction)

## <a name="v1.32.0.0.20230117"></a> Version 1.32 (released 2023-01-17)

-   available on Sandbox: 2022-12-29
-   introduced version 1.32
-   added value `1.32` for _SpecVersion_
-   this method is now obsolete: `/api/rest/customers/{customerid}/terminals/{terminalid}/payment-methods` and replaced with this method: `/api/rest/customers/{customerid}/terminals/{terminalid}`
-   in addition, there is a new method that allows the merchant to query which terminals he has: `/api/rest/customers/{customerid}/terminals`
-   added values `PAYCONIQ` for _Brand.PaymentMethod_ and _PaymentMethods_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)
-   container _ReturnUrls_ (parameters _Success_ and _Fail_) is replaced by container _ReturnUrl_ (parameter _Url_)

## <a name="v1.31.0.0.20221115"></a> Version 1.31 (released 2022-11-15)

-   available on Sandbox: 2022-11-01
-   introduced version 1.31
-   added value `1.31` for _SpecVersion_
-   added new function to [Saferpay Management API](index.html#ChapterManagementApi) for querying the license configuration of a customer

## <a name="v1.30.0.0.20220920"></a> Version 1.30 (released 2022-09-20)

-   available on Sandbox: 2022-09-06
-   introduced version 1.30
-   added value `1.30` for _SpecVersion_
-   added _ProductUrl_ and _ImageUrl_ to `Order Items` container in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)
-   added _OrderId_ in the response to [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert) and [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize)

## <a name="v1.29.0.0.20220719"></a> Version 1.29 (released 2022-07-19)

-   available on Sandbox: 2022-07-19
-   introduced version 1.29
-   added value `1.29` for _SpecVersion_
-   in addition to [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), partial approval is now supported by [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize). Using this option in [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) prevents DCC.

## <a name="v1.28.0.0.20220517"></a> Version 1.28 (released 2022-05-17)

-   available on Sandbox: 2022-05-04
-   introduced version 1.28
-   added value `1.28` for _SpecVersion_
-   added parameter _VatNumber_ to `BillingAddress` container in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize), [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment), [Secure PayGate API SecurePayGateOffer CreateOffer](index.html#rest_customers_terminals_spg-offers) requests and [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/QueryPaymentMeans](index.html#Payment_v1_Transaction_QueryPaymentMeans), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire) and [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) responses

## <a name="v1.27.0.0.20220315"></a> Version 1.27 (released 2022-03-15)

-   available on Sandbox: 2022-03-01
-   introduced version 1.27
-   added value `1.27` for _SpecVersion_
-   container _Liability_ replaces _ThreeDs_ in [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) responses
-   added parameters _Markup_ and _ExchangeRate_ to container _Dcc_ in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) and [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire) responses
-   added parameter _Email_ to container _PayPal_ in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert) and [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire) responses
-   added parameter _DeviceFingerprint_ to container _RiskFactors_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize), [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) and [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) requests
-   added containers _ApplePay_ and _GooglePay_ to [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) requests
-   added container _ApplePay_ to [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) requests
-   added values `GOOGLEPAY` and `APPLEPAY` to `Wallet` in [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) responses
-   added value `APPLEPAY` to `Wallet` in [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize) responses

## <a name="v1.26.0.0.20220118"></a> Version 1.26 (released 2022-01-18)

-   available on Sandbox: 2021-12-30
-   introduced version 1.26
-   added value `1.26` for _SpecVersion_
-   added container _GooglePay_ to [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) requests
-   added parameter _AddressSource_ to container _BillingAddressForm_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) and [Secure PayGate API SecurePayGateOffer CreateOffer](index.html#rest_customers_[customerId]_terminals_[terminalId]_spg-offers)
-   added parameter _AddressSource_ to container _DeliveryAddressForm_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)
-   removed parameter _Display_ from containers _BillingAddressForm_ and _DeliveryAddressForm_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) and [Secure PayGate API SecurePayGateOffer CreateOffer](index.html#rest_customers_[customerId]_terminals_[terminalId]_spg-offers) as it is replaced by _AddressSource_

## <a name="v1.25.0.0.20211116"></a> Version 1.25 (released 2021-11-16)

-   available on Sandbox: 2021-11-02
-   introduced version 1.25
-   added value `1.25` for _SpecVersion_
-   added value `GOOGLEPAY` for _Wallets_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request to enable the preselection of Google Pay
-   added container _PayPal_ to [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert) response
-   added parameter _RestrictRefundAmountToCapturedAmount_ to container _Refund_ in [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) request
-   added parameter _LogoUrl_ to containers _PaymentMethods_ and _Wallets_ in Management API [TerminalInfo PaymentMethods](index.html#rest_customers_terminals_payment-methods) response

## <a name="v1.24.0.0.20210914"></a> Version 1.24 (released 2021-09-14)

-   available on Sandbox: 2021-08-31
-   introduced version 1.24
-   added value `1.24` for _SpecVersion_
-   replaced parameter `NotifyUrl` in the _Notification_ container with the two separate parameters `SuccessNotifyUrl` and `FailNotifyUrl` in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) and [Transaction/RedirectPayment](index.html#Payment_v1_Transaction_RedirectPayment) requests
-   added container _Klarna_ to [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request
-   added container _OriginalCreditTransfer_ to [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) request
-   added container _ApplePay_ to [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) and [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) requests

## <a name="v1.23.0.0.20210713"></a> Version 1.23 (released 2021-07-13)

-   available on Sandbox: 2021-07-13
-   introduced version 1.23
-   added value `1.23` for _SpecVersion_
-   added container _RedirectNotifyUrls_ to [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) request
-   added container _SchemeToken_ to [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) and [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) requests
-   added container _IssuerReference_ to [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) request
-   removed parameter _VerificationValue_ from [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire), [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment), [Alias/AssertInsert](index.html#Payment_v1_Alias_AssertInsert), [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) and [OmniChannel/InsertAlias](index.html#Payment_v1_OmniChannel_InsertAlias) responses

## <a name="v1.22.0.0.20210518"></a> Version 1.22 (released 2021-05-18)

-   available on Sandbox: 2021-05-04
-   introduced version 1.22
-   added value `1.22` for _SpecVersion_
-   changed values of parameter _LiableEntity_ to ALL_CAPS instead of PascalCase in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire) and [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) responses
-   added parameter _InPsd2Scope_ to container _Liability_ in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire) and [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) responses
-   added parameters _Version_ and _AuthenticationType_ to container _ThreeDs_ in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire) and [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) responses

## <a name="v1.21.0.0.20210323"></a> Version 1.21 (released 2021-03-23)

-   available on Sandbox: 2021-03-09
-   introduced version 1.21
-   added value `1.21` for _SpecVersion_
-   added new function to [Saferpay Management API](index.html#ChapterManagementApi) for automated creation of Saferpay Fields Access Tokens
-   added parameter _Initiator_ to [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) request
-   added container _IssuerReference_ to [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) request and [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/Refund](index.html#Payment_v1_Transaction_Refund), [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect), [Transaction/AssertRedirectPayment](index.html#Payment_v1_Transaction_AssertRedirectPayment), [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire), [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) and [OmniChannel/AcquireTransaction](index.html#Payment_v1_OmniChannel_AcquireTransaction) responses
-   added container _Risk_ to the [Error Message](index.html#errorhandling)
-   added parameter _PayerMessage_ to the [Error Message](index.html#errorhandling)

## <a name="v1.20.0.0.20201110"></a> Version 1.20 (released 2020-11-10)

-   available on Sandbox: 2020-10-27
-   introduced version 1.20
-   added value `1.20` for _SpecVersion_
-   added containers _Order_ and _RiskFactors_ to [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) and [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) requests
-   added _AllowPartialAuthorization_ flag in _Options_ container under _Payments_ in [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect)
-   added container _FraudPrevention_ to [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) and [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) responses

## <a name="v1.19.0.0.20200915"></a> Version 1.19 (released 2020-09-15)

-   available on Sandbox: 2020-09-01
-   introduced version 1.19
-   added value `1.19` for _SpecVersion_
-   added container _PayerProfile_ to container _RiskFactors_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) requests
-   added containers _Order_ and _RiskFactors_ to [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) request
-   added container _FraudPrevention_ in [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert) and [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) responses
-   removed parameters _AccountCreationDate_ and _PasswordLastChangeDate_ from container _RiskFactors_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) requests (moved to container _PayerProfile_)
-   added parameter _Description_ to container _Payment_ in [Saferpay Secure PayGate API CreateOffer](index.html#rest_customers_[customerId]_terminals_[terminalId]_spg-offers) request

## <a name="v1.18.0.0.20200714"></a> Version 1.18 (released 2020-07-14)

-   available on Sandbox: 2020-07-01
-   introduced version 1.18
-   added value `1.18` for _SpecVersion_
-   added parameter _Id_ to container _Payer_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize), [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/RedirectPayment](index.html#Payment_v1_Transaction_RedirectPayment), [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) requests and [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/QueryPaymentMeans](index.html#Payment_v1_Transaction_QueryPaymentMeans), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/AssertRedirectPayment](index.html#Payment_v1_Transaction_AssertRedirectPayment), [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire), [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) responses
-   added container _Order_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) requests
-   added container _RiskFactors_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) requests
-   added container _RegisterAlias_ in [Secure PayGate API SecurePayGateOffer CreateOffer](index.html#rest_customers_[customerId]_terminals_[terminalId]_spg-offers)

## <a name="v1.17.0.0.20200512"></a> Version 1.17 (released 2020-05-12)

-   available on Sandbox: 2020-04-28
-   introduced version 1.17
-   added value `1.17` for _SpecVersion_
-   added parameter _VerificationCode_ to container _CardForm_ in [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) request
-   added container _SaferpayFields_ in [Alias/Insert](index.html#Payment_v1_Alias_Insert) and [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) requests
-   removed parameter _RedirectUrl_ in [Alias/Insert](index.html#Payment_v1_Alias_Insert) response
-   added parameter _RedirectRequired_ in [Alias/Insert](index.html#Payment_v1_Alias_Insert) response
-   added container _Redirect_ in [Alias/Insert](index.html#Payment_v1_Alias_Insert) response
-   marked parameter _CssUrl_ as **_deprecated_** in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)

## <a name="v1.16.0.0.20200317"></a> Version 1.16 (released 2020-03-17)

-   available on Sandbox: 2020-03-03
-   introduced version 1.16
-   added value `1.16` for _SpecVersion_
-   added value `ONLINE_STRONG` for _Check.Type_ in [Alias/Insert](index.html#Payment_v1_Alias_Insert) request
-   added value `OK_AUTHENTICATED` for _CheckResult.Result_ in [Alias/AssertInsert](index.html#Payment_v1_Alias_AssertInsert) response
-   added container _Authentication_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize), [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced) requests
-   added container _Authentication_ to container _CheckResult_ in [Alias/AssertInsert](index.html#Payment_v1_Alias_AssertInsert), [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) and [OmniChannel/InsertAlias](index.html#Payment_v1_OmniChannel_InsertAlias) responses
-   added container _AuthenticationResult_ in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize) and [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) responses
-   added container _MastercardIssuerInstallments_ in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize) and [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) responses
-   added container _MastercardIssuerInstallments_ in [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) request

## <a name="v1.15.0.0.20200121"></a> Version 1.15 (released 2020-01-21)

-   available on Sandbox: 2020-01-07
-   introduced version 1.15
-   added value `1.15` for _SpecVersion_
-   added container _Ideal_ to [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request to enable the preselection of an iDEAL issuer
-   added value `APPLEPAY` for _Wallets_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request to enable the preselection of Apple Pay

## <a name="v1.14.0.0.20191119"></a> Version 1.14 (released 2019-11-19)

-   available on Sandbox: 2019-11-05
-   introduced version 1.14
-   added value `1.14` for _SpecVersion_
-   added new [Saferpay Secure PayGate API](index.html#ChapterManagementApi) for automated creation of Saferpay Secure PayGate offers
-   added container _SaferpayFields_ to container _PaymentMeans_ in [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect) and [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) requests

## <a name="v1.13.0.0.20190917"></a> Version 1.13 (released 2019-09-17)

-   available on Sandbox: 2019-09-10
-   introduced version 1.13
-   added value `1.13` for _SpecVersion_
-   added container _PaymentMethodsOptions_ to [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) to allow the setting of payment method specific options. Currently used for Bancontact specific settings
-   added new country code value _XK_ (Kosovo) to field CountryCode
-   added new value _DIVERSE_ in field Gender
-   added new error code _PAYMENTMEANS_NOT_SUPPORTED_ with corresponding error message "Unsupported means of payment (e.g. non SEPA IBAN)"

## <a name="v1.12.0.0.20190716"></a> Version 1.12 (released 2019-07-16)

-   available on Sandbox: 2019-07-02
-   introduced version 1.12
-   added value `1.12` for _SpecVersion_
-   added method [Alias/Update](index.html#Payment_v1_Alias_Update) for updating the details of an alias
-   added methods [Transaction/AlternativePayment](index.html#Payment_v1_Transaction_AlternativePayment) and [Transaction/QueryAlternativePayment](index.html#Payment_v1_Transaction_QueryAlternativePayment) which enable the implementation of customized checkout processes (i.e. in mobile shopping apps) - at the moment only available for Bancontact
-   replaced _MerchantEmail_ with _MerchantEmails_ that can be filled with up to 10 email addresses to which the payment notification is sent

## <a name="v1.11.0.0.20190521"></a> Version 1.11 (released 2019-05-21)

-   available on Sandbox: 2019-05-07
-   introduced version 1.11
-   added value `1.11` for _SpecVersion_
-   added method [Transaction/Inquire](index.html#Payment_v1_Transaction_Inquire) for inquiring the details of previous transaction
-   added container _PaymentMethodsOptions_ to [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) to allow for setting payment method specific options
-   added _Condition_ to [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request to control the minimum authentication level
-   added _HolderSegment_ to [Alias/AssertInsert](index.html#Payment_v1_Alias_AssertInsert) and [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) responses to indicate the segment (e.g. Corporate) of the card holder
-   added _CaptureId_ to [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/Refund](index.html#Payment_v1_Transaction_Refund), [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) and [OmniChannel/AcquireTransaction](index.html#Payment_v1_OmniChannel_AcquireTransaction) responses to identify a (partial) capture for refunding
-   added value `IF_ALLOWED_BY_SCHEME` for field `Condition` in [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize) request
-   added value `ALIPAY` for _Brand.PaymentMethod_, _PaymentMethods_ and _Wallet.PaymentMethods_
-   removed `VerificationValue` from `ThreeDs` container

## <a name="v1.10.0.0.20181113"></a> Version 1.10 (released 2018-11-13)

-   available on Sandbox: 2018-08-14
-   introduced version 1.10
-   added value `1.10` for _SpecVersion_
-   added method [Transaction/MultipartCapture](index.html#Payment_v1_Transaction_MultipartCapture) for capturing multiple parts of a transaction also supporting enhanced clearing for marketplaces
-   added method [Transaction/MultipartFinalize](index.html#Payment_v1_Transaction_MultipartFinalize) to finalize a transaction that is still open for capturing additional parts
-   added container _MarketPlace_ to [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) request to support enhanced clearing for marketplaces
-   removed container _Partial_ from [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) request - see method [Transaction/MultipartCapture](index.html#Payment_v1_Transaction_MultipartCapture) for details
-   replaced _TransactionId_ and _OrderId_ with _CaptureId_ in [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) response to uniquely identify captures
-   replaced container _TransactionReference_ with _CaptureReference_ in [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) and [Transaction/AssertCapture](index.html#Payment_v1_Transaction_AssertCapture) request to uniquely identify captures
-   added value `TWINT` for field `Type` in [Alias/Insert](index.html#Payment_v1_Alias_Insert) requests (only available in the Sandbox environment until further notice)
-   added subcontainer `Twint` to container `PaymentMeans`

## <a name="v1.9.0.20180515"></a> Version 1.9 (released 2018-05-15)

-   available on Sandbox: 2018-04-26
-   introduced version 1.9
-   added value `1.9` for _SpecVersion_
-   replaced container _ThreeDs_ from previous versions with _Liability_ in [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) responses

## <a name="v1.8.0.20171114"></a> Version 1.8 (released 2017-11-14)

-   available on Sandbox: 2017-11-02
-   introduced version 1.8
-   added value `1.8` for _SpecVersion_
-   added _SixTransactionReference_ to [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) and [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) responses for Omni Channel use cases
-   added method [OmniChannel/AcquireTransaction](index.html#Payment_v1_OmniChannel_AcquireTransaction) for retrieving a previously authorized transaction from another channel
-   added method [OmniChannel/InsertAlias](index.html#Payment_v1_OmniChannel_InsertAlias) for retrieving an alias for a card used in a previously authorized transaction from another channel
-   added container _CardForm_ for [Alias/Insert](index.html#Payment_v1_Alias_Insert) and [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) requests for adjusting the card form's mandatory fields

## <a name="v1.7.0.20170822"></a> Version 1.7 (released 2017-08-22)

-   available on Sandbox: 2017-08-03
-   introduced version 1.7
-   added value `1.7` for _SpecVersion_
-   added value `TWINT` for _Brand.PaymentMethod_
-   added _ApprovalCode_ to [PaymentPage/Assert](index.html#Payment_v1_PaymentPage_Assert), [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect), [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced), [Transaction/RefundDirect](index.html#Payment_v1_Transaction_RefundDirect) and [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) responses
-   added _PaymentMethods_ to [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize) and [Alias/Insert](index.html#Payment_v1_Alias_Insert) requests
-   increased number of concurrent Basic Authentication credentials to 10
-   improved description for pending statuses

## <a name="v1.6.0.20170404"></a> Version 1.6 (released 2017-04-04)

-   available on Sandbox: 2017-03-14
-   introduced version 1.6
-   added value `1.6` for _SpecVersion_
-   added container _Check_ for [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) request
-   added container _CheckResult_ for [Alias/AssertInsert](index.html#Payment_v1_Alias_AssertInsert) and [Alias/InsertDirect](index.html#Payment_v1_Alias_InsertDirect) responses

## <a name="v1.5.0.20170207"></a> Version 1.5 (released 2017-02-07)

-   introduced version 1.5
-   added value `1.5` for _SpecVersion_
-   added method [Transaction/AssertCapture](index.html#Payment_v1_Transaction_AssertCapture) for checking the status of a pending capture (currently needed for paydirekt)
-   added method [Transaction/AssertRefund](index.html#Payment_v1_Transaction_AssertRefund) for checking the status of a pending refund (currently needed for paydirekt)
-   added container _PendingNotification_ for [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) requests for notification settings on pending captures (currently needed for paydirekt)
-   added container _PendingNotification_ for [Transaction/Refund](index.html#Payment_v1_Transaction_Refund) requests for notification settings on pending captures (currently needed for paydirekt)
-   added _Status_ in [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) responses to indicate the status of a capture
-   changed _Date_ in [Transaction/Capture](index.html#Payment_v1_Transaction_Capture) responses to optional, e.g. for pending captures
-   changed [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize) request to allow _BillingAddressForm.Display_ and _DeliveryAddressForm.Display_ both set to `true` at the same time
-   added _ContentSecurityEnabled_ to _Styling_ container to control Content Security Policy
-   corrected type documentation for _CountrySubdivisionCode_ to "_AlphaNumeric_" in the address containers

## <a name="v1.4.0.20161015"></a> Version 1.4 (released 2016-10-15)

-   new version 1.4
    -   added value `1.4` for _SpecVersion_
    -   added option _SuppressDcc_ for [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced)
    -   added values `BANCONTACT` and `PAYDIREKT` for _Brand.PaymentMethod_ and _PaymentMethods_ in [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)
    -   added validation for element _Payment.MandateId_
    -   added option _ConfigSet_ for [PaymentPage/Initialize](index.html#Payment_v1_PaymentPage_Initialize)
-   added a note that partial captures are currently only supported for PayPal
-   added a note that values for AliasID are case-insensitive
-   corrected example for [Transaction/AuthorizeDirect](index.html#Payment_v1_Transaction_AuthorizeDirect)
-   corrected example for [Transaction/AuthorizeReferenced](index.html#Payment_v1_Transaction_AuthorizeReferenced)
-   corrected example for [Transaction/Authorize](index.html#Payment_v1_Transaction_Authorize)
-   corrected example for [Transaction/Initialize](index.html#Payment_v1_Transaction_Initialize)
-   improved description for _TransactionReference_
-   corrected example for _BillpayCapture.DelayInDays_
-   improved description for _ReturnUrls_
