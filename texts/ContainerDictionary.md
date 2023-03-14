<div class="visible-print-block" id="type-dict">
	<h4>Container Dictionary</h4>
			<h2>Container "Common_Models_Data_Address"</h2>
				<table class="table" id="Common_Models_Data_Address">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>FirstName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's first name</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>John</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LastName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's last name</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Doe</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Company</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's company</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>ACME Corp.</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Gender</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's gender</div>
	<i class="small text-muted">
Possible values: MALE, FEMALE, DIVERSE, COMPANY.<br />
				    <span>Example: <code>COMPANY</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Street</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's street</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Bakerstreet 32</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Zip</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's zip code</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>8000</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>City</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's city</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Zurich</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CountryCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's country code<br> ISO 3166-1 alpha-2 country code<br> (Non-standard: XK for Kosovo)</div>
	<i class="small text-muted">
Alphabetic[2..2]<br />
				    <span>Example: <code>CH</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Email</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's email address</div>
	<i class="small text-muted">
				    <span>Example: <code>payer@provider.com</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DateOfBirth</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's date of birth in ISO 8601 extended date notation<br> YYYY-MM-DD</div>
	<i class="small text-muted">
AlphaNumeric[10..10]<br />
				    <span>Example: <code>1990-05-31</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LegalForm</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's legal form</div>
	<i class="small text-muted">
Possible values: AG, GmbH, Misc.<br />
				    <span>Example: <code>AG</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Street2</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's street, second line. Only use this, if you need two lines. It may not be supported by all acquirers.</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Stewart House</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CountrySubdivisionCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's country subdivision code<br> ISO 3166-2 country subdivision code</div>
	<i class="small text-muted">
AlphaNumeric[1..3]<br />
				    <span>Example: <code>ZH</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Phone</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's phone number</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>+41 12 345 6789</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_Models_Data_AmountWithoutZero"</h2>
				<table class="table" id="Common_Models_Data_AmountWithoutZero">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Value</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount in minor unit (CHF 1.00 &rArr; Value=100). <b>Only Integer values will be accepted!</b></div>
	<i class="small text-muted">
				    <span>Example: <code>100</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CurrencyCode</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">ISO 4217 3-letter currency code (CHF, USD, EUR, ...)</div>
	<i class="small text-muted">
				    <span>Example: <code>CHF</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_Models_Data_AmountWithZero"</h2>
				<table class="table" id="Common_Models_Data_AmountWithZero">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Value</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount in minor unit (CHF 1.00 &rArr; Value=100). <b>Only Integer values will be accepted!</b></div>
	<i class="small text-muted">
				    <span>Example: <code>100</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CurrencyCode</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">ISO 4217 3-letter currency code (CHF, USD, EUR, ...)</div>
	<i class="small text-muted">
				    <span>Example: <code>CHF</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_Models_Data_BillingAddress"</h2>
				<table class="table" id="Common_Models_Data_BillingAddress">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>FirstName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's first name</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>John</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LastName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's last name</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Doe</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Company</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's company</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>ACME Corp.</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Gender</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's gender</div>
	<i class="small text-muted">
Possible values: MALE, FEMALE, DIVERSE, COMPANY.<br />
				    <span>Example: <code>COMPANY</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Street</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's street</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Bakerstreet 32</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Zip</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's zip code</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>8000</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>City</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's city</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Zurich</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CountryCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's country code<br> ISO 3166-1 alpha-2 country code<br> (Non-standard: XK for Kosovo)</div>
	<i class="small text-muted">
Alphabetic[2..2]<br />
				    <span>Example: <code>CH</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Email</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's email address</div>
	<i class="small text-muted">
				    <span>Example: <code>payer@provider.com</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DateOfBirth</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's date of birth in ISO 8601 extended date notation<br> YYYY-MM-DD</div>
	<i class="small text-muted">
AlphaNumeric[10..10]<br />
				    <span>Example: <code>1990-05-31</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LegalForm</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's legal form</div>
	<i class="small text-muted">
Possible values: AG, GmbH, Misc.<br />
				    <span>Example: <code>AG</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Street2</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's street, second line. Only use this, if you need two lines. It may not be supported by all acquirers.</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Stewart House</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CountrySubdivisionCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's country subdivision code<br> ISO 3166-2 country subdivision code</div>
	<i class="small text-muted">
AlphaNumeric[1..3]<br />
				    <span>Example: <code>ZH</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Phone</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's phone number</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>+41 12 345 6789</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>VatNumber</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The company's vat number</div>
	<i class="small text-muted">
Utf8[1..25]<br />
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_Models_Data_BillingAddressForm"</h2>
				<table class="table" id="Common_Models_Data_BillingAddressForm">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AddressSource</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Specifies if and where Saferpay should take the payer's address data from.<br> SAFERPAY will result in an address form being shown to the payer in the Saferpay Payment Page.<br> PREFER_PAYMENTMETHOD will retrieve the address data from the means of payment if supported. PREFER_PAYMENTMETHOD will fall back to SAFERPAY if not available with the chosen payment method.<br> For NONE no address form will be displayed and no address data will be retrieved from the means of payment.</div>
	<i class="small text-muted">
Possible values: NONE, SAFERPAY, PREFER_PAYMENTMETHOD.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MandatoryFields</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">List of fields which the payer must enter to proceed with the payment.<br> This is only applicable if Saferpay displays the address form.<br> If no mandatory fields are sent, all fields except SALUTATION, COMPANY and PHONE are mandatory.</div>
	<i class="small text-muted">
Possible values: CITY, COMPANY, VATNUMBER, COUNTRY, EMAIL, FIRSTNAME, LASTNAME, PHONE, SALUTATION, STATE, STREET, ZIP.<br />
				    <span>Example: <code>[&quot;FIRSTNAME&quot;, &quot;LASTNAME&quot;, &quot;PHONE&quot;]</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_Models_Data_DeliveryAddressForm"</h2>
				<table class="table" id="Common_Models_Data_DeliveryAddressForm">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AddressSource</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Specifies if and where Saferpay should take the payer's address data from.<br> SAFERPAY will result in an address form being shown to the payer in the Saferpay Payment Page.<br> PREFER_PAYMENTMETHOD will retrieve the address data from the means of payment if supported. PREFER_PAYMENTMETHOD will fall back to SAFERPAY if not available with the chosen payment method.<br> For NONE no address form will be displayed and no address data will be retrieved from the means of payment.</div>
	<i class="small text-muted">
Possible values: NONE, SAFERPAY, PREFER_PAYMENTMETHOD.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MandatoryFields</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">List of fields which the payer must enter to proceed with the payment.<br> This is only applicable if Saferpay displays the address form.<br> If no mandatory fields are sent, all fields except SALUTATION, COMPANY and PHONE are mandatory.</div>
	<i class="small text-muted">
Possible values: CITY, COMPANY, COUNTRY, EMAIL, FIRSTNAME, LASTNAME, PHONE, SALUTATION, STATE, STREET, ZIP.<br />
				    <span>Example: <code>[&quot;FIRSTNAME&quot;, &quot;LASTNAME&quot;, &quot;PHONE&quot;]</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_Models_Data_Payer"</h2>
				<table class="table" id="Common_Models_Data_Payer">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IpAddress</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">IPv4 address of the card holder / payer if available. Dotted quad notation.</div>
	<i class="small text-muted">
				    <span>Example: <code>111.111.111.111</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LanguageCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Language to force Saferpay to display something to the payer in a certain language. Per default, Saferpay will determine the language, using the payers browser agent.<br> <br> Code-List:<br> bg - Bulgarian<br> cs - Czech<br> da - Danish<br> de - German<br> de-ch - Swiss German<br> el - Greek<br> en - English<br> es - Spanish<br> et - Estonian<br> fi - Finnish<br> fr - French<br> hr - Croatian<br> hu - Hungarian<br> is - Icelandic<br> it - Italian<br> ja - Japanese<br> lt - Lithuanian<br> lv - Latvian<br> nl - Dutch<br> nn - Norwegian<br> pl - Polish<br> pt - Portuguese<br> ro - Romanian<br> ru - Russian<br> sk - Slovak<br> sl - Slovenian<br> sv - Swedish<br> tr - Turkish<br> uk - Ukrainian<br> zh - Chinese</div>
	<i class="small text-muted">
				    <span>Example: <code>de</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BillingAddress</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_BillingAddress">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the payers billing address</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payer identifier defined by the merchant / shop. Use a unique id for your customer (a UUID is highly recommended).<br> For GDPR reasons, we don't recommend using an id which contains personal data (eg. no name).</div>
	<i class="small text-muted">
Id[1..50]<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DeliveryAddress</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Address">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the payers delivery address</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_Models_Data_PaymentOptions"</h2>
				<table class="table" id="Common_Models_Data_PaymentOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PreAuth</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Indicates the desired transaction type. When set to true the transaction is processed as a pre-authorization otherwise as a final authorization. Please note that not all payment methods support both options and the effective transaction type is determined by Saferpay.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AllowPartialAuthorization</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">When set to true, a transaction might be authorized with an amount less than requested authorization amount.<br> <div class="info"> <p><strong>Important:</strong></p> <ul> <li>Not all the payment methods support this option.</li> <li>This option is currently supported only in Transaction/Initialize and Transaction/AuthorizeDirect.</li> <li>Using this option in Transaction/Initialize prevents DCC.</li> </ul> </div></div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_Models_Data_SpgBillingAddressForm"</h2>
				<table class="table" id="Common_Models_Data_SpgBillingAddressForm">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AddressSource</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Specifies if and where Saferpay should take the payer's address data from.<br> SAFERPAY will result in an address form being shown to the payer in the Saferpay Payment Page.<br> PREFER_PAYMENTMETHOD will retrieve the address data from the means of payment if supported. PREFER_PAYMENTMETHOD will fall back to SAFERPAY if not available with the chosen payment method.<br> For NONE no address form will be displayed and no address data will be retrieved from the means of payment.</div>
	<i class="small text-muted">
Possible values: NONE, SAFERPAY, PREFER_PAYMENTMETHOD.<br />
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_Models_Data_SpgPayer"</h2>
				<table class="table" id="Common_Models_Data_SpgPayer">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IpAddress</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">IPv4 address of the card holder / payer if available. Dotted quad notation.</div>
	<i class="small text-muted">
				    <span>Example: <code>111.111.111.111</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LanguageCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Language to force Saferpay to display something to the payer in a certain language. Per default, Saferpay will determine the language, using the payers browser agent.<br> <br> Code-List:<br> bg - Bulgarian<br> cs - Czech<br> da - Danish<br> de - German<br> de-ch - Swiss German<br> el - Greek<br> en - English<br> es - Spanish<br> et - Estonian<br> fi - Finnish<br> fr - French<br> hr - Croatian<br> hu - Hungarian<br> is - Icelandic<br> it - Italian<br> ja - Japanese<br> lt - Lithuanian<br> lv - Latvian<br> nl - Dutch<br> nn - Norwegian<br> pl - Polish<br> pt - Portuguese<br> ro - Romanian<br> ru - Russian<br> sk - Slovak<br> sl - Slovenian<br> sv - Swedish<br> tr - Turkish<br> uk - Ukrainian<br> zh - Chinese</div>
	<i class="small text-muted">
				    <span>Example: <code>de</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BillingAddress</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_BillingAddress">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the payers billing address</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_RequestHeader"</h2>
				<table class="table" id="Common_RequestHeader">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SpecVersion</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Version number of the interface specification. For new implementations, the newest Version should be used.</div>
	<i class="small text-muted">
Possible values: 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22, 1.23, 1.24, 1.25, 1.26, 1.27, 1.28, 1.29, 1.30, 1.31, 1.32, 1.33<br />
				    <span>Example: <code>1.33</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CustomerId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay customer id. Part of the Saferpay AccountID, which has the following format: 123123-12345678. The first Value is your CustomerID.</div>
	<i class="small text-muted">
Numeric[1..8]<br />
				    <span>Example: <code>123123</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>RequestId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id generated by merchant system, for debugging purposes. Should be unique for each new request. If a request is retried due to an error, use the same request id. In this case, the <strong>RetryIndicator</strong> should be increased instead, to indicate a subsequent attempt.</div>
	<i class="small text-muted">
Id[1..50]<br />
				    <span>Example: <code>33e8af17-35c1-4165-a343-c1c86a320f3b</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>RetryIndicator</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">0 if this specific request is attempted for the first time, >=1 if it is a retry.</div>
	<i class="small text-muted">
Range: inclusive between 0 and 9<br />
				    <span>Example: <code>0</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ClientInfo</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_ClientInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the caller (merchant host)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Common_ResponseHeader"</h2>
				<table class="table" id="Common_ResponseHeader">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>RequestId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">RequestId of the original request header</div>
	<i class="small text-muted">
Id[1..50]<br />
				    <span>Example: <code>33e8af17-35c1-4165-a343-c1c86a320f3b</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SpecVersion</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Version number of the interface specification.</div>
	<i class="small text-muted">
Possible values: 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22, 1.23, 1.24, 1.25, 1.26, 1.27, 1.28, 1.29, 1.30, 1.31, 1.32, 1.33<br />
				    <span>Example: <code>1.33</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_AlipayOptions"</h2>
				<table class="table" id="Payment_Models_AlipayOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LocalWallet</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Preselect the Alipay local wallet. May only be used in conjunction with special Alipay integrations.</div>
	<i class="small text-muted">
Iso885915[1..64]<br />
				    <span>Example: <code>&quot;TNG&quot;</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_AlternativePayment_BancontactPaymentMethodOptions"</h2>
				<table class="table" id="Payment_Models_AlternativePayment_BancontactPaymentMethodOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AppDefaultRedirectUrl</strong><br />
	<span class="text-muted small">
				URI
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This URL is called by the bancontact payment app when the payer cancels the payment.<br> The maximum allowed length for this URL is 256 characters.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AppCompletionRedirectUrl</strong><br />
	<span class="text-muted small">
				URI
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This URL is called by the bancontact payment app once the payment is authorized successfully.<br> The maximum allowed length for this URL is 256 characters.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_AlternativePayment_PaymentMethodOptions"</h2>
				<table class="table" id="Payment_Models_AlternativePayment_PaymentMethodOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Bancontact</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_AlternativePayment_BancontactPaymentMethodOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">bancontact-specific options for this payment</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_CaptureReference"</h2>
				<table class="table" id="Payment_Models_CaptureReference">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CaptureId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the referenced capture.</div>
	<i class="small text-muted">
Id[1..64]<br />
				    <span>Example: <code>jCUC8IAQ1OCptA5I8jpzAMxC5nWA_c</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TransactionId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the referenced transaction. This should only be used if you don't have the CaptureId of the referenced Capture (probably, because it was performed with an older SpecVersion)</div>
	<i class="small text-muted">
AlphaNumeric[1..64]<br />
				    <span>Example: <code>723n4MAjMdhjSAhAKEUdA8jtl9jb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unambiguous OrderId of the referenced transaction.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderPartId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">OrderPartId of the referenced capture if a partial capture should be referenced and the CaptureId/TransactionId of the partial capture is not available.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>kh9ngajrfe6wfu3d0c</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Alias"</h2>
				<table class="table" id="Payment_Models_Data_Alias">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id / name of the alias. This value is case-insensitive.</div>
	<i class="small text-muted">
Id[1..40]<br />
				    <span>Example: <code>alias35nfd9mkzfw0x57iwx</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>VerificationCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Verification code (CVV, CVC) if applicable (if the alias referenced is a card).</div>
	<i class="small text-muted">
Numeric[3..4]<br />
				    <span>Example: <code>123</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasAuthenticationResult"</h2>
				<table class="table" id="Payment_Models_Data_AliasAuthenticationResult">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Result</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The result of the card holder authentication.</div>
	<i class="small text-muted">
Possible values: OK, NOT_SUPPORTED.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Message</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">More details, if available. Contents may change at any time, so don’t parse it.</div>
	<i class="small text-muted">
				    <span>Example: <code>Card holder authentication with 3DSv2 successful.</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Xid</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Transaction Id, given by the MPI. References the 3D Secure version 2 process.</div>
	<i class="small text-muted">
				    <span>Example: <code>1ef5b3db-3b97-47df-8272-320d0bd18ab5</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasAuthenticationResultBase"</h2>
				<table class="table" id="Payment_Models_Data_AliasAuthenticationResultBase">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Result</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The result of the card holder authentication.</div>
	<i class="small text-muted">
Possible values: OK, NOT_SUPPORTED.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Message</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">More details, if available. Contents may change at any time, so don’t parse it.</div>
	<i class="small text-muted">
				    <span>Example: <code>Card holder authentication with 3DSv2 successful.</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasDirectInsertCheck"</h2>
				<table class="table" id="Payment_Models_Data_AliasDirectInsertCheck">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of check to perform.</div>
	<i class="small text-muted">
Possible values: ONLINE.<br />
				    <span>Example: <code>ONLINE</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay Terminal-Id to be used for checking.</div>
	<i class="small text-muted">
Numeric[8..8]<br />
				    <span>Example: <code>12341234</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasInfo"</h2>
				<table class="table" id="Payment_Models_Data_AliasInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id / name of the alias</div>
	<i class="small text-muted">
				    <span>Example: <code>alias35nfd9mkzfw0x57iwx</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Lifetime</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Number of days this card is stored within Saferpay. Minimum 1 day, maximum 1600 days.</div>
	<i class="small text-muted">
				    <span>Example: <code>1000</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasInsertCheck"</h2>
				<table class="table" id="Payment_Models_Data_AliasInsertCheck">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of check to perform (subject to availability for the brand/acquirer).<br> ONLINE performs an online account check (one transaction point will be billed for such a check)<br> ONLINE_STRONG performs a strong customer authentication (SCA) which involves a 3DS v2 authentication and an online account check (for which one transaction point will be billed)</div>
	<i class="small text-muted">
Possible values: ONLINE, ONLINE_STRONG.<br />
				    <span>Example: <code>ONLINE</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay Terminal-Id to be used for checking.</div>
	<i class="small text-muted">
Numeric[8..8]<br />
				    <span>Example: <code>12341234</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasInsertCheckResult"</h2>
				<table class="table" id="Payment_Models_Data_AliasInsertCheckResult">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Result</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The result of the card check.</div>
	<i class="small text-muted">
Possible values: OK, OK_AUTHENTICATED, NOT_PERFORMED.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Message</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">More details, if available. Contents may change at any time, so don’t parse it.</div>
	<i class="small text-muted">
				    <span>Example: <code>Online card check was successful.</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Authentication</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_AliasAuthenticationResult">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">More details about the card holder authentication.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IssuerReference</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_IssuerReference">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px"></div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasInsertDirectPaymentMeans"</h2>
				<table class="table" id="Payment_Models_Data_AliasInsertDirectPaymentMeans">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SaferpayFields</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_SaferpayFields">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payment means data collected with SaferpayFields.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Card</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Card">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Card data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Alias</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Alias">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Alias data if payment means was registered with Secure Card Data before.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SchemeToken</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_SchemeToken">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Surrogate values that replace the primary account number (PAN) according to the EMV Payment Tokenization Specification</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BankAccount</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_BankAccount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Bank account data for direct debit transaction</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>GooglePay</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_GooglePay">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payment Data from GooglePay</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ApplePay</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_ApplePay">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payment Data from Apple Pay Wallet</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasNotification"</h2>
				<table class="table" id="Payment_Models_Data_AliasNotification">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>NotifyUrl</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">the url that should be called to notify when the process is done</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AliasPaymentMeansInfo"</h2>
				<table class="table" id="Payment_Models_Data_AliasPaymentMeansInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Brand</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_Brand">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Brand information</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DisplayText</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Means of payment formatted / masked for display purposes</div>
	<i class="small text-muted">
				    <span>Example: <code>DisplayText</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Wallet</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of Wallet, if the transaction was done by a wallet</div>
	<i class="small text-muted">
				    <span>Example: <code>MasterPass</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Card</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_CardInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Card data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BankAccount</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_BankAccountInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Bank account data for direct debit transactions.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Twint</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_TwintInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Twint data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AlternativePaymentNotification"</h2>
				<table class="table" id="Payment_Models_Data_AlternativePaymentNotification">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MerchantEmails</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Email addresses to which a confirmation email will be sent to the merchants after successful authorizations.<br> A maximum of 10 email addresses is allowed.</div>
	<i class="small text-muted">
				    <span>Example: <code>[&quot;merchant1@saferpay.com&quot;, &quot;merchant2@saferpay.com&quot;]</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerEmail</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Email address to which a confirmation email will be sent to the payer after successful authorizations.</div>
	<i class="small text-muted">
				    <span>Example: <code>payer@saferpay.com</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>StateNotificationUrl</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				URI
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Url to which Saferpay will send the asynchronous confirmation for the transaction. Supported schemes are http and https. You also have to make sure to support the GET-method.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/notify</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AlternativePaymentProcessingData"</h2>
				<table class="table" id="Payment_Models_Data_AlternativePaymentProcessingData">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Bancontact</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_BancontactProcessingData">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Bancontact specific data for processing payment</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_ApplePay"</h2>
				<table class="table" id="Payment_Models_Data_ApplePay">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PaymentToken</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Base64 encoded ApplePayPaymentToken Json according to <a href="https://developer.apple.com/library/archive/documentation/PassKit/Reference/PaymentTokenJSON/PaymentTokenJSON.html" target="_blank">Apple's Payment Token Format Reference</a></div>
	<i class="small text-muted">
Base64 encoded string<br />
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_AuthorizeDirectPaymentMeans"</h2>
				<table class="table" id="Payment_Models_Data_AuthorizeDirectPaymentMeans">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SaferpayFields</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_SaferpayFields">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payment means data collected with SaferpayFields.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Card</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Card">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Card data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Alias</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Alias">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Alias data if payment means was registered with Secure Card Data before.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SchemeToken</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_SchemeToken">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Surrogate values that replace the primary account number (PAN) according to the EMV Payment Tokenization Specification</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BankAccount</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_BankAccount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Bank account data for direct debit transaction</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>GooglePay</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_GooglePay">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payment Data from GooglePay</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ApplePay</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_ApplePay">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payment Data from Apple Pay Wallet</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_BancontactProcessingData"</h2>
				<table class="table" id="Payment_Models_Data_BancontactProcessingData">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>QrCodeData</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Data which should be integrated into a QR code. In order to make the scanning as easy as possible,<br> the recommended format of QR code encoding is version 3, with lower error rate correction level<br> in character mode, resulting with a 29 x 29 pixels image maximum.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IntentUrl</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Url to be used for payment on the same device (web-to-app or app-to-app switch)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_BankAccount"</h2>
				<table class="table" id="Payment_Models_Data_BankAccount">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IBAN</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">International Bank Account Number in electronical format (without spaces).</div>
	<i class="small text-muted">
AlphaNumeric[1..50]<br />
				    <span>Example: <code>DE12500105170648489890</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HolderName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the account holder.</div>
	<i class="small text-muted">
Iso885915[1..50]<br />
				    <span>Example: <code>John Doe</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BIC</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Bank Identifier Code without spaces.</div>
	<i class="small text-muted">
AlphaNumeric[8..11]<br />
				    <span>Example: <code>INGDDEFFXXX</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BankName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the Bank.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_BankAccountInfo"</h2>
				<table class="table" id="Payment_Models_Data_BankAccountInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IBAN</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">International Bank Account Number in electronical format (without spaces).</div>
	<i class="small text-muted">
AlphaNumeric[1..50]<br />
				    <span>Example: <code>DE12500105170648489890</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HolderName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the account holder.</div>
	<i class="small text-muted">
Iso885915[1..50]<br />
				    <span>Example: <code>John Doe</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BIC</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Bank Identifier Code without spaces.</div>
	<i class="small text-muted">
AlphaNumeric[8..11]<br />
				    <span>Example: <code>INGDDEFFXXX</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BankName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the Bank.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CountryCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">ISO 2-letter country code of the IBAN origin (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>CH</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_BasicPayment"</h2>
				<table class="table" id="Payment_Models_Data_BasicPayment">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount data (currency, value, etc.)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
					<span>
				<span class="text-recommended">recommended</span>,
			</span>
		string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unambiguous order identifier defined by the merchant / shop. This identifier might be used as reference later on.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerNote</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Text which will be printed on payer's debit note. Supported by SIX Acquiring. No guarantee that it will show up on the payer's debit note, because his bank has to support it too.<br> Please note that maximum allowed characters are rarely supported. It's usually around 10-12.</div>
	<i class="small text-muted">
Utf8[1..50]<br />
				    <span>Example: <code>Payernote</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">A human readable description provided by the merchant that can be displayed in web sites.</div>
	<i class="small text-muted">
Utf8[1..1000]<br />
				    <span>Example: <code>Description</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_BillpayCapture"</h2>
				<table class="table" id="Payment_Models_Data_BillpayCapture">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DelayInDays</strong><br />
	<span class="text-muted small">
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Number of days to delay the due date of the invoice / direct debit (see billpay for specifics)</div>
	<i class="small text-muted">
				    <span>Example: <code>10</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Brand"</h2>
				<table class="table" id="Payment_Models_Data_Brand">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PaymentMethod</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">alphanumeric id of the payment method / brand</div>
	<i class="small text-muted">
Possible values: ACCOUNTTOACCOUNT, ALIPAY, AMEX, BANCONTACT, BONUS, DINERS, DIRECTDEBIT, EPRZELEWY, EPS, GIROPAY, IDEAL, INVOICE, JCB, KLARNA, MAESTRO, MASTERCARD, MYONE, PAYCONIQ, PAYDIREKT, PAYPAL, POSTCARD, POSTFINANCE, SOFORT, TWINT, UNIONPAY, VISA, WLCRYPTOPAYMENTS.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Name</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the Brand (Visa, Mastercard, an so on – might change over time, only use for display, never for parsing). Only use it for display, never for parsing and/or mapping! Use PaymentMethod instead.</div>
	<i class="small text-muted">
				    <span>Example: <code>SaferpayTestCard</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Card"</h2>
				<table class="table" id="Payment_Models_Data_Card">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Number</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Card number without separators</div>
	<i class="small text-muted">
				    <span>Example: <code>1234123412341234</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExpYear</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Year of expiration</div>
	<i class="small text-muted">
Range: inclusive between 2000 and 9999<br />
				    <span>Example: <code>2015</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExpMonth</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Month of expiration (eg 9 for September)</div>
	<i class="small text-muted">
Range: inclusive between 1 and 12<br />
				    <span>Example: <code>9</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HolderName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the card holder</div>
	<i class="small text-muted">
Utf8[1..50]<br />
				    <span>Example: <code>John Doe</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>VerificationCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Verification code (CVV, CVC) if applicable</div>
	<i class="small text-muted">
Numeric[3..4]<br />
				    <span>Example: <code>123</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_CardForm"</h2>
				<table class="table" id="Payment_Models_Data_CardForm">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HolderName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This parameter lets you customize the holder name field on the card entry form. Per default, a mandatory holder name field is shown.</div>
	<i class="small text-muted">
Possible values: NONE, MANDATORY.<br />
				    <span>Example: <code>MANDATORY</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_CardFormInTransactionInitialize"</h2>
				<table class="table" id="Payment_Models_Data_CardFormInTransactionInitialize">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HolderName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This parameter lets you customize the holder name field on the card entry form. Per default, a mandatory holder name field is shown.</div>
	<i class="small text-muted">
Possible values: NONE, MANDATORY.<br />
				    <span>Example: <code>MANDATORY</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>VerificationCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This parameter can be used to display an entry form to request Verification Code (CVV, CVC) in case that an alias is used as PaymentMeans. Note that not all brands support Verification Code.</div>
	<i class="small text-muted">
Possible values: NONE, MANDATORY.<br />
				    <span>Example: <code>MANDATORY</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_CardInfo"</h2>
				<table class="table" id="Payment_Models_Data_CardInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MaskedNumber</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Masked card number</div>
	<i class="small text-muted">
				    <span>Example: <code>912345xxxxxx1234</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExpYear</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Year of expiration</div>
	<i class="small text-muted">
				    <span>Example: <code>2015</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExpMonth</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Month of expiration (eg 9 for September)</div>
	<i class="small text-muted">
				    <span>Example: <code>9</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HolderName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the card holder (if known)</div>
	<i class="small text-muted">
				    <span>Example: <code>John Doe</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HolderSegment</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The Segment of card holder. Only returned for Alias/AssertInsert, Alias/InsertDirect and Alias/Update calls if available.</div>
	<i class="small text-muted">
Possible values: UNSPECIFIED, CONSUMER, CORPORATE, CORPORATE_AND_CONSUMER.<br />
				    <span>Example: <code>CORPORATE</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CountryCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">ISO 2-letter country code of the card origin (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>CH</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HashValue</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The HashValue, if the hash generation is configured for the customer.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_ClientInfo"</h2>
				<table class="table" id="Payment_Models_Data_ClientInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ShopInfo</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name and version of the shop software</div>
	<i class="small text-muted">
Iso885915[1..100]<br />
				    <span>Example: <code>My Shop</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OsInfo</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the operating system</div>
	<i class="small text-muted">
Iso885915[1..100]<br />
				    <span>Example: <code>Windows Server 2013</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_CustomPlan"</h2>
				<table class="table" id="Payment_Models_Data_CustomPlan">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MinimumNumberOfInstallments</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Maximum Number of Installments. Valid values are 2–99 and<br> MaximumNumberOfInstallments must be bigger or equal MinimumNumberOfInstallments.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MaximumNumberOfInstallments</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Minimum Number of Installments. Valid values are 2–99 and<br> MinimumNumberOfInstallments must be smaller or equal MaximumNumberOfInstallments.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>InterestRate</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Interest rate in hundredth of a percent. e.g. value 125 means 1.25%.<br> Valid values are 0-99999</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>InstallmentFee</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Installment Fee</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AnnualPercentageRate</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Annual percentage rate in hundreth of a percent. e.g. value 125 means 1.25%.<br> Valid values are 0-99999</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TotalAmountDue</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Total Amount Due</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_DccInfo"</h2>
				<table class="table" id="Payment_Models_Data_DccInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerAmount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount in payer’s currency</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Markup</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">DCC markup fee</div>
	<i class="small text-muted">
				    <span>Example: <code>3%</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExchangeRate</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The used exchange rate including markup<br> The decimal separator used is '.' regardless of location</div>
	<i class="small text-muted">
				    <span>Example: <code>1.2345</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_DirectDebitInfo"</h2>
				<table class="table" id="Payment_Models_Data_DirectDebitInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MandateId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The unique Mandate reference, required for german direct debit payments.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CreditorId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Creditor id, required for german direct debit payments.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_ExtendedStyling"</h2>
				<table class="table" id="Payment_Models_Data_ExtendedStyling">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Theme</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This parameter let you customize the appearance of the displayed payment pages. Per default a lightweight responsive styling will be applied.<br> If you don't want any styling use 'NONE'.</div>
	<i class="small text-muted">
Possible values: DEFAULT, SIX, NONE.<br />
				    <span>Example: <code>DEFAULT</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CssUrl</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Custom styling resource (url) which will be referenced in web pages displayed by Saferpay to apply your custom styling.<br> This file must be hosted on a SSL/TLS secured web server (the url must start with https://).<br> If a custom CSS is provided, any design related settings set in the payment page config (PPConfig) will be ignored and the default design will be used.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/merchant.css</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ContentSecurityEnabled</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">When enabled, then ContentSecurity/SAQ-A is requested, which leads to the CSS being loaded from the saferpay server.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_GooglePay"</h2>
				<table class="table" id="Payment_Models_Data_GooglePay">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PaymentToken</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">GooglePay Payment Token</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_IdealOptions"</h2>
				<table class="table" id="Payment_Models_Data_IdealOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IssuerId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Preselect the iDEAL issuer. If specified together with PaymentMethods preselection of iDEAL,<br> the user is redirected directly to the issuer bank.<br> If the IssuerId is set, it is mandatory to use iDEAL in PaymentMethods.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_InsertAliasSupportingPaymentMeans"</h2>
				<table class="table" id="Payment_Models_Data_InsertAliasSupportingPaymentMeans">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SaferpayFields</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_SaferpayFields">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payment means data collected with SaferpayFields.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Card</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Card">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Card data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_InstallmentOptions"</h2>
				<table class="table" id="Payment_Models_Data_InstallmentOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Initial</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">If set to true, the authorization may later be referenced for installment followup transactions.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_InstallmentPlan"</h2>
				<table class="table" id="Payment_Models_Data_InstallmentPlan">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>NumberOfInstallments</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Number of Installments. Valid values are 2–99.</div>
	<i class="small text-muted">
Range: inclusive between 2 and 99<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>InterestRate</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Interest rate in hundredth of a percent. e.g. value 125 means 1.25%.<br> Valid values are 0-99999</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>InstallmentFee</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Installment Fee</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AnnualPercentageRate</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Annual percentage rate in hundredth of a percent. e.g. value 125 means 1.25%.<br> Valid values are 0-99999</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>FirstInstallmentAmount</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">First Installment Amount</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SubsequentInstallmentAmount</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Subsequent Installment Amount</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TotalAmountDue</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Total Amount Due</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_InvoiceInfo"</h2>
				<table class="table" id="Payment_Models_Data_InvoiceInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Payee</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_BankAccount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information about the payee, eg billpay, who is responsible for collecting the bill</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ReasonForTransfer</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The reason for transfer to be stated when paying the invoice (transfer of funds)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DueDate</strong><br />
	<span class="text-muted small">
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The date by which the invoice needs to be settled</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_IssuerReference"</h2>
				<table class="table" id="Payment_Models_Data_IssuerReference">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TransactionStamp</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">TransactionStamp</div>
	<i class="small text-muted">
Max length: 50<br />
				    <span>Example: <code>9406957728464714731817</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SettlementDate</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">SettlementDate with the format MMYY</div>
	<i class="small text-muted">
String length: inclusive between 4 and 4<br />
				    <span>Example: <code>0122</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_IssuerReferenceInfo"</h2>
				<table class="table" id="Payment_Models_Data_IssuerReferenceInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TransactionStamp</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">SCA transaction stamp, created by the card issuer</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SettlementDate</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">SCA transaction settlement date, created by the card issuer. For MasterCard schemes only.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_KlarnaAttachment"</h2>
				<table class="table" id="Payment_Models_Data_KlarnaAttachment">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ContentType</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px"></div>
	<i class="small text-muted">
Utf8[1..1000]<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Body</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px"></div>
	<i class="small text-muted">
Utf8[1..100000]<br />
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_KlarnaOptions"</h2>
				<table class="table" id="Payment_Models_Data_KlarnaOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Attachment</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_KlarnaAttachment">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Klarna extra merchant data (EMD).<br> Check <a href="https://developers.klarna.com/documentation/klarna-checkout/use-cases/extra-merchant-data/" target="_blank">Klarna's EMD documentation</a> for further details.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_LiabilityInfo"</h2>
				<table class="table" id="Payment_Models_Data_LiabilityInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LiabilityShift</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Is liability shifted for this transaction</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LiableEntity</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Indicates who takes the liability for the transaction</div>
	<i class="small text-muted">
Possible values: MERCHANT, THREEDS.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ThreeDs</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_ThreeDsInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Details about ThreeDs if applicable</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>InPsd2Scope</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Determines if the transaction is in the PSD2 Scope (Payment Service Directive 2 of the European Union)</div>
	<i class="small text-muted">
Possible values: YES, NO, UNKNOWN.<br />
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_MarketplaceCapture"</h2>
				<table class="table" id="Payment_Models_Data_MarketplaceCapture">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SubmerchantId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The id of the marketplace submerchant on whose behalf the capture or refund capture is being made.</div>
	<i class="small text-muted">
Id[1..15]<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Fee</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The marketplace fee that will be charged from the marketplace to the submerchant.<br> The properties Fee and FeeRefund cannot be used simultaneously.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>FeeRefund</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The fee amount that will be refunded from the marketplace to the submerchant.<br> The properties Fee and FeeRefund cannot be used simultaneously.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_MastercardIssuerInstallmentsOptions"</h2>
				<table class="table" id="Payment_Models_Data_MastercardIssuerInstallmentsOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>InstallmentPlans</strong><br />
	<span class="text-muted small">
				
				<span>array of <a class="type-details in" href="#Payment_Models_Data_InstallmentPlan">object</a>s</span>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">A maximum number of 12 fixed installment plans<br> If InstallmentPlans is present, CustomPlan must not be present</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CustomPlan</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_CustomPlan">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">An installment plan with customizable numbers of installments<br> If CustomPlan is present, InstallmentPlans must not be present<br><br>An installment plan with customizable numbers of installments</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ReceiptFreeText</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Receipt Free Text</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_MastercardIssuerInstallmentsSelection"</h2>
				<table class="table" id="Payment_Models_Data_MastercardIssuerInstallmentsSelection">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ChosenPlan</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_InstallmentPlan">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Installment Payment Data, if applicable<br><br>A single, fixed installment plan</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Notification"</h2>
				<table class="table" id="Payment_Models_Data_Notification">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MerchantEmails</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Email addresses to which a confirmation email will be sent to the merchants after successful authorizations.<br> A maximum of 10 email addresses is allowed.</div>
	<i class="small text-muted">
				    <span>Example: <code>[&quot;merchant1@saferpay.com&quot;, &quot;merchant2@saferpay.com&quot;]</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerEmail</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Email address to which a confirmation email will be sent to the payer after successful authorizations.</div>
	<i class="small text-muted">
				    <span>Example: <code>payer@saferpay.com</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SuccessNotifyUrl</strong><br />
	<span class="text-muted small">
					<span>
				<span class="text-recommended">recommended</span>,
			</span>
		string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Url to which Saferpay will send the asynchronous success notification for the transaction. Supported schemes are http and https. You also have to make sure to support the GET-method.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/notify/123</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>FailNotifyUrl</strong><br />
	<span class="text-muted small">
					<span>
				<span class="text-recommended">recommended</span>,
			</span>
		string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Url to which Saferpay will send the asynchronous failure notification for the transaction. Supported schemes are http and https. You also have to make sure to support the GET-method.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/notify/123</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Order"</h2>
				<table class="table" id="Payment_Models_Data_Order">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Items</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<span>array of <a class="type-details in" href="#Payment_Models_Data_OrderItem">object</a>s</span>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Order items</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_OrderItem"</h2>
				<table class="table" id="Payment_Models_Data_OrderItem">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Order item type</div>
	<i class="small text-muted">
Possible values: DIGITAL, PHYSICAL, SERVICE, GIFTCARD, DISCOUNT, SHIPPINGFEE, SALESTAX, SURCHARGE.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Product id</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>C123192</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>VariantId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Product variant id</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>C123192-red</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Name</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Product name</div>
	<i class="small text-muted">
Utf8[1..200]<br />
				    <span>Example: <code>red swiss army knife</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CategoryName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Category name</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>knives</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Product description</div>
	<i class="small text-muted">
Utf8[1..200]<br />
				    <span>Example: <code>The well known swiss army knife</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Quantity</strong><br />
	<span class="text-muted small">
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The quantity of the order item</div>
	<i class="small text-muted">
				    <span>Example: <code>2</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>UnitPrice</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Price per single item in minor unit (CHF 15.50 &rArr; Value=1550). <b>Only Integer values will be accepted!</b></div>
	<i class="small text-muted">
				    <span>Example: <code>1550</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IsPreOrder</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Flag, which indicates that the order item is a pre order. Per default, it is not a pre order.</div>
	<i class="small text-muted">
				    <span>Example: <code>true</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TaxRate</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Tax rate of the item price in hundredth of a percent. e.g. value 1900 means 19.00%<br> Valid values are 0-99999</div>
	<i class="small text-muted">
Range: inclusive between 0 and 99999<br />
				    <span>Example: <code>1900</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TaxAmount</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Total tax amount of the order item. This tax needs to be included in the UnitPrice and must take the Quantity of the order item into account.</div>
	<i class="small text-muted">
				    <span>Example: <code>480</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DiscountAmount</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Discount amount including tax</div>
	<i class="small text-muted">
				    <span>Example: <code>92</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ProductUrl</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">URL to the product page</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/product/1</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ImageUrl</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">URL to an image showing the product</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/product/1/image</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_OriginalCreditTransfer"</h2>
				<table class="table" id="Payment_Models_Data_OriginalCreditTransfer">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Recipient</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Address">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Address of the Recipient.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PayerInfo"</h2>
				<table class="table" id="Payment_Models_Data_PayerInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payer identifier defined by the merchant / shop.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IpAddress</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">IPv4 address of the card holder / payer if available. Dotted quad notation.</div>
	<i class="small text-muted">
				    <span>Example: <code>111.111.111.111</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IpLocation</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The location the IpAddress, if available. This might be a valid country code or a special value for 'non-country' locations (anonymous proxy, satellite phone, ...).</div>
	<i class="small text-muted">
				    <span>Example: <code>NZ</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DeliveryAddress</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_Address">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px"></div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BillingAddress</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_BillingAddress">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px"></div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PayerProfile"</h2>
				<table class="table" id="Payment_Models_Data_PayerProfile">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HasAccount</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Does the payer have an account in the shop?</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>HasPassword</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Does the payer have a password?</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PasswordForgotten</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Was the password reset by the payer using the "forgot my password" feature in the current session?</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>FirstName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's first name</div>
	<i class="small text-muted">
Utf8[1..100]<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LastName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's last name</div>
	<i class="small text-muted">
Utf8[1..100]<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Company</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's company</div>
	<i class="small text-muted">
Utf8[1..100]<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DateOfBirth</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's date of birth (ISO 8601)<br> YYYY-MM-DD</div>
	<i class="small text-muted">
AlphaNumeric[10..10]<br />
				    <span>Example: <code>1990-05-31</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LastLoginDate</strong><br />
	<span class="text-muted small">
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's last login (ISO 8601)</div>
	<i class="small text-muted">
				    <span>Example: <code>2018-05-25T18:12:43Z
            2018-05-25T19:12:43+01:00</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Gender</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's gender</div>
	<i class="small text-muted">
Possible values: MALE, FEMALE, DIVERSE, COMPANY.<br />
				    <span>Example: <code>COMPANY</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CreationDate</strong><br />
	<span class="text-muted small">
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date and Time (ISO 8601) when user account was created</div>
	<i class="small text-muted">
				    <span>Example: <code>2018-05-25T18:12:43Z
            2018-05-25T19:12:43+01:00</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PasswordLastChangeDate</strong><br />
	<span class="text-muted small">
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date and Time (ISO 8601) when the account password was changed last time</div>
	<i class="small text-muted">
				    <span>Example: <code>2018-05-25T18:12:43Z
            2018-05-25T19:12:43+01:00</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Email</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's email address</div>
	<i class="small text-muted">
				    <span>Example: <code>payer@provider.com</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SecondaryEmail</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's secondary email address</div>
	<i class="small text-muted">
				    <span>Example: <code>payer_secondary@provider.com</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Phone</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Phone">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's phone numbers</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Payment"</h2>
				<table class="table" id="Payment_Models_Data_Payment">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount data (currency, value, etc.)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
					<span>
				<span class="text-recommended">recommended</span>,
			</span>
		string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unambiguous order identifier defined by the merchant / shop. This identifier might be used as reference later on.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerNote</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Text which will be printed on payer's debit note. Supported by SIX Acquiring. No guarantee that it will show up on the payer's debit note, because his bank has to support it too.<br> Please note that maximum allowed characters are rarely supported. It's usually around 10-12.</div>
	<i class="small text-muted">
Utf8[1..50]<br />
				    <span>Example: <code>Payernote</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">A human readable description provided by the merchant that can be displayed in web sites.</div>
	<i class="small text-muted">
Utf8[1..1000]<br />
				    <span>Example: <code>Description</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MandateId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Mandate reference of the payment. Needed for German direct debits (ELV) only. The value has to be unique.</div>
	<i class="small text-muted">
Id[1..35]<br />
				    <span>Example: <code>MandateId</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Options</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_PaymentOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Specific payment options</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Recurring</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_RecurringOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Recurring options – cannot be combined with Installment.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Installment</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_InstallmentOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Installment options – cannot be combined with Recurring.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PaymentMeans"</h2>
				<table class="table" id="Payment_Models_Data_PaymentMeans">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SaferpayFields</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_SaferpayFields">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payment means data collected with SaferpayFields.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Card</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Card">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Card data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Alias</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Alias">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Alias data if payment means was registered with Secure Card Data before.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SchemeToken</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_SchemeToken">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Surrogate values that replace the primary account number (PAN) according to the EMV Payment Tokenization Specification</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BankAccount</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_BankAccount">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Bank account data for direct debit transaction</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>GooglePay</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_GooglePay">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payment Data from GooglePay</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ApplePay</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_ApplePay">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payment Data from ApplePay</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PaymentMeansInfo"</h2>
				<table class="table" id="Payment_Models_Data_PaymentMeansInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Brand</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_Brand">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Brand information</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DisplayText</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Means of payment formatted / masked for display purposes</div>
	<i class="small text-muted">
				    <span>Example: <code>DisplayText</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Wallet</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of Wallet, if the transaction was done by a wallet</div>
	<i class="small text-muted">
				    <span>Example: <code>MasterPass</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Card</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_CardInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Card data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BankAccount</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_BankAccountInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Bank account data for direct debit transactions.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayPal</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_PayPalInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">PayPal data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PaymentPagePayment"</h2>
				<table class="table" id="Payment_Models_Data_PaymentPagePayment">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount data (currency, value, etc.)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
					<span>
				<span class="text-recommended">recommended</span>,
			</span>
		string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unambiguous order identifier defined by the merchant / shop. This identifier might be used as reference later on.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerNote</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Text which will be printed on payer's debit note. Supported by SIX Acquiring. No guarantee that it will show up on the payer's debit note, because his bank has to support it too.<br> Please note that maximum allowed characters are rarely supported. It's usually around 10-12.</div>
	<i class="small text-muted">
Utf8[1..50]<br />
				    <span>Example: <code>Payernote</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">A human readable description provided by the merchant that will be displayed in Payment Page.</div>
	<i class="small text-muted">
Utf8[1..1000]<br />
				    <span>Example: <code>Description of payment</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MandateId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Mandate reference of the payment. Needed for German direct debits (ELV) only. The value has to be unique.</div>
	<i class="small text-muted">
Id[1..35]<br />
				    <span>Example: <code>MandateId</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Options</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_PaymentOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Specific payment options</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Recurring</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_RecurringOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Recurring options – cannot be combined with Installment.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Installment</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_InstallmentOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Installment options – cannot be combined with Recurring.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PaymentPageStyling"</h2>
				<table class="table" id="Payment_Models_Data_PaymentPageStyling">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Theme</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This parameter let you customize the appearance of the displayed payment pages. Per default a lightweight responsive styling will be applied.<br> If you don't want any styling use 'NONE'.</div>
	<i class="small text-muted">
Possible values: DEFAULT, SIX, NONE.<br />
				    <span>Example: <code>DEFAULT</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CssUrl</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px"><strong>DEPRECATED:</strong>: This feature will be removed in one of the next versions. Consider using payment page config (PPConfig) or Saferpay Fields instead.<br> <br> Custom styling resource (url) which will be referenced in web pages displayed by Saferpay to apply your custom styling.<br> This file must be hosted on a SSL/TLS secured web server (the url must start with https://).<br> If a custom CSS is provided, any design related settings set in the payment page config (PPConfig) will be ignored and the default design will be used.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/merchant.css</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ContentSecurityEnabled</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">When enabled, then ContentSecurity/SAQ-A is requested, which leads to the CSS being loaded from the saferpay server.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PaymentTransaction"</h2>
				<table class="table" id="Payment_Models_Data_PaymentTransaction">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of transaction. One of 'PAYMENT'</div>
	<i class="small text-muted">
Possible values: PAYMENT.<br />
				    <span>Example: <code>PAYMENT</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Status</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Current status of the transaction. One of 'AUTHORIZED','CANCELED', 'CAPTURED' or 'PENDING' (PENDING is only used for paydirekt and WL Crypto Payments refund at the moment)</div>
	<i class="small text-muted">
Possible values: AUTHORIZED, CANCELED, CAPTURED, PENDING.<br />
				    <span>Example: <code>AUTHORIZED</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique Saferpay transaction id. Used to reference the transaction in any further step.</div>
	<i class="small text-muted">
				    <span>Example: <code>K5OYS9Ad6Ex4rASU1IM1b3CEU8bb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CaptureId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique Saferpay capture id.<br> Available if the transaction was already captured (Status: CAPTURED).<br> Must be stored for later reference (eg refund).</div>
	<i class="small text-muted">
Id[1..64]<br />
				    <span>Example: <code>ECthWpbv1SI6SAIdU2p6AIC1bppA</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date / time of the authorization</div>
	<i class="small text-muted">
				    <span>Example: <code>2011-09-23T14:57:23.023+02.00</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount (currency, value, etc.) that has been authorized.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">OrderId given with request</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AcquirerName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the acquirer</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerName</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AcquirerReference</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference id of the acquirer (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SixTransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique SIX transaction reference.</div>
	<i class="small text-muted">
				    <span>Example: <code>0:0:3:K5OYS9Ad6Ex4rASU1IM1b3CEU8bb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ApprovalCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Approval id of the acquirer (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DirectDebit</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_DirectDebitInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Direct Debit information, if applicable</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Invoice</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_InvoiceInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Invoice information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IssuerReference</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_IssuerReferenceInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Issuer reference information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PayPalInfo"</h2>
				<table class="table" id="Payment_Models_Data_PayPalInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">PayerId from PayPal</div>
	<i class="small text-muted">
				    <span>Example: <code>5b9aefc5-9b48-4a95-ae47-cda20420d68e</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SellerProtectionStatus</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Seller protection status from PayPal.</div>
	<i class="small text-muted">
Possible values: ELIGIBLE, PARTIALLY_ELIGIBLE, NOT_ELIGIBLE.<br />
				    <span>Example: <code>ELIGIBLE</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Email</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The email address used in PayPal</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_PendingNotification"</h2>
				<table class="table" id="Payment_Models_Data_PendingNotification">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>MerchantEmails</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Email addresses to which a confirmation email will be sent when the transaction is completed.<br> A maximum of 10 email addresses is allowed.</div>
	<i class="small text-muted">
				    <span>Example: <code>[&quot;merchant1@saferpay.com&quot;, &quot;merchant2@saferpay.com&quot;]</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>NotifyUrl</strong><br />
	<span class="text-muted small">
					<span>
				<span class="text-recommended">recommended</span>,
			</span>
		string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Url which is called by Saferpay if an action could not be completed synchronously and was reported with a ‘pending’ state (eg CAPTURE_PENDING or REFUND_PENDING). Up until now, this is only applicable for Paydirekt or WL Crypto Payments transactions.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/pendingnotify</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Phone"</h2>
				<table class="table" id="Payment_Models_Data_Phone">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Main</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's main phone number</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>+41 12 345 6789</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Mobile</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's mobile number</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>+41 79 345 6789</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Work</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The payer's work phone number</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>+41 12 345 6789</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RecurringOptions"</h2>
				<table class="table" id="Payment_Models_Data_RecurringOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Initial</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">If set to true, the authorization may later be referenced for recurring followup transactions.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Redirect"</h2>
				<table class="table" id="Payment_Models_Data_Redirect">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>RedirectUrl</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Redirect-URL. Used to either redirect the payer or let him enter his means of payment.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://www.saferpay.com/VT2/api/...</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PaymentMeansRequired</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">If 'true', the given URL must either be used as the target of a form (POST) containing card data entered by the card holder or to redirect the browser to (GET). If ‘false’, a GET redirect without additional data must be performed.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RedirectNotifyUrls"</h2>
				<table class="table" id="Payment_Models_Data_RedirectNotifyUrls">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Success</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Notification url called when the payer has completed the redirect steps successfully and the transaction is ready to be authorized.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/success/123</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Fail</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Notification url called when the payer redirect steps have failed. The transaction cannot be authorized.</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/fail/123</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Refund"</h2>
				<table class="table" id="Payment_Models_Data_Refund">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
					<span>
				<span class="text-recommended">recommended</span>,
			</span>
		string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference defined by the merchant.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Description provided by merchant</div>
	<i class="small text-muted">
Utf8[1..1000]<br />
				    <span>Example: <code>Description</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>RestrictRefundAmountToCapturedAmount</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">If set to true, the refund will be rejected if the sum of refunds exceeds the captured amount.<br> All authorized refunds are included in the calculation even if the have not been captured yet. Cancelled refunds are not included.<br> By default this check is disabled.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RefundDirect"</h2>
				<table class="table" id="Payment_Models_Data_RefundDirect">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
					<span>
				<span class="text-recommended">recommended</span>,
			</span>
		string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference defined by the merchant.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Description provided by merchant</div>
	<i class="small text-muted">
Utf8[1..1000]<br />
				    <span>Example: <code>Description</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RefundDirectSupportingPaymentMeans"</h2>
				<table class="table" id="Payment_Models_Data_RefundDirectSupportingPaymentMeans">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SaferpayFields</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_SaferpayFields">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Payment means data collected with SaferpayFields.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Card</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Card">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Card data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Alias</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_Alias">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Alias data if payment means was registered with Secure Card Data before.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SchemeToken</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_SchemeToken">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Surrogate values that replace the primary account number (PAN) according to the EMV Payment Tokenization Specification</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RefundTransaction"</h2>
				<table class="table" id="Payment_Models_Data_RefundTransaction">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of transaction. One of 'REFUND'</div>
	<i class="small text-muted">
Possible values: REFUND.<br />
				    <span>Example: <code>REFUND</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Status</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Current status of the transaction. One of 'AUTHORIZED','CANCELED', 'CAPTURED' or 'PENDING' (PENDING is only used for paydirekt and WL Crypto Payments refund at the moment)</div>
	<i class="small text-muted">
Possible values: AUTHORIZED, CANCELED, CAPTURED, PENDING.<br />
				    <span>Example: <code>AUTHORIZED</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique Saferpay transaction id. Used to reference the transaction in any further step.</div>
	<i class="small text-muted">
				    <span>Example: <code>K5OYS9Ad6Ex4rASU1IM1b3CEU8bb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CaptureId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique Saferpay capture id.<br> Available if the transaction was already captured (Status: CAPTURED).<br> Must be stored for later reference (eg refund).</div>
	<i class="small text-muted">
Id[1..64]<br />
				    <span>Example: <code>ECthWpbv1SI6SAIdU2p6AIC1bppA</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date / time of the authorization</div>
	<i class="small text-muted">
				    <span>Example: <code>2011-09-23T14:57:23.023+02.00</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount (currency, value, etc.) that has been authorized.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">OrderId given with request</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AcquirerName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the acquirer</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerName</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AcquirerReference</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference id of the acquirer (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SixTransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique SIX transaction reference.</div>
	<i class="small text-muted">
				    <span>Example: <code>0:0:3:K5OYS9Ad6Ex4rASU1IM1b3CEU8bb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ApprovalCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Approval id of the acquirer (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DirectDebit</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_DirectDebitInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Direct Debit information, if applicable</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Invoice</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_InvoiceInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Invoice information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IssuerReference</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_IssuerReferenceInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Issuer reference information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RegisterAlias"</h2>
				<table class="table" id="Payment_Models_Data_RegisterAlias">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IdGenerator</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id generator to be used by Saferpay.</div>
	<i class="small text-muted">
Possible values: MANUAL, RANDOM, RANDOM_UNIQUE.<br />
				    <span>Example: <code>MANUAL</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Alias id to be used for registration if not generated by Saferpay. Mandatory if IdGenerator is 'MANUAL'. This value is case-insensitive.</div>
	<i class="small text-muted">
Id[1..40]<br />
				    <span>Example: <code>alias35nfd9mkzfw0x57iwx</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Lifetime</strong><br />
	<span class="text-muted small">
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Number of days this card is to be stored within Saferpay. If not filled, the default lifetime (1096 days) will be used.</div>
	<i class="small text-muted">
Range: inclusive between 1 and 1600<br />
				    <span>Example: <code>1000</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RegistrationErrorInfo"</h2>
				<table class="table" id="Payment_Models_Data_RegistrationErrorInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ErrorName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name / id of the error.</div>
	<i class="small text-muted">
				    <span>Example: <code>ErrorName</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ErrorMessage</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Description of the error.</div>
	<i class="small text-muted">
				    <span>Example: <code>ErrorMessage</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RegistrationResult"</h2>
				<table class="table" id="Payment_Models_Data_RegistrationResult">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Success</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Result of registration</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Alias</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_AliasInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">If Success is 'true', information about the alias</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Error</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_RegistrationErrorInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">If Success is 'false', information on why the registration failed</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AuthenticationResult</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_AliasAuthenticationResultBase">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">contains information whether the alias is saved with the strong authentication details or not.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_ReturnUrl"</h2>
				<table class="table" id="Payment_Models_Data_ReturnUrl">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Url</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Return url for successful, failed or aborted transaction</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/return</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_RiskFactors"</h2>
				<table class="table" id="Payment_Models_Data_RiskFactors">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DeliveryType</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Delivery method</div>
	<i class="small text-muted">
Possible values: EMAIL, SHOP, HOMEDELIVERY, PICKUP, HQ.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PayerProfile</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_PayerProfile">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Information on the payer executing the transaction, generally referring to his/her customer profile in the shop (if any).</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IsB2B</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Is the transaction B2B?</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_SaferpayFields"</h2>
				<table class="table" id="Payment_Models_Data_SaferpayFields">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Token</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay Fields token</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_SchemeToken"</h2>
				<table class="table" id="Payment_Models_Data_SchemeToken">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Number</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Token number</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExpMonth</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Expiry Month of the token.</div>
	<i class="small text-muted">
Range: inclusive between 1 and 12<br />
				    <span>Example: <code>10</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExpYear</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Expiry Year of the token.</div>
	<i class="small text-muted">
				    <span>Example: <code>2023</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AuthValue</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">TAVV Cryptogram</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Eci</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Saferpay E-Commerce Indicator</div>
	<i class="small text-muted">
				    <span>Example: <code>2023</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_StrongCustomerAuthenticationDirect"</h2>
				<table class="table" id="Payment_Models_Data_StrongCustomerAuthenticationDirect">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Exemption</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of Exemption</div>
	<i class="small text-muted">
Possible values: LOW_VALUE, TRANSACTION_RISK_ANALYSIS, RECURRING.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IssuerReference</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_IssuerReference">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Contains data that is received from the issuer in the response of a successful payment by other payment providers and will be forwarded to scheme for only this payment.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_StrongCustomerAuthenticationInteractive"</h2>
				<table class="table" id="Payment_Models_Data_StrongCustomerAuthenticationInteractive">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Exemption</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of Exemption</div>
	<i class="small text-muted">
Possible values: LOW_VALUE, TRANSACTION_RISK_ANALYSIS.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ThreeDsChallenge</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">3DS Secure challenge options</div>
	<i class="small text-muted">
Possible values: AVOID, FORCE.<br />
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_StrongCustomerAuthenticationReferenced"</h2>
				<table class="table" id="Payment_Models_Data_StrongCustomerAuthenticationReferenced">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Exemption</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of Exemption</div>
	<i class="small text-muted">
Possible values: RECURRING.<br />
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_ThreeDsInfo"</h2>
				<table class="table" id="Payment_Models_Data_ThreeDsInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Authenticated</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Indicates, whether the payer has successfuly authenticated him/herself or not.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LiabilityShift</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Indicates whether liability shift to issuer is possible or not. Not present if PaymentMeans container was not present in Initialize request. True, if liability shift to issuer is possible, false if not (only SSL transaction).<br> Please note, that the authentification can be true, but the liabilityshift is false. The issuer has the right to deny the liabiliy shift during the authorization. You can continue to capture the payment here, but we recommend to cancel unsecure payments.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Xid</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Transaction Id, given by the MPI. References the 3D Secure process.</div>
	<i class="small text-muted">
				    <span>Example: <code>ARkvCgk5Y1t/BDFFXkUPGX9DUgs= for 3D Secure version 1 /
            1ef5b3db-3b97-47df-8272-320d0bd18ab5 for 3D Secure version 2</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Version</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The 3D Secure Version.</div>
	<i class="small text-muted">
				    <span>Example: <code>2</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AuthenticationType</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Determines how the card holder was authenticated. Some 3D Secure Versions allow a Frictionless authentication.</div>
	<i class="small text-muted">
Possible values: STRONG_CUSTOMER_AUTHENTICATION, FRICTIONLESS, ATTEMPT, EXEMPTION, NONE.<br />
				    <span>Example: <code>StrongCustomerAuthentication</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Transaction"</h2>
				<table class="table" id="Payment_Models_Data_Transaction">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Type of transaction. One of 'PAYMENT', 'REFUND'</div>
	<i class="small text-muted">
Possible values: PAYMENT, REFUND.<br />
				    <span>Example: <code>PAYMENT</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Status</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Current status of the transaction. One of 'AUTHORIZED','CANCELED', 'CAPTURED' or 'PENDING' (PENDING is only used for paydirekt and WL Crypto Payments refund at the moment)</div>
	<i class="small text-muted">
Possible values: AUTHORIZED, CANCELED, CAPTURED, PENDING.<br />
				    <span>Example: <code>AUTHORIZED</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique Saferpay transaction id. Used to reference the transaction in any further step.</div>
	<i class="small text-muted">
				    <span>Example: <code>K5OYS9Ad6Ex4rASU1IM1b3CEU8bb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CaptureId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique Saferpay capture id.<br> Available if the transaction was already captured (Status: CAPTURED).<br> Must be stored for later reference (eg refund).</div>
	<i class="small text-muted">
Id[1..64]<br />
				    <span>Example: <code>ECthWpbv1SI6SAIdU2p6AIC1bppA</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Date</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Date / time of the authorization</div>
	<i class="small text-muted">
				    <span>Example: <code>2011-09-23T14:57:23.023+02.00</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount (currency, value, etc.) that has been authorized.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">OrderId given with request</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AcquirerName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the acquirer</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerName</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>AcquirerReference</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Reference id of the acquirer (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>SixTransactionReference</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unique SIX transaction reference.</div>
	<i class="small text-muted">
				    <span>Example: <code>0:0:3:K5OYS9Ad6Ex4rASU1IM1b3CEU8bb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ApprovalCode</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Approval id of the acquirer (if available)</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DirectDebit</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_DirectDebitInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Direct Debit information, if applicable</div>
	<i class="small text-muted">
				    <span>Example: <code>AcquirerReference</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Invoice</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_InvoiceInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Invoice information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IssuerReference</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_IssuerReferenceInfo">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Issuer reference information, if applicable</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_TransactionReference"</h2>
				<table class="table" id="Payment_Models_Data_TransactionReference">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TransactionId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the referenced transaction.</div>
	<i class="small text-muted">
AlphaNumeric[1..64]<br />
				    <span>Example: <code>723n4MAjMdhjSAhAKEUdA8jtl9jb</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unambiguous OrderId of the referenced transaction.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_TwintInfo"</h2>
				<table class="table" id="Payment_Models_Data_TwintInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CertificateExpirationDate</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				date
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Twint token expiry date</div>
	<i class="small text-muted">
				    <span>Example: <code>2019-11-08T12:29:37.000+01:00</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_UpdateAlias"</h2>
				<table class="table" id="Payment_Models_Data_UpdateAlias">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The id of the alias that should be updated.. This value is case-insensitive.</div>
	<i class="small text-muted">
Id[1..40]<br />
				    <span>Example: <code>alias35nfd9mkzfw0x57iwx</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Lifetime</strong><br />
	<span class="text-muted small">
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Number of days this card is to be stored within Saferpay.</div>
	<i class="small text-muted">
Range: inclusive between 1 and 1600<br />
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_UpdateCreditCard"</h2>
				<table class="table" id="Payment_Models_Data_UpdateCreditCard">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExpYear</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Year of expiration</div>
	<i class="small text-muted">
Range: inclusive between 2000 and 9999<br />
				    <span>Example: <code>2015</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ExpMonth</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Month of expiration (eg 9 for September)</div>
	<i class="small text-muted">
Range: inclusive between 1 and 12<br />
				    <span>Example: <code>9</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_UpdatePaymentMeans"</h2>
				<table class="table" id="Payment_Models_Data_UpdatePaymentMeans">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Card</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Payment_Models_Data_UpdateCreditCard">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Card data</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_Data_Wallet"</h2>
				<table class="table" id="Payment_Models_Data_Wallet">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The type of the wallet.</div>
	<i class="small text-muted">
Possible values: MASTERPASS.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PaymentMethods</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">May be used to restrict the brands which should be allowed. If not sent, we use all brands configured on this terminal.</div>
	<i class="small text-muted">
Possible values: ACCOUNTTOACCOUNT, ALIPAY, AMEX, BANCONTACT, BONUS, DINERS, DIRECTDEBIT, EPRZELEWY, EPS, GIROPAY, IDEAL, INVOICE, JCB, KLARNA, MAESTRO, MASTERCARD, MYONE, PAYCONIQ, PAYDIREKT, PAYPAL, POSTCARD, POSTFINANCE, SOFORT, TWINT, UNIONPAY, VISA, WLCRYPTOPAYMENTS.<br />
				    <span>Example: <code>[&quot;VISA&quot;, &quot;MASTERCARD&quot;]</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>RequestDeliveryAddress</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Have the payer select a delivery address in his wallet. If not sent, no address is obtained from wallet.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>EnableAmountAdjustment</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">This option is very specific for the MasterPass business scenario where the amount may be adjusted after the redirect to MasterPass and QueryPaymentMeans to allow for changes in shipping costs.<br> If this is set to true, DCC will not be done right away (but may be done later with an additional redirect).<br> DON’T USE THIS IF YOU’RE NOT SURE – IT’S PROBABLY NOT WHAT YOU WANT!</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_FraudPrevention"</h2>
				<table class="table" id="Payment_Models_FraudPrevention">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Result</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The result of the performed fraud prevention check</div>
	<i class="small text-muted">
Possible values: APPROVED, MANUAL_REVIEW.<br />
				    <span>Example: <code>APPROVED</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_PaymentMethodsOptions"</h2>
				<table class="table" id="Payment_Models_PaymentMethodsOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Alipay</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_AlipayOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional. Options which only apply to Alipay.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Ideal</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_IdealOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional. Options which only apply to IDEAL.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Klarna</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Payment_Models_Data_KlarnaOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Optional. Options which only apply to Klarna.</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "Payment_Models_RiskDetails"</h2>
				<table class="table" id="Payment_Models_RiskDetails">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>BlockReason</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Indicates the blocking reason of the transaction.</div>
	<i class="small text-muted">
Possible values: BLACKLIST_IP, BLACKLIST_IP_ORIGIN, BLACKLIST_PAYMENT_MEANS, BLACKLIST_PAYMENT_MEANS_ORIGIN.<br />
				    <span>Example: <code>BLACKLIST_IP_ORIGIN</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IpLocation</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Is the location of the payer and it can be either the two letter country-code (such as CH, DE, etc.)<br> or the special cases. The special cases are: PROXY and SATELLITE_PROVIDER.</div>
	<i class="small text-muted">
				    <span>Example: <code>CH</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "RestApi_Models_Data_Order"</h2>
				<table class="table" id="RestApi_Models_Data_Order">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Items</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<span>array of <a class="type-details in" href="#RestApi_Models_Data_OrderItem">object</a>s</span>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Order items</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "RestApi_Models_Data_OrderItem"</h2>
				<table class="table" id="RestApi_Models_Data_OrderItem">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Order item type</div>
	<i class="small text-muted">
Possible values: DIGITAL, PHYSICAL, SERVICE, GIFTCARD, DISCOUNT, SHIPPINGFEE, SALESTAX, SURCHARGE.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Product id</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>C123192</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>VariantId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Product variant id</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>C123192-red</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Name</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Product name</div>
	<i class="small text-muted">
Utf8[1..200]<br />
				    <span>Example: <code>red swiss army knife</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>CategoryName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Category name</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>knives</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Product description</div>
	<i class="small text-muted">
Utf8[1..200]<br />
				    <span>Example: <code>The well known swiss army knife</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Quantity</strong><br />
	<span class="text-muted small">
				integer
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The quantity of the order item</div>
	<i class="small text-muted">
				    <span>Example: <code>3</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>UnitPrice</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Price per single item in minor unit (CHF 2.00 &rArr; Value=200). <b>Only Integer values will be accepted!</b></div>
	<i class="small text-muted">
				    <span>Example: <code>200</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IsPreOrder</strong><br />
	<span class="text-muted small">
				boolean
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Flag, which indicates that the order item is a pre order. Per default, it is not a pre order.</div>
	<i class="small text-muted">
				    <span>Example: <code>true</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TaxRate</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Tax rate of the item price in hundredth of a percent. e.g. value 125 means 1.25%<br> Valid values are 0-99999</div>
	<i class="small text-muted">
Range: inclusive between 0 and 99999<br />
				    <span>Example: <code>2100</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TaxAmount</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Tax amount which is included in the item price</div>
	<i class="small text-muted">
				    <span>Example: <code>42</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DiscountAmount</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Discount amount including tax</div>
	<i class="small text-muted">
				    <span>Example: <code>10</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ProductUrl</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">URL to the product page</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/product/1</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>ImageUrl</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">URL to an image showing the product</div>
	<i class="small text-muted">
				    <span>Example: <code>https://merchanthost/product/1/image</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "RestApi_Models_Data_PaymentWithOptions"</h2>
				<table class="table" id="RestApi_Models_Data_PaymentWithOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount data (currency, value, etc.)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unambiguous order identifier defined by the merchant / shop. This identifier might be used as reference later on.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">A human readable description provided by the merchant that will be displayed in Payment Page.</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Description of payment</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Options</strong><br />
	<span class="text-muted small">
				
				<a class="type-details in" href="#Common_Models_Data_PaymentOptions">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Specific payment options</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "RestApi_Models_Data_PaymentWithoutOptions"</h2>
				<table class="table" id="RestApi_Models_Data_PaymentWithoutOptions">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Amount</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				
				<a class="type-details in" href="#Common_Models_Data_AmountWithoutZero">object</a>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Amount data (currency, value, etc.)</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>OrderId</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Unambiguous order identifier defined by the merchant / shop. This identifier might be used as reference later on.</div>
	<i class="small text-muted">
Id[1..80]<br />
				    <span>Example: <code>c52ad18472354511ab2c33b59e796901</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">A human readable description provided by the merchant that will be displayed in Payment Page.</div>
	<i class="small text-muted">
Utf8[1..100]<br />
				    <span>Example: <code>Description of payment</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "RestApi_Models_Data_RegisterAlias"</h2>
				<table class="table" id="RestApi_Models_Data_RegisterAlias">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>IdGenerator</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id generator to be used by Saferpay.</div>
	<i class="small text-muted">
Possible values: RANDOM.<br />
				    <span>Example: <code>RANDOM</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "RestApi_Models_Feature"</h2>
				<table class="table" id="RestApi_Models_Feature">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the feature</div>
	<i class="small text-muted">
				    <span>Example: <code>SAFERPAY_EXAMPLE</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DisplayName</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Display name of the feature</div>
	<i class="small text-muted">
				    <span>Example: <code>Saferpay Example</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "RestApi_Models_LicensePackage"</h2>
				<table class="table" id="RestApi_Models_LicensePackage">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Id</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Id of the package</div>
	<i class="small text-muted">
				    <span>Example: <code>SAFERPAY_EXAMPLE</code></span>
	</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>DisplayName</strong><br />
	<span class="text-muted small">
			<span>
				<span class="text-mandatory">mandatory</span>,
			</span>
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Display name of the package</div>
	<i class="small text-muted">
				    <span>Example: <code>Saferpay Example</code></span>
	</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "RestApi_Models_PaymentMethodInfo"</h2>
				<table class="table" id="RestApi_Models_PaymentMethodInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PaymentMethod</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the payment method</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Currencies</strong><br />
	<span class="text-muted small">
				array of strings
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Array of strings representing all the supported currencies for the payment method</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LogoUrl</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The logo of the payment method as url</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "RestApi_Models_TerminalResult"</h2>
				<table class="table" id="RestApi_Models_TerminalResult">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>TerminalId</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The Id of the terminal</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Type</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The type of the terminal</div>
	<i class="small text-muted">
Possible values: ECOM, SPG, MPO.<br />
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Description</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Description of the terminal</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>PaymentMethods</strong><br />
	<span class="text-muted small">
				
				<span>array of <a class="type-details in" href="#RestApi_Models_PaymentMethodInfo">object</a>s</span>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Array of payment methods that are available for the terminal</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>Wallets</strong><br />
	<span class="text-muted small">
				
				<span>array of <a class="type-details in" href="#RestApi_Models_WalletInfo">object</a>s</span>
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Array of wallets that are available for the terminal</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>
			<h2>Container "RestApi_Models_WalletInfo"</h2>
				<table class="table" id="RestApi_Models_WalletInfo">
					<tbody>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>WalletName</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">Name of the wallet</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
							<tr>
								<td class="col-sm-4 text-right">
	<strong>LogoUrl</strong><br />
	<span class="text-muted small">
				string
	</span>
</td>
<td class="col-sm-8">
	<div style="padding-bottom: 10px">The logo of the wallet as url</div>
	<i class="small text-muted">
			</i>
</td>
							</tr>
					</tbody>
				</table>

</div>
