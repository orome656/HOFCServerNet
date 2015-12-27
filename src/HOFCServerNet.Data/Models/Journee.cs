using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Models
{
    public class Journee
    {
        [JsonIgnore]
        public int Id { get; set; }
        [JsonIgnore]
        public string Titre { get; set; }
        [JsonProperty(PropertyName = "equipe1")]
        public string Equipe1 { get; set; }
        [JsonProperty(PropertyName = "equipe2")]
        public string Equipe2 { get; set; }
        [JsonProperty(PropertyName = "score1")]
        public int? Score1 { get; set; }
        [JsonProperty(PropertyName = "score2")]
        public int? Score2 { get; set; }
        [JsonProperty(PropertyName = "date")]
        public DateTime Date { get; set; }
        [JsonProperty(PropertyName = "idJournee")]
        public int IdJournee { get; set; }
        [JsonIgnore]
        public string Categorie { get; set; }
        [JsonProperty(PropertyName = "infos")]
        public string InfosId { get; set; }
    }
}
