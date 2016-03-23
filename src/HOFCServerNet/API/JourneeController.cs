using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Data.Models;
using Microsoft.Data.Entity;
using HOFCServerNet.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    public class JourneeController : Controller
    {
        public MatchService Service { get; set; }

        public JourneeController(MatchService _service)
        {
            Service = _service;
        }

        // GET api/values/equipe1/1
        [HttpGet("{categorie}/{numJournee}")]
        public List<Match> Get(string categorie, int numJournee)
        {
            return Service.GetMatchByCategoryAndJournee(categorie, numJournee);
        }
    }
}
