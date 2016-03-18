using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Repositories;
using HOFCServerNet.Data.Models;
using Microsoft.AspNet.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    public class JoueurController : Controller
    {
        public JoueursRepository Repository { get; set; }

        public JoueurController(JoueursRepository _joueurRepository)
        {
            Repository = _joueurRepository;
        }

        // GET: api/values
        [HttpGet]
        public List<APIModels.Joueur> Get()
        {
            return Repository.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public APIModels.Joueur Get(int id)
        {
            return Repository.GetById(id);
        }

        // POST api/values
        [HttpPost]
        [Authorize(Roles = "Contributor")]
        public void Post([FromBody]APIModels.Joueur value)
        {
            Repository.Create(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        [Authorize(Roles = "Contributor")]
        public void Put(int id, [FromBody]APIModels.Joueur value)
        {
            Repository.Update(value);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Contributor")]
        public void Delete(int id)
        {
            Repository.Delete(id);
        }
    }
}
