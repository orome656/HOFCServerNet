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
    /// Permet de gérer les actualités
    /// </summary>
    [Route("api/[controller]")]
    public class ActuController : Controller
    {
        private static Logger Logger = LogManager.GetLogger("HOFCServerNet.API.ActuController");
        private ActuService Service { get; set; }
        
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="_service"></param>
        public ActuController(ActuService _service)
        {
            Service = _service;
        }
        
        /// <summary>
        /// Retourne l'ensemble des actualités
        /// </summary>
        /// <returns>Liste d'actualités</returns>
        [HttpGet]
        public IEnumerable<Actu> Get()
        {
            Logger.Info("Start Calling Actu Web API");
            List<Actu> actus = Service.GetAll();
            Logger.Info("End Calling Actu Web API");
            return actus;
        }
    }
}
