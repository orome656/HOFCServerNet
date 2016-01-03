using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    [Route("api/[controller]")]
    public class MatchInfosController : Controller
    {
        private string InfosURL = "http://district-foot-65.fff.fr/competitions/php/competition/competition_match_detail_v2.php?o=1&t=1&ma_no=";

        // GET api/values/17730846
        [HttpGet("{id}")]
        public string Get(string id)
        {
            string completeUrl = InfosURL + id;
            //Do Parse here
            return "";
        }
    }
}
