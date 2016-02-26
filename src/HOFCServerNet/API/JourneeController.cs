using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Models;
using Microsoft.Data.Entity;
using HOFCServerNet.Repositories;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    public class JourneeController : Controller
    {
        [FromServices]
        public MatchsRepository Repository { get; set; }

        // GET api/values/equipe1/1
        [HttpGet("{categorie}/{numJournee}")]
        public List<Match> Get(string categorie, int numJournee)
        {
            return Repository.GetMatchByCategoryAndJournee(categorie, numJournee);
        }
    }
}
