using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.ViewModels.Journee;
using HOFCServerNet.Services;
using HOFCServerNet.Data.Constants;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    public class JourneeController : Controller
    {
        public MatchService Service { get; set; }

        public JourneeController(MatchService _service)
        {
            Service = _service;
        }
        // GET: /<controller>/
        public IActionResult Index(string equipe, int idJournee)
        {
            JourneeViewModel viewModel = new JourneeViewModel();
            viewModel.Categorie = equipe;
            viewModel.IdJournee = idJournee;
            viewModel.Matchs = Service.GetMatchByCategoryAndJournee(equipe, idJournee);
            if("equipe1".Equals(equipe))
            {
                viewModel.NbMatchs = AppConstants.NbMatchEquipe1;
            }
            else if("equipe2".Equals(equipe))
            {
                viewModel.NbMatchs = AppConstants.NbMatchEquipe2;
            }
            else if ("equipe3".Equals(equipe))
            {
                viewModel.NbMatchs = AppConstants.NbMatchEquipe3;
            }
            return View(viewModel);
        }
    }
}
