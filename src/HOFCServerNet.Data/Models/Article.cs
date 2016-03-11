using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public class Article
    {
        [JsonProperty(PropertyName = "title")]
        public string Titre { get; set; }
        [JsonProperty(PropertyName = "article")]
        public string Contenu { get; set; }
        [JsonProperty(PropertyName = "date")]
        public DateTime Date { get; set; }
    }
}
