using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Models
{
    public class MatchInfos
    {
        [JsonProperty(PropertyName = "nom")]
        public string Nom { get; set; }
        [JsonProperty(PropertyName = "adresse")]
        public string Adresse { get; set; }
        [JsonProperty(PropertyName = "ville")]
        public string Ville { get; set; }
        [JsonProperty(PropertyName = "arbitres")]
        public List<string> Arbitres { get; set; } = new List<string>();
    }
}
