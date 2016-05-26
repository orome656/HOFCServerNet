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
    [Route("api/[controller]")]
    public class JoueurController : Controller
    {
        public JoueurService Service { get; set; }

        public JoueurController(JoueurService _service)
        {
            Service = _service;
        }

        // GET: api/values
        [HttpGet]
        public List<JoueurDetailsViewModel> Get()
        {
            return Service.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public JoueurDetailsViewModel Get(int id)
        {
            return Service.GetById(id);
        }

        // POST api/values
        [HttpPost]
        [Authorize(Roles = "Contributor")]
        public void Post([FromBody]JoueurDetailsViewModel value)
        {
            Service.Create(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        [Authorize(Roles = "Contributor")]
        public void Put(int id, [FromBody]JoueurDetailsViewModel value)
        {
            Service.Update(value);
        }

        // DELETE api/values/5
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
                return Ok();
            }
        }
    }
}
