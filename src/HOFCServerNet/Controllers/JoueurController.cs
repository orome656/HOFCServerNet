using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Services;
using HOFCServerNet.ViewModels.Joueur;
using Microsoft.AspNet.Authorization;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    public class JoueurController : Controller
    {
        public JoueurService Service { get; set; }

        public JoueurController(JoueurService _service)
        {
            Service = _service;
        }

        // GET: /<controller>/
        public IActionResult Index(string Message = null)
        {
            JoueurViewModel viewModel = new JoueurViewModel();
            viewModel.Message = Message;
            viewModel.Joueurs = Service.GetAll();

            return View(viewModel);
        }


        // GET: /<controller>/
        public IActionResult Details(int? id)
        {
            JoueurDetailsViewModel viewModel = new JoueurDetailsViewModel();
            if(id != null)
            {
                JoueurDetailsViewModel joueur = Service.GetById(id.Value);
                viewModel.Id = joueur.Id;
                viewModel.Nom = joueur.Nom;
                viewModel.Prenom = joueur.Prenom;
            }
            return View(viewModel);
        }

        [Authorize(Roles = "Contributor")]
        [HttpPost]
        public IActionResult Details(JoueurDetailsViewModel JoueurDetails)
        {
            JoueurDetailsViewModel joueur = new JoueurDetailsViewModel();
            if (JoueurDetails.Id != null)
            {
                joueur.Id = JoueurDetails.Id.Value;
            }
            joueur.Nom = JoueurDetails.Nom;
            joueur.Prenom = JoueurDetails.Prenom;

            Service.Update(joueur);
            return RedirectToAction(nameof(JoueurController.Index), "Joueur", new { Message = "Joueur modifié"});
        }

        [HttpGet]
        [Authorize(Roles = "Contributor")]
        public IActionResult Remove(int id)
        {
            Service.Delete(id);

            return RedirectToAction(nameof(JoueurController.Index));
        }
    }
}
