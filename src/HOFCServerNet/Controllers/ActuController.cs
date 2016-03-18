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
    public class ActuController : Controller
    {
        private ActusRepository Repository { get; set; }
        public ActuController(ActusRepository _actusRepository)
        {
            Repository = _actusRepository;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            List<Actu> actus = Repository.GetAll();
            ViewData["actus"] = actus;
            return View(actus);
        }
    }
}
