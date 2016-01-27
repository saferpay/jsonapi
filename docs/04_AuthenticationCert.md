Authentication by client certificate must be enabled by SIX before being available. If you intend on using this kind of authentication, please make sure you have sufficient knowledge to manage client certificates.

The following points are important to consider:

* Client certificates have a limited validity (2 years) and must be renewed before this validity expires. Saferpay will not accept any requests which are being sent with an expired client certificate.
* Client certificates should be kept in a safe place, just like basic authentication credentials.

These steps must be followed in order to create a client certificate for accessing the Saferpay api:

1. Create a PKCS#10 certificate request with your company's name as organization, `Saferpay Api` as organizational unit, you customer id as common name, and use RSA key length of 2048 bits
2. Submit the certificate signing request to Saferpay by uploading in the Saferpay Backoffice.
3. Download the signed certificate from the Saferpay Backoffice.
4. Depending on the technology you’re using, load the certificate including the private key into the corresponding certificate store for use by your application.
5. Have your application send the client certificate with every call to the Saferpay Api (only server-to-server calls). The Saferpay Api will not specifically require a client certificate to be present, so you need to force it being sent with the initial request.