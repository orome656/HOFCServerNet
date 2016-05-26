using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.Services;
using HOFCServerNet.Data.Models;
using HOFCServerNet.ViewModels.Calendrier;

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
        public IActionResult Index(string id)
        {
            CalendrierViewModel viewModel = new CalendrierViewModel();
            viewModel.Calendriers = Service.GetMatchsForHOFCByCategory(id);
            return View(viewModel);
        }
    }
}
