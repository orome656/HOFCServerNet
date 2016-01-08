using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Parsers;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    [Route("api/[controller]")]
    public class ParsePageController : Controller
    {
        // GET api/values/{url}
        [HttpGet("{url}")]
        public List<string> Get(string url)
        {
            if(url.Contains("en-image"))
            {
                return DiaporamaParser.Parse(url);
            }
            else
            {
                return null;
            }
        }
    }
}
