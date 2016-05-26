using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.ViewModels;
using HOFCServerNet.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    public class CompositionController : Controller
    {
        public CompositionService Service { get; set; }

        public CompositionController(CompositionService _service)
        {
            Service = _service;
        }
        /// <summary>
        ///     Permet de récupérer la composition d'un match
        /// </summary>
        /// <param name="id">id du match</param>
        /// <returns>Liste des postes pour chaque joueur</returns>
        // GET api/values/5
        [HttpGet("{idMatch}")]
        public List<CompositionViewModel> Get(int idMatch)
        {
            return Service.GetForMatch(idMatch);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]List<CompositionViewModel> value)
        {
            Service.SaveComposition(value);
        }
        
        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
