using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Data.Models;
using HOFCServerNet.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    public class ActuController : Controller
    {
        public ActuService Service { get; set; }
        
        public ActuController(ActuService _service)
        {
            Service = _service;
        }
        
        // GET: api/values
        [HttpGet]
        public IEnumerable<Actu> Get()
        {
            return Service.GetAll();
        }
    }
}
