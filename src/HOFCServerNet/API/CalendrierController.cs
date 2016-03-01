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
    public class CalendrierController : Controller
    {
        public MatchsRepository Repository { get; set; }

        public CalendrierController(MatchsRepository _matchsRepository)
        {
            Repository = _matchsRepository;
        }

        // GET: api/Calendrier
        [HttpGet]
        public IEnumerable<Match> Get()
        {
            return Repository.GetMatchsForHOFC();
        }

        // GET: api/Calendrier/equipe1
        [HttpGet("{categorie}")]
        public IEnumerable<Match> Get(string categorie)
        {
            return Repository.GetMatchsForHOFCByCategory(categorie);
        }
    }
}
