using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HOFCServerNet.Parsers;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    /// <summary>
    /// Permet de parser les informations d'une page
    /// </summary>
    [Route("api/[controller]")]
    public class ParsePageController : Controller
    {
        /// <summary>
        /// Parse la page pointée par l'url passée en paramètre
        /// </summary>
        /// <param name="url">URL de la page a parser</param>
        /// <returns>Les informations de la page sérialisées</returns>
        [HttpPost]
        public string Post([FromBody]string url)
        {
            if(!string.IsNullOrWhiteSpace(url) && url.Contains("en-image"))
            {
                return JsonConvert.SerializeObject(DiaporamaParser.Parse(url));
            }
            else if(!string.IsNullOrWhiteSpace(url))
            {
                return JsonConvert.SerializeObject(ArticleParser.Parse(url));
            }
            return null;
        }
    }
}
