using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.ViewModels.Vote
{
    public class VoteDetailsViewModel
    {
        public List<Data.Models.Vote> Votes { get; set; }
        public List<Data.Models.Joueur> Joueurs { get; set; }
        public int MatchId { get; set; }
    }
}
