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
    /// Permet de gérer les classements
    /// </summary>
    [Route("api/[controller]")]
    public class ClassementController : Controller
    {
        private ClassementService Service { get; set; }

        public ClassementController(ClassementService _service)
        {
            Service = _service;
        }

        /// <summary>
        /// Retourne l'ensemble des classements
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Classement> Get()
        {
            return Service.GetAll();
        }
        
        /// <summary>
        /// Permet de récupérer le classement d'une catégorie (Ex: equipe1, equipe2)
        /// </summary>
        /// <param name="categorie"></param>
        /// <returns></returns>
        [HttpGet("{categorie}")]
        public IEnumerable<Classement> Get(string categorie)
        {
            return Service.GetByCategory(categorie);
        }
    }
}
