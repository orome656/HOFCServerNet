using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public class Params
    {
        [JsonProperty(PropertyName = "SEASON_MATCHS_COUNT_EQUIPE1")]
        public int NbMatchEquipe1 { get; set; }
        [JsonProperty(PropertyName = "SEASON_MATCHS_COUNT_EQUIPE2")]
        public int NbMatchEquipe2 { get; set; }
        [JsonProperty(PropertyName = "SEASON_MATCHS_COUNT_EQUIPE3")]
        public int NbMatchEquipe3 { get; set; }
    }
}
