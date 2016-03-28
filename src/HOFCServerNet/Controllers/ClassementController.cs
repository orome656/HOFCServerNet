using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Services;
using HOFCServerNet.ViewModels.Classement;

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

        // GET: /<controller>/equipe
        public IActionResult Index(string id)
        {
            ClassementViewModel viewModel = new ClassementViewModel();
            viewModel.Classements = Service.GetByCategory(id);
            return View(viewModel);
        }
    }
}
