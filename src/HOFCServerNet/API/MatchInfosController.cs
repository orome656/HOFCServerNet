using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.Parsers;
using HOFCServerNet.Data.Models;
using System.Net;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    /// <summary>
    /// 
    /// </summary>
    [Route("api/[controller]")]
    public class MatchInfosController : Controller
    {
        /// <summary>
        /// Permet de récupérer les informations sur un match par son identifiant(site district)
        /// </summary>
        /// <param name="id">Identifiant du match sur le site du district</param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public MatchInfos Get(string id)
        {
            MatchInfos infos = MatchInfosParser.Parse(id);
            if(infos == null)
            {
                this.Response.StatusCode = 404;
                return null;
            } 
            else
            {
                return infos;
            }
        }
    }
}
