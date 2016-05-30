using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using HOFCServerNet.Services;
using HOFCServerNet.ViewModels.Vote;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    /// <summary>
    /// Permet de gérer les votes 
    /// </summary>
    [Route("api/[controller]")]
    public class VotesController : Controller
    {
        public VoteService Service { get; set; }

        public VotesController(VoteService service)
        {
            Service = service;
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
        public void Post([FromBody]string value)
        {
            // TODO not implemented
        }

        /// <summary>
        /// Permet de mettre a jour un vote
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        [HttpPut("{id}")]
        [Authorize]
        public void Put(int id, [FromBody]string value)
        {
            // TODO not implemented
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
        }
    }
}
