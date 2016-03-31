using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Services;
using HOFCServerNet.Data.Models;
using HOFCServerNet.ViewModels.Actu;
using HOFCServerNet.Parsers;

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
            ActuViewModel viewModel = new ActuViewModel();

            viewModel.Actus = Service.GetAll();

            return View(viewModel);
        }

        public IActionResult Detail(string url)
        {
            if(!String.IsNullOrEmpty(url) && url.Contains("en-images"))
            {
                DiaporamaActuViewModel viewModel = new DiaporamaActuViewModel();
                viewModel.Urls = DiaporamaParser.Parse(url);
                return View("Diaporama", viewModel);
            }
            else if(!String.IsNullOrEmpty(url))
            {
                ArticleActuViewModel viewModel = new ArticleActuViewModel();
                Article article = ArticleParser.Parse(url);
                viewModel.Titre = article.Titre;
                viewModel.Contenu = article.Contenu;
                viewModel.Date = article.Date;

                return View("Article", viewModel);
            }
            return HttpNotFound();
        }
    }
}
