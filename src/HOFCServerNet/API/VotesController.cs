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

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    /// <summary>
    /// Permet de gérer les votes 
    /// </summary>
    [Route("api/[controller]")]
    public class VotesController : Controller
    {
        private VoteService Service { get; set; }
        private MatchService MatchService;
        private UserManager<ApplicationUser> UserManager;

        public VotesController(VoteService service, MatchService mService, UserManager<ApplicationUser> userManager)
        {
            Service = service;
            MatchService = mService;
            UserManager = userManager;
        }

        /// <summary>
        /// Permet de récupérer le résultat des votes pour un match
        /// </summary>
        /// <param name="id">id du match</param>
        /// <returns></returns>
        // GET api/values/5
        [HttpGet("{id}")]
        [Authorize]
        public List<VoteSum> Get(int id)
        {
            return Service.GetResultsForMatch(id);
        }

        /// <summary>
        /// Permet d'ajouter un vote
        /// </summary>
        /// <param name="value"></param>
        [HttpPost]
        [Authorize]
        public void Post([FromBody]List<Vote> value)
        {
            // TODO Add return code ?
            Service.SaveVotes(value, value.First().MatchId, UserManager.GetUserId(User));
        }

        /// <summary>
        /// Permet de mettre a jour un vote pour un match
        /// </summary>
        /// <param name="id">Identifiant du match</param>
        /// <param name="value">Liste des votes</param>
        [HttpPut("{id}")]
        [Authorize]
        public void Put(int id, [FromBody]List<Vote> value)
        {
            // TODO not implemented
            // TODO User can only edit his vote
            Service.SaveVotes(value, id, UserManager.GetUserId(User));
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
            Service.DeleteVotesForMatch(id, UserManager.GetUserId(User));
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
        public void Open(int idMatch)
        {
            MatchService.ActivateVote(idMatch);
            // TODO retourner 404 si idMatch pas bon
        }

        /// <summary>
        /// Permet de fermer un vote
        /// </summary>
        /// <param name="idMatch"></param>
        [Route("~/api/VotesAdmin/{idMatch}/Close")]
        [Authorize(Roles = "Contributor")]
        public void Close(int idMatch)
        {
            MatchService.CloseVote(idMatch);
            // TODO retourner 404 si idMatch pas bon
        }
    }
}
