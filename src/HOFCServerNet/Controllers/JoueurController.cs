using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Repositories;
using HOFCServerNet.ViewModels.Joueur;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    public class JoueurController : Controller
    {
        public JoueursRepository Repository { get; set; }

        public JoueurController(JoueursRepository _repository)
        {
            Repository = _repository;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            JoueurViewModel viewModel = new JoueurViewModel();

            viewModel.Joueurs = Repository.GetAll();

            return View(viewModel);
        }


        // GET: /<controller>/
        public IActionResult Details(int? id)
        {
            JoueurDetailsViewModel viewModel = new JoueurDetailsViewModel();
            if(id != null)
            {
                APIModels.Joueur joueur = Repository.GetById(id.Value);
                viewModel.Id = joueur.Id;
                viewModel.Nom = joueur.Nom;
                viewModel.Prenom = joueur.Prenom;
            }
            return View(viewModel);
        }

        //[Authorize(Roles = "Contributor")]
        [HttpPost]
        public IActionResult Details(JoueurDetailsViewModel JoueurDetails)
        {
            return View();
        }
    }
}
