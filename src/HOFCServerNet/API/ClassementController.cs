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
    [Route("api/classements")]
    public class ClassementController : Controller
    {
        private ClassementService _classementService { get; set; }

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="classementService"></param>
        public ClassementController(ClassementService classementService)
        {
            _classementService = classementService;
        }

        /// <summary>
        /// Retourne l'ensemble des classements
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Classement> Get()
        {
            return _classementService.GetAll();
        }
        
        /// <summary>
        /// Permet de récupérer le classement d'une catégorie (Ex: equipe1, equipe2)
        /// </summary>
        /// <param name="categorie"></param>
        /// <returns></returns>
        [HttpGet("{categorie}")]
        public IEnumerable<Classement> Get(string categorie)
        {
            return _classementService.GetByCategory(categorie);
        }
    }
}
