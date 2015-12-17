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
    public class ClassementController : Controller
    {
        [FromServices]
        public BddContext BddContext { get; set; }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Classement> Get()
        {
            return BddContext.Classements
                             .OrderByDescending(item => item.Points)
                             .ThenByDescending(item => item.Difference)
                             .ToList();
        }
    }
}
