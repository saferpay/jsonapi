# <a name="encoding"></a>Content Encoding

`UTF-8` must be used for text encoding (there are restrictions on allowed characters for specific fields though).

`Content-Type` and `Accept` headers should be set to `application/json` for server-to-server calls. Redirects use the standard browser types.

--->>>

HTTP Headers:

`Content-Type: application/json; charset=utf-8`

`Accept: application/json`

<<<---