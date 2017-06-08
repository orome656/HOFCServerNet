using HOFCServerNet.Data.Converters;
using HOFCServerNet.Data.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public class Match: IModel
    {
        public int Id { get; set; }

        [JsonProperty(PropertyName = "equipe1")]
        public string Equipe1 { get; set; }

        [JsonProperty(PropertyName = "equipe2")]
        public string Equipe2 { get; set; }

        [JsonProperty(PropertyName = "score1")]
        public int? Score1 { get; set; }

        [JsonProperty(PropertyName = "score2")]
        public int? Score2 { get; set; }

        [JsonProperty(PropertyName = "date")]
        [JsonConverter(typeof(DateTimeConverter))]
        public DateTime Date { get; set; }

        [JsonProperty(PropertyName = "idJournee")]
        public int? IdJournee { get; set; }

        [JsonProperty(PropertyName = "infos")]
        public string InfosId { get; set; }
        
        [JsonProperty(PropertyName = "competition")]
        public Competition Competition { get; set; }
        
        public int VoteStatut { get; set; }

        [NotMapped]
        [JsonIgnore]
        public Enums.StatutVote VoteStatutEnum { get { return (Enums.StatutVote)VoteStatut; } }

        [JsonIgnore]
        public int CompetitionId { get; set; }

        public string Message { get; set; }
        
        public List<Composition> Compositions { get; set; }

        public string TactiqueId { get; set; }
        
        public Tactique Tactique { get; set; }

        public override string ToString()
        {
            return "|" + Equipe1 + "|" + Score1 + "|" + Score2 + "|" + Equipe2 + "|" + Date + "|";
        }
    }
}
