using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Repositories;
using HOFCServerNet.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    public class JoueurController : Controller
    {
        [FromServices]
        public JoueursRepository Repository { get; set; }
        // GET: api/values
        [HttpGet]
        public List<Joueur> Get()
        {
            return Repository.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Joueur Get(int id)
        {
            return Repository.GetById(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Joueur value)
        {
            Repository.Create(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Joueur value)
        {
            Repository.Update(value);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Repository.Delete(id);
        }
    }
}
