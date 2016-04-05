using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Services;
using HOFCServerNet.ViewModels.Composition;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    public class CompositionController : Controller
    {
        public MatchService Service { get; set; }
        public CompositionService CompoService { get; set; }
        public JoueurService JoueurService { get; set; }

        public CompositionController(MatchService _service,
                                    CompositionService _compoService,
                                    JoueurService _joueurService)
        {
            Service = _service;
            CompoService = _compoService;
            JoueurService = _joueurService;
        }

        // GET: /<controller>/
        // Permet d'afficher l'ensemble des matchs futur pour configurer une composition
        public IActionResult Index()
        {
            IndexViewModel viewModel = new IndexViewModel();

            viewModel.Matchs = Service.GetMatchsForHOFC();

            return View(viewModel);
        }

        //Permet d'afficher et de configurer la composition d'un match
        [HttpGet]
        public IActionResult Details(int id)
        {
            DetailsCompoViewModel viewModel = new DetailsCompoViewModel();

            viewModel.Compositions = CompoService.GetJoueursForCompoEdit(id);
            viewModel.PostesPossibles = CompoService.GetPostes();
            viewModel.Match = new Data.Models.Match();
            viewModel.Match.Id = id;

            return View(viewModel);
        }

        [HttpPost]
        public IActionResult Details(DetailsCompoViewModel viewModel)
        {
            CompoService.SaveComposition(viewModel.Match.Id,viewModel.Compositions);

            return RedirectToAction("Details");
        }
    }
}
