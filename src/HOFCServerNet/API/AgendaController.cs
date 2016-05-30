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
    /// <summary>
    /// Permet de gérer les agendas
    /// </summary>
    [Route("api/[controller]")]
    [Obsolete("Should be remove", true)]
    public class AgendaController : Controller
    {
        private MatchService Service { get; set; }
        
        public AgendaController(MatchService _service)
        {
            Service = _service;
        }

        // GET api/values/2015-08-17
        [HttpGet("{semaine}")]
        public List<Match> Get(string semaine)
        {
            var date = DateTime.Parse(semaine);
            var dateEnd = date.AddDays(7);
            return Service.GetMatchBetweenDates(date, dateEnd);
        }
    }
}
