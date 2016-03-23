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
    public class ActuController : Controller
    {
        private ActuService Service { get; set; }
        public ActuController(ActuService _service)
        {
            Service = _service;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            List<Actu> actus = Service.GetAll();
            ViewData["actus"] = actus;
            return View(actus);
        }
    }
}
