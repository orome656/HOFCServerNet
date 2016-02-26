using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Models;
using HOFCServerNet.Repositories;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.ContAPIrollers
{
    [Route("api/[controller]")]
    public class ClassementController : Controller
    {
        [FromServices]
        public ClassementRepository Repository { get; set; }

        // GET: api/Classement
        [HttpGet]
        public IEnumerable<Classement> Get()
        {
            return Repository.GetAll();
        }
        
        // GET: api/values
        [HttpGet("{categorie}")]
        public IEnumerable<Classement> Get(string categorie)
        {
            return Repository.GetByCategory(categorie);
        }
    }
}
