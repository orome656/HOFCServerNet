using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Services;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    public class ClassementController : Controller
    {
        public ClassementService Service { get; set; }

        public ClassementController(ClassementService _service)
        {
            Service = _service;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            ViewData["classement"] = Service.GetAllOrderedByCategory();
            return View();
        }
    }
}
