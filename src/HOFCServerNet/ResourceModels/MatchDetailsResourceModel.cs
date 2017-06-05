using HOFCServerNet.Data.Enums;
using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.ResourceModels
{
    public class MatchDetailsResourceModel: Match
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

        public StatutVote Statut { get; set; }
        public List<JoueurMatchResourceModel> Joueurs { get; set; }
    }
}
