using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.Services;
using HOFCServerNet.ViewModels.Stat;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    public class StatController : Controller
    {
        public MatchService MatchService { get; set; }
        public StatService StatService { get; set; }
        public JoueurService JoueurService { get; set; }

        public StatController(MatchService _matchService,
                              StatService _statService,
                              JoueurService _joueurService)
        {
            this.MatchService = _matchService;
            this.StatService = _statService;
            this.JoueurService = _joueurService;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            IndexStatViewModel viewModel = new IndexStatViewModel();

            viewModel.Stats = StatService.GetSeasonStat();
            viewModel.Matchs = MatchService.GetHOFCPastMatch();

            return View(viewModel);
        }

        [HttpGet]
        public IActionResult Match(int id)
        {
            MatchStatViewModel viewModel = new MatchStatViewModel();

            viewModel.Stats = StatService.GetStatsForMatch(id);
            viewModel.Joueurs = JoueurService.GetAllForMatch(id);
            viewModel.Match = MatchService.GetMatchById(id);

            return View(viewModel);
        }


        [HttpPost]
        [Authorize(Roles = "Contributor", ActiveAuthenticationSchemes = "ApplicationCookie")]
        public IActionResult Match(MatchStatViewModel viewModel)
        {
            StatService.SaveStat(viewModel);

            return RedirectToAction("Match");
        }
    }
}
