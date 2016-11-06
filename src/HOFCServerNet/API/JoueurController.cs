using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.Services;
using HOFCServerNet.Data.Models;
using Microsoft.AspNetCore.Authorization;
using HOFCServerNet.ViewModels.Joueur;
using HOFCServerNet.Constants;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    /// <summary>
    /// Controlleur de gestion des joueurs
    /// </summary>
    [Route("api/joueurs")]
    public class JoueurController : Controller
    {
        private JoueurService _joueurService { get; set; }

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="service"></param>
        public JoueurController(JoueurService service)
        {
            _joueurService = service;
        }

        /// <summary>
        /// Retourne l'ensemble des joueurs
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public List<JoueurDetailsViewModel> Get()
        {
            return _joueurService.GetAll();
        }

        /// <summary>
        /// Permet de récupérer un joueur par son identifiant
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public JoueurDetailsViewModel Get(int id)
        {
            // TODO ajouter le code retour not found si nécessaire
            return _joueurService.GetById(id);
        }

        /// <summary>
        /// Permet de récupérer les joueurs présent lors d'un match
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("match/{id}")]
        public List<Joueur> GetMatch(int id)
        {
            // TODO ajouter le code retour not found si nécessaire
            return _joueurService.GetAllForMatch(id);
        }

        /// <summary>
        /// Créer un nouveau joueur
        /// </summary>
        /// <param name="value">Détails du joueur</param>
        [HttpPost]
        [Authorize(Roles = "Contributor")]
        public void Post([FromBody]JoueurDetailsViewModel value)
        {
            // TODO ajouter les codes retours
            _joueurService.Create(value);
        }

        /// <summary>
        /// Met a joueur les informations d'un joueur
        /// </summary>
        /// <param name="id">Identifiant du joueur</param>
        /// <param name="value">Information sur le joueur</param>
        [HttpPut("{id}")]
        [Authorize(Roles = "Contributor")]
        public void Put(int id, [FromBody]JoueurDetailsViewModel value)
        {
            // TODO ajouter les code retours
            _joueurService.Update(value);
        }

        /// <summary>
        /// Supprime un joueur grâce a son identifiant
        /// </summary>
        /// <param name="id">Identifiant du joueur</param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        [Authorize(Roles = "Contributor")]
        public IActionResult Delete(int id)
        {
            ServiceConstants.DELETE_STATUT statut = _joueurService.Delete(id);
            if(ServiceConstants.DELETE_STATUT.INCONNU.Equals(statut))
            {
                return NotFound();
            }
            else
            {
                return NoContent();
            }
        }
    }
}
