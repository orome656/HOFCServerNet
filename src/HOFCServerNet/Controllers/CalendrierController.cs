using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Services;
using HOFCServerNet.Data.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    public class CalendrierController : Controller
    {
        public MatchService Service { get; set; }

        public CalendrierController(MatchService Service)
        {
            this.Service = Service;
        }

        // GET: /<controller>
        public IActionResult Index()
        {
            Dictionary<string,List<Match>> matchs = Service.GetAllGroupedByCategory();
            ViewData["matchs"] = matchs;
            return View();
        }
    }
}
