using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.APIModels;
using HOFCServerNet.Repositories;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    public class CompositionController : Controller
    {
        public CompositionsRepository Repository { get; set; }

        public CompositionController(CompositionsRepository _compoRepository)
        {
            Repository = _compoRepository;
        }
        /// <summary>
        ///     Permet de récupérer la composition d'un match
        /// </summary>
        /// <param name="id">id du match</param>
        /// <returns>Liste des postes pour chaque joueur</returns>
        // GET api/values/5
        [HttpGet("{idMatch}")]
        public List<Composition> Get(int idMatch)
        {
            return Repository.GetForMatch(idMatch);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]List<Composition> value)
        {
            Repository.SaveComposition(value);
        }
        
        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
