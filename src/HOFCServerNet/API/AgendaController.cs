﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HOFCServerNet.Models;
using Microsoft.Data.Entity;
using HOFCServerNet.Repositories;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    public class AgendaController : Controller
    {
        public MatchsRepository Repository { get; set; }
        
        public AgendaController(MatchsRepository _matchsRepository)
        {
            Repository = _matchsRepository;
        }

        // GET api/values/2015-08-17
        [HttpGet("{semaine}")]
        public List<Match> Get(string semaine)
        {
            var date = DateTime.Parse(semaine);
            var dateEnd = date.AddDays(7);
            return Repository.GetMatchBetweenDates(date, dateEnd);
        }
    }
}