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
    public class JourneeController : Controller
    {
        [FromServices]
        public BddContext BddContext { get; set; }

        // GET api/values/equipe1/1
        [HttpGet("{categorie}/{numJournee}")]
        public List<Journee> Get(string categorie, int numJournee)
        {
            return BddContext.Journees.Where(item => item.Categorie.Equals(categorie) && item.IdJournee.Equals(numJournee)).ToList();
        }
    }
}
