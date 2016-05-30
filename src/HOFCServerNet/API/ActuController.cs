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
    /// Permet de gérer les actualités
    /// </summary>
    [Route("api/[controller]")]
    public class ActuController : Controller
    {
        public ActuService Service { get; set; }
        
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
            return Service.GetAll();
        }
    }
}
