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
    public class MatchController : Controller
    {
        [FromServices]
        public MatchsRepository Repository { get; set; }
        // GET: api/values

        public MatchController(MatchsRepository _matchsRepository)
        {
            Repository = _matchsRepository;
        }

        [HttpGet]
        public IEnumerable<Match> Get()
        {
            return Repository.GetAll();
        }

        // GET api/values/5
        [HttpGet("{categorie}")]
        public List<Match> Get(string categorie)
        {
            return Repository.GetMatchByCategory(categorie);
        }
    }
}
