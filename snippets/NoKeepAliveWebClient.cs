using System;
using System.Net;

public class NoKeepAliveWebClient : WebClient
{
    protected override WebRequest GetWebRequest(Uri address)
    {
        var request = base.GetWebRequest(address) as HttpWebRequest;
        if (request != null)
        {
            request.KeepAlive = false;
        }
        return request;
    }
}
