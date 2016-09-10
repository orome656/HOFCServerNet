using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.Services;
using HOFCServerNet.ViewModels.Vote;
using System.Security.Claims;
using HOFCServerNet.Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    public class VoteController : Controller
    {
        private VoteService VoteService { get; set; }
        private MatchService MatchService { get; set; }
        private JoueurService JoueurService { get; set; }
        private UserManager<ApplicationUser> UserManager { get; set; }

        public VoteController(VoteService _voteService, MatchService _matchService, JoueurService _joueurService, UserManager<ApplicationUser> _userManager)
        {
            VoteService = _voteService;
            MatchService = _matchService;
            JoueurService = _joueurService;
            UserManager = _userManager;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            VoteIndexViewModel viewModel = new VoteIndexViewModel();
            viewModel.Matchs = MatchService.GetVoteMatchs(User);
            return View(viewModel);
        }

        [HttpGet]
        [Authorize]
        public IActionResult Details(int id)
        {
            VoteDetailsViewModel viewModel = new VoteDetailsViewModel();
            viewModel.Votes = VoteService.GetForUserAndMatch(UserManager.GetUserId(User), id);
            viewModel.Joueurs = JoueurService.GetAllForMatch(id);
            viewModel.MatchId = id;
            return View(viewModel);
        }

        [HttpPost]
        [Authorize]
        public IActionResult Details(VoteDetailsViewModel viewModel)
        {
            VoteService.SaveVotes(viewModel.Votes, viewModel.MatchId, UserManager.GetUserId(User));

            return RedirectToAction("Details");
        }
        
        public IActionResult Resultat(int? id)
        {
            ResultatViewModel viewModel = new ResultatViewModel();
            viewModel.Results = VoteService.GetResultsForMatch(id);

            return View(viewModel);
        }

        [Authorize(Roles = "Contributor")]
        public IActionResult Add(int id)
        {
            MatchService.ActivateVote(id);

            return RedirectToAction("Index");
        }

        [Authorize(Roles = "Contributor")]
        public IActionResult Close(int id)
        {
            MatchService.CloseVote(id);

            return RedirectToAction("Index");
        }
    }
}
