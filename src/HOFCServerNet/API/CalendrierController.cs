using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.Data.Models;
using HOFCServerNet.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    [Obsolete("Should be remove", true)]
    public class CalendrierController : Controller
    {
        private MatchService Service { get; set; }

        public CalendrierController(MatchService _service)
        {
            Service = _service;
        }

        // GET: api/Calendrier
        [HttpGet]
        public IEnumerable<Match> Get()
        {
            return Service.GetMatchsForHOFC();
        }

        // GET: api/Calendrier/equipe1
        [HttpGet("{categorie}")]
        public IEnumerable<Match> Get(string categorie)
        {
            return Service.GetMatchsForHOFCByCategory(categorie);
        }
    }
}
