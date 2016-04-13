using HOFCServerNet.Data.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.ViewModels.Vote
{
    public class VoteMatchViewModel
    {
        public int MatchId { get; set; }
        public string Competition { get; set; }
        public string Equipe1 { get; set; }
        public string Equipe2 { get; set; }
        public DateTime Date { get; set; }
        public StatutVote Statut { get; set; }

    }
}
