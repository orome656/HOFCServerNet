using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Models;

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
        public IEnumerable<Calendrier> Get()
        {
            return BddContext.Calendriers.OrderBy(item => item.Date).ToList();
        }

        // GET: api/Calendrier/equipe1
        [HttpGet]
        public IEnumerable<Calendrier> Get(string categorie)
        {
            return BddContext.Calendriers.Where(item => item.Categorie.Equals(categorie)).OrderBy(item => item.Date).ToList();
        }
    }
}
