using HOFCServerNet.Data.Converters;
using HOFCServerNet.Data.Enums;
using HOFCServerNet.Data.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.ResourceModels
{
    public class MatchDetailsResourceModel
    {
        public MatchDetailsResourceModel(Match match)
        {
            this.Id = match.Id;
            this.Equipe1 = match.Equipe1;
            this.Equipe2 = match.Equipe2;
            this.Score1 = match.Score1;
            this.Score2 = match.Score2;
            this.Date = match.Date;
            this.IdJournee = match.IdJournee;
            this.Competition = match.Competition;
            this.InfosId = match.InfosId;
            this.VoteStatut = match.VoteStatut;
        }

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
        public StatutVote VoteStatutEnum { get { return (StatutVote)VoteStatut; } }

        [JsonIgnore]
        public int CompetitionId { get; set; }

        public string Message { get; set; }

        public StatutVote Statut { get; set; }
        public List<JoueurMatchResourceModel> Joueurs { get; set; }
    }
}
