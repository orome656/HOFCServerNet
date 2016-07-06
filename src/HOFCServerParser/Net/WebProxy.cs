using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace HOFCServerParser.Net
{
    public class WebProxy : IWebProxy
    {
        public ICredentials Credentials { get; set; }

        public Uri GetProxy(Uri destination)
        {
            return new Uri(Environment.GetEnvironmentVariable("HTTP_PROXY"));
        }

        public bool IsBypassed(Uri host)
        {
            if (Environment.GetEnvironmentVariable("HTTP_PROXY") != null)
                return false;
            else
                return true;
        }
    }
}
