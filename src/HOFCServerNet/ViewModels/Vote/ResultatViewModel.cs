using HOFCServerNet.Data.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.ViewModels.Vote
{
    public class ResultatViewModel
    {
        public List<VoteSum> Results { get; set; }

    }

    public class VoteSum
    {
        public int Nb { get; set; }

        public int JoueurId { get; set; }
        public virtual Data.Models.Joueur Joueur { get; set; }

        public TypeVote TypeVote { get; set; }
    }
}
