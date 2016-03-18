using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Repositories;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    public class ClassementController : Controller
    {
        public ClassementRepository Repository { get; set; }

        public ClassementController(ClassementRepository _repository)
        {
            Repository = _repository;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            ViewData["classement"] = Repository.GetAllOrderedByCategory();
            return View();
        }
    }
}
