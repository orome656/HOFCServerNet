using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using HOFCServerNet.Services;
using HOFCServerNet.ViewModels.Vote;
using HOFCServerNet.Data.Models;
using Microsoft.AspNetCore.Identity;
using NLog;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    /// <summary>
    /// Permet de gérer les votes 
    /// </summary>
    [Route("api/votes")]
    public class VotesController : Controller
    {
        private VoteService _service { get; set; }
        private MatchService _matchService;
        private UserManager<ApplicationUser> _userManager;
        private Logger _logger = LogManager.GetLogger("HOFCServerNet.API.VotesController");

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="service"></param>
        /// <param name="mService"></param>
        /// <param name="userManager"></param>
        public VotesController(VoteService service, MatchService mService, UserManager<ApplicationUser> userManager)
        {
            _service = service;
            _matchService = mService;
            _userManager = userManager;
        }

        /// <summary>
        /// Permet de récupérer les votes d'un utilisateur pour un certain match
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        [Authorize]
        public List<Vote> Get(int id)
        {
            return _service.GetForUserAndMatch(_userManager.GetUserId(User), id);
        }

        /// <summary>
        /// Permet de récupérer le résultat des votes pour un match
        /// </summary>
        /// <param name="id">id du match</param>
        /// <returns></returns>
        // GET api/values/5
        [HttpGet("{id}/results")]
        [Authorize]
        public List<VoteSum> GetResults(int id)
        {
            return _service.GetResultsForMatch(id);
        }

        /// <summary>
        /// Permet d'ajouter un vote
        /// </summary>
        /// <param name="value"></param>
        [HttpPost]
        [Authorize]
        public StatusCodeResult Post([FromBody]List<Vote> value)
        {
            try
            {
                _service.SaveVotes(value, value.First().MatchId, _userManager.GetUserId(User));
                return Ok();
            }
            catch(Exception e)
            {
                _logger.Error(e, "Error while inserting vote data");
                return StatusCode(500);
            }
        }

        /// <summary>
        /// Permet de mettre a jour un vote pour un match
        /// </summary>
        /// <param name="id">Identifiant du match</param>
        /// <param name="value">Liste des votes</param>
        [HttpPut("{id}")]
        [Authorize]
        public StatusCodeResult Put(int id, [FromBody]List<Vote> value)
        {
            // TODO not implemented
            // TODO User can only edit his vote
            try
            {
                // Add not found code
                _service.SaveVotes(value, id, _userManager.GetUserId(User));
                return Ok();
            }
            catch (Exception e)
            {
                _logger.Error(e, "Error while updating vote data");
                return StatusCode(500);
            }
        }

        /// <summary>
        /// Permet de supprimer un vote
        /// </summary>
        /// <param name="id"></param>
        [HttpDelete("{id}")]
        [Authorize]
        public void Delete(int id)
        {
            // TODO not implemented
            _service.DeleteVotesForMatch(id, _userManager.GetUserId(User));
        }


        //-----------------------------------------------------------------------------
        //------------------------ Administration -------------------------------------
        //-----------------------------------------------------------------------------

        /// <summary>
        /// Permet d'ouvrir un vote
        /// </summary>
        /// <param name="idMatch">Indentifiant du match</param>
        [Route("~/api/VotesAdmin/{idMatch}/Open")]
        [Authorize(Roles = "Contributor")]
        [HttpGet]
        public void Open(int idMatch)
        {
            _matchService.ActivateVote(idMatch);
            // TODO retourner 404 si idMatch pas bon
        }

        /// <summary>
        /// Permet de fermer un vote
        /// </summary>
        /// <param name="idMatch"></param>
        [Route("~/api/VotesAdmin/{idMatch}/Close")]
        [Authorize(Roles = "Contributor")]
        [HttpGet]
        public void Close(int idMatch)
        {
            _matchService.CloseVote(idMatch);
            // TODO retourner 404 si idMatch pas bon
        }
    }
}
