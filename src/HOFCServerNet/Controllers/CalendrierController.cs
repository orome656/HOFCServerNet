using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Models;
using Microsoft.Data.Entity;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    [Route("api/[controller]")]
    public class CalendrierController : Controller
    {
        [FromServices]
        public BddContext BddContext { get; set; }

        // GET: api/Calendrier
        [HttpGet]
        public IEnumerable<Match> Get()
        {
            return BddContext.Matchs
                             .Where(item => item.Equipe1.Contains("HORGUES ODOS") || item.Equipe2.Contains("HORGUES ODOS")).OrderBy(item => item.Date)
                             .Include(item => item.Competition)
                             .ToList();
        }

        // GET: api/Calendrier/equipe1
        [HttpGet("{categorie}")]
        public IEnumerable<Match> Get(string categorie)
        {
            List<Match> matchs = BddContext.Matchs
                                           .Where(item => item.Competition != null && item.Competition.Categorie.Equals(categorie) && (item.Equipe1.Contains("HORGUES ODOS") || item.Equipe2.Contains("HORGUES ODOS")))
                                           .OrderBy(item => item.Date)
                                           .Include(item => item.Competition)
                                           .ToList();
            return matchs;
        }
    }
}
