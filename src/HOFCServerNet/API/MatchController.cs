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
    public class MatchController : Controller
    {
        public MatchService Service { get; set; }
        // GET: api/values

        public MatchController(MatchService _service)
        {
            Service = _service;
        }

        [HttpGet]
        public IEnumerable<Match> Get()
        {
            return Service.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Match Get(int id)
        {
            return Service.GetMatchById(id);
        }
    }
}
