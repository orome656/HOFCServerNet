using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Services;
using HOFCServerNet.ViewModels.Vote;
using System.Security.Claims;
using HOFCServerNet.Data.Models;
using Microsoft.AspNet.Authorization;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    public class VoteController : Controller
    {
        private VoteService VoteService { get; set; }
        private MatchService MatchService { get; set; }
        private JoueurService JoueurService { get; set; }

        public VoteController(VoteService _voteService, MatchService _matchService, JoueurService _joueurService)
        {
            VoteService = _voteService;
            MatchService = _matchService;
            JoueurService = _joueurService;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            VoteIndexViewModel viewModel = new VoteIndexViewModel();
            viewModel.Matchs = MatchService.GetOpenedVoteMatch();
            return View(viewModel);
        }

        [HttpGet]
        [Authorize]
        public IActionResult Details(int id)
        {
            VoteDetailsViewModel viewModel = new VoteDetailsViewModel();
            viewModel.Votes = VoteService.GetForUserAndMatch(User.GetUserId(), id);
            viewModel.Joueurs = JoueurService.GetAllForMatch(id);
            viewModel.MatchId = id;
            return View(viewModel);
        }

        [HttpPost]
        [Authorize]
        public IActionResult Details(VoteDetailsViewModel viewModel)
        {
            VoteService.SaveVotes(viewModel.Votes, viewModel.MatchId, User.GetUserId());

            return RedirectToAction("Details");
        }
        
        public IActionResult Resultat(int? id)
        {
            ResultatViewModel viewModel = new ResultatViewModel();
            viewModel.Results = VoteService.GetResultsForMatch(id);

            return View(viewModel);
        }
    }
}
