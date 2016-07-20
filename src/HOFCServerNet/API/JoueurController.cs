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
        private JoueurService Service { get; set; }

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="_service"></param>
        public JoueurController(JoueurService _service)
        {
            Service = _service;
        }

        /// <summary>
        /// Retourne l'ensemble des joueurs
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public List<JoueurDetailsViewModel> Get()
        {
            return Service.GetAll();
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
            return Service.GetById(id);
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
            Service.Create(value);
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
            Service.Update(value);
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
            ServiceConstants.DELETE_STATUT statut = Service.Delete(id);
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
