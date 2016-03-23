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
    public class ClassementController : Controller
    {
        public ClassementService Service { get; set; }

        public ClassementController(ClassementService _service)
        {
            Service = _service;
        }

        // GET: api/Classement
        [HttpGet]
        public IEnumerable<Classement> Get()
        {
            return Service.GetAll();
        }
        
        // GET: api/values
        [HttpGet("{categorie}")]
        public IEnumerable<Classement> Get(string categorie)
        {
            return Service.GetByCategory(categorie);
        }
    }
}
