using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Parsers;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    public class ParsePageController : Controller
    {
        // GET api/values/{url}
        [HttpPost]
        public string Post(string url)
        {
            if(!string.IsNullOrWhiteSpace(url) && url.Contains("en-image"))
            {
                return JsonConvert.SerializeObject(DiaporamaParser.Parse(url));
            }
            else if(!string.IsNullOrWhiteSpace(url))
            {
                return JsonConvert.SerializeObject(ArticleParser.Parse(url));
            }
            return null;
        }
    }
}
