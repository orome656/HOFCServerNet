using HOFCServerNet.Data.Models;
using HOFCServerNet.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.API
{
    [Route("api/tactiques")]
    public class TactiqueController: Controller
    {
        private MatchService _matchService;

        public TactiqueController(MatchService matchService)
        {
            _matchService = matchService;
        }

        public List<Tactique> Get()
        {
            return _matchService.GetTactiques();
        }
    }
}
