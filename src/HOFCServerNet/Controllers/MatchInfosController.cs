using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Parsers;
using HOFCServerNet.Models;
using System.Web.Http;
using System.Net;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    [Route("api/[controller]")]
    public class MatchInfosController : Controller
    {
        // GET api/values/17730846
        [HttpGet("{id}")]
        public MatchInfos Get(string id)
        {
            MatchInfos infos = MatchInfosParser.Parse(id);
            if(infos == null)
            {
                // Il faut trouver comment retourner un code erreur ...
                return null;
            } 
            else
            {
                return MatchInfosParser.Parse(id);
            }
        }
    }
}
