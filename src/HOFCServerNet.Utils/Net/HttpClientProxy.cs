using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace HOFCServerNet.Utils.Net
{
    public class HttpClientProxy: HttpClient
    {
        public HttpClientProxy(): base(GetHandler())
        {
            
        }

        private static HttpClientHandler GetHandler()
        {
            var proxy = Environment.GetEnvironmentVariable("HTTP_PROXY");
            if (proxy != null)
            {
                HttpClientHandler clientHandler = new HttpClientHandler()
                {
                    Proxy = new WebProxy()
                };

                return clientHandler;

            }
            else
            {
                return new HttpClientHandler();
            }
        }
    }
}
