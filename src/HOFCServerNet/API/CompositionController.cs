﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.ViewModels;
using HOFCServerNet.Services;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    /// <summary>
    /// Controlleur de gestion des compositions d'équipe
    /// </summary>
    [Route("api/[controller]")]
    public class CompositionController : Controller
    {
        private CompositionService _compoService { get; set; }

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="compoService"></param>
        public CompositionController(CompositionService compoService)
        {
            _compoService = compoService;
        }
        /// <summary>
        ///     Permet de récupérer la composition d'un match
        /// </summary>
        /// <param name="idMatch">id du match</param>
        /// <returns>Liste des postes pour chaque joueur</returns>
        // GET api/values/5
        [HttpGet("{idMatch}")]
        public List<CompositionViewModel> Get(int idMatch)
        {
            return _compoService.GetForMatch(idMatch);
        }

        /// <summary>
        /// Permet mettre a jour la composition d'un match
        /// </summary>
        /// <param name="value">Liste des joueurs associé a leur poste pour le match</param>
        [HttpPost]
        [Authorize(Roles = "Contributor")]
        public void Post([FromBody]List<CompositionViewModel> value)
        {
            _compoService.SaveComposition(value);
        }
        
        /// <summary>
        /// Permet de supprimer la composition d'un match
        /// </summary>
        /// <param name="id">L'id du match</param>
        [HttpDelete("{id}")]
        [Authorize(Roles = "Contributor")]
        public void Delete(int id)
        {
            _compoService.DeleteMatchComposition(id);
        }
    }
}
