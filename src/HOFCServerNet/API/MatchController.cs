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
    [Route("api/[controller]")]
    public class MatchController : Controller
    {
        private MatchService Service { get; set; }
        
        /// <summary>
        /// Default constuctor
        /// </summary>
        /// <param name="_service"></param>
        public MatchController(MatchService _service)
        {
            Service = _service;
        }

        /// <summary>
        /// Retourne la liste de l'ensemble des matchs
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Match> Get()
        {
            return Service.GetAll();
        }

        /// <summary>
        /// Permet de récupérer un match grâce a son identifiant
        /// </summary>
        /// <param name="id">Identifiant du match</param>
        /// <returns>Liste de matchs</returns>
        [HttpGet("{id}")]
        public Match Get(int id)
        {
            return Service.GetMatchById(id);
        }
    }
}
