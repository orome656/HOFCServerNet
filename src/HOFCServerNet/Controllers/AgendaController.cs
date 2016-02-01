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
    public class AgendaController : Controller
    {
        [FromServices]
        public BddContext BddContext { get; set; }

        // GET api/values/2015-08-17
        [HttpGet("{semaine}")]
        public List<Match> Get(string semaine)
        {
            var date = DateTime.Parse(semaine);
            var dateEnd = date.AddDays(7);
            var idSemaineBdd = date.ToString("ddMMyyyy");
            return BddContext.Matchs.Where(item => date.CompareTo(item.Date) <= 0 && date.CompareTo(item.Date) > 0).ToList();
        }
    }
}
