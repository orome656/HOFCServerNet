using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.Data.Models;
using HOFCServerNet.Services;
using System.Globalization;
using HOFCServerNet.ResourceModels;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    /// <summary>
    /// Permet la gestion des matchs
    /// </summary>
    [Route("api/matchs")]
    public class MatchController : Controller
    {
        private MatchService _matchService;
        private CompositionService _compoService;
        
        /// <summary>
        /// Default constuctor
        /// </summary>
        /// <param name="service"></param>
        /// <param name="compoService"></param>
        public MatchController(MatchService service, CompositionService compoService)
        {
            _matchService = service;
            _compoService = compoService;
        }

        /// <summary>
        /// Retourne la liste de l'ensemble des matchs
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Match> Get() => _matchService.GetAll();

        /// <summary>
        /// Permet de récupérer un match grâce a son identifiant
        /// </summary>
        /// <param name="id">Identifiant du match</param>
        /// <returns>Liste de matchs</returns>
        [HttpGet("{id}")]
        public Match Get(int id) => _matchService.GetMatchById(id);

        /// <summary>
        /// Retourne la liste des matchs d'une équipe
        /// </summary>
        /// <param name="equipe">identifiant de l'équipe</param>
        /// <returns>Liste de matchs</returns>
        [HttpGet("team/{equipe}")]
        public List<Match> Get(string equipe) => _matchService.GetMatchsForHOFCByCategory(equipe);
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="match"></param>
        [HttpPatch("/matchs/{id}")]
        public void PartialUpdate(int id, [FromBody]MatchDetailsResourceModel match) { }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        [HttpPost("/matchs/{id}/votes")]
        public void PostVote(int id) { }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="idVote"></param>
        [HttpPost("/matchs/{id}/votes/{idVote}")]
        public void DeleteVote(int id, int idVote) { }
        
        /// <summary>
        /// Permet de récupérer la liste des matchs d'une semaine
        /// </summary>
        /// <param name="date">identifiant de la semaine</param>
        /// <returns>Liste de matchs</returns>
        [HttpGet("week/{date}")]
        public List<Match> GetForWeek(string date) => _matchService.GetMatchForHOFCByWeek(DateTime.ParseExact(date, "yyyy-MM-dd", CultureInfo.InvariantCulture));
    }
}
