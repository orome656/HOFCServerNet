﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Models;
using HOFCServerNet.Repositories;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    public class ActuController : Controller
    {
        public ActusRepository Repository { get; set; }
        
        public ActuController(ActusRepository _actusRepository)
        {
            Repository = _actusRepository;
        }
        
        // GET: api/values
        [HttpGet]
        public IEnumerable<Actu> Get()
        {
            return Repository.GetAll();
        }
    }
}
