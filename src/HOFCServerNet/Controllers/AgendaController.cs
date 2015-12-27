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
        public List<Agenda> Get(string semaine)
        {
            var date = DateTime.Parse(semaine);
            var idSemaineBdd = date.ToString("ddMMyyyy");
            return BddContext.Agendas.Where(item => item.Semaine.Equals(idSemaineBdd)).ToList();
        }
    }
}
