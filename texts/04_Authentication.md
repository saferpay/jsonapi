# <a name="authentication"></a>Authentication

Saferpay supports the mechanism of basic authentication or a client certificate for authentication of a
server (host) system.

<div class="danger">
  <p>
    <strong>Important:</strong> You must use either the Basic Authentication, <strong>OR</strong> the Client Certificate, but not both! Also make sure, that you do not send any faulty or old certificates, or authentication/accept headers. Otherwise our corporate Firewall will reject the call with a 403-Forbidden status! Furthermore, please note, that some environments do this by default. So even if you didn't implement it, the environment may do it as a default! It may be necessary to check your configuration.
  </p>
</div>

## <a name="authentication_basic"></a>HTTP basic authentication

This is the default authentication method. Technical users for the JSON API can be
created by the merchant in the Saferpay Backoffice -Be it [Test](https://test.saferpay.com/BO/Login) or [Live](https://www.saferpay.com/BO/Login)- under **Settings > JSON API basic authentication**. The password will not be stored
at SIX (only a securely salted hash thereof). There will be no password recovery
besides creating a new user / password pair from your Backoffice account.

The password must meet some complexity requirements. We suggest using / generating
dedicated passwords with a length of 16 alphanumeric characters (up to 32 characters).

<img src="https://raw.githubusercontent.com/saferpay/jsonapi/master/Images/BasicAuthScreen.PNG" alt="Basic Authentication">

--->>>

HTTP Header:

`Authorization: Basic [your base64 encoded "user_name:password"]`

<<<---

## <a name="authentication_cert"></a> HTTPS Client Certificate Authentication

Alternatively, Saferpay also supports authentication via a client certificate.

<div class="info">
  <p>
    <strong>Important:</strong> This feature is only available for Saferpay Business merchants!
  </p>
</div>

A client certificate for the JSON-API can be ordered in the Saferpay Backoffice -Be it [Test](https://test.saferpay.com/BO/Login) or [Live](https://www.saferpay.com/BO/Login)- under **Settings > JSON API client certificate**.

<img src="https://raw.githubusercontent.com/saferpay/jsonapi/master/Images/BO_Client_certificate_1.png" alt="Basic Aiuthentication">

Generate the CSR as described on the page and import it using the upload button.
The signed client certificate will then be downloaded through your browser. 
