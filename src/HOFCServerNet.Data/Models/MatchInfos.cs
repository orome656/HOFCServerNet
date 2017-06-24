using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public class MatchInfos
    {
        [Key]
        public string Id { get; set; }

        public int MatchId { get; set; }

        [JsonProperty(PropertyName = "nom")]
        public string Nom { get; set; }
        [JsonProperty(PropertyName = "adresse")]
        public string Adresse { get; set; }
        [JsonProperty(PropertyName = "ville")]
        public string Ville { get; set; }

        [JsonProperty(PropertyName = "arbitres")]
        [NotMapped]
        public List<string> Arbitres { get; set; } = new List<string>();

        [JsonIgnore]
        public string ArbitresString {
            get { return string.Join(";", Arbitres); }
            set { Arbitres = value.Split(';').ToList(); }
        }
    }
}
