using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.Data.Models;
using HOFCServerNet.Services;

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
        public IEnumerable<Match> Get()
        {
            return _matchService.GetAll();
        }

        /// <summary>
        /// Permet de récupérer un match grâce a son identifiant
        /// </summary>
        /// <param name="id">Identifiant du match</param>
        /// <returns>Liste de matchs</returns>
        [HttpGet("{id}")]
        public Match Get(int id)
        {
            return _matchService.GetMatchById(id);
        }

        /// <summary>
        /// Permet de récupérer la liste des matchs d'une equipe
        /// </summary>
        /// <param name="equipe">identifiant de l'équipe</param>
        /// <returns>Liste de matchs</returns>
        [HttpGet("team/{equipe}")]
        public List<Match> Get(string equipe)
        {
            return _matchService.GetMatchsForHOFCByCategory(equipe);
        }

        /// <summary>
        /// Permet de mettre a jour le statut du vote pour ce match
        /// </summary>
        /// <param name="id"></param>
        [HttpPatch]
        [Route("{id}/vote-status")]
        public void OpenVote(int id)
        {
            // TODO
        }

        /// <summary>
        /// Permet d'ajouter une nouvelle compo sur un match
        /// </summary>
        [HttpPost]
        [Route("{id}/compos")]
        public void CreateCompo()
        {
            // TODO
        }
    }
}
