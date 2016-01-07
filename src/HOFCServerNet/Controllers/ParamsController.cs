using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Data.Models;
using HOFCServerNet.Data.Constants;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    [Route("api/[controller]")]
    public class ParamsController : Controller
    {
        // GET: api/values
        [HttpGet]
        public Params Get()
        {
            return new Params()
            {
                NbMatchEquipe = AppConstants.NbMatchEquipe1,
                NbMatchEquipe1 = AppConstants.NbMatchEquipe1,
                NbMatchEquipe2 = AppConstants.NbMatchEquipe2,
                NbMatchEquipe3 = AppConstants.NbMatchEquipe3
            };
        }
    }
}
