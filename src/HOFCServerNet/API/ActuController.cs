using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.Data.Models;
using HOFCServerNet.Services;
using NLog;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    /// <summary>
    /// Gére les actualités
    /// </summary>
    [Route("api/actus")]
    public class ActuController : Controller
    {
        private static Logger Logger = LogManager.GetLogger("HOFCServerNet.API.ActuController");
        private ActuService _service;
        
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="service"></param>
        public ActuController(ActuService service)
        {
            _service = service;
        }
        
        /// <summary>
        /// Retourne l'ensemble des actualités
        /// </summary>
        /// <returns>Liste d'actualités</returns>
        [HttpGet]
        public IEnumerable<Actu> Get()
        {
            return _service.GetAll();
        }

        /// <summary>
        /// Retourne les détails sur une actu
        /// </summary>
        /// <param name="id">Identifiant de l'actualité</param>
        /// <returns>Détails d'une actu</returns>
        [HttpGet("{id}")]
        public Actu Get(int id) {
            return _service.Get(id);
        }
    }
}
