using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Repositories;
using HOFCServerNet.Data.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    public class CalendrierController : Controller
    {
        public MatchsRepository Repository { get; set; }

        public CalendrierController(MatchsRepository _repository)
        {
            Repository = _repository;
        }

        // GET: /<controller>
        public IActionResult Index()
        {
            Dictionary<string,List<Match>> matchs = Repository.GetAllGroupedByCategory();
            ViewData["matchs"] = matchs;
            return View();
        }
    }
}
