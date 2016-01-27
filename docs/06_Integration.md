The JSON API is a modern and lightweight interface, that can be used with all shop 
systems and all programming languages. Only a few steps are neccessary to integrate 
your only shop with Saferpay. The proceeding is mostly as follows:

1. Initialize via secure server-to-server call
2. Integrate iframe to redirect your customer
3. Authorize/ assert customer interaction via secure server-to-server call

In secure server-to-server calls you have to submit a JSON request containing 
you processing instructions to the defined URLs. The URL and the JSON structure 
varies depening on the action/resource you want to call. For further details check 
the description of resources below.

Server-to-server calls are a secure way to submit and gather data. Hence, a server-to-server 
call should always follow after the customer returns back to the shop, to gather 
information about the outcome of e.g. 3D Secure.