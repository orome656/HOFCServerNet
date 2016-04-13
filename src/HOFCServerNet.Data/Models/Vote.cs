using HOFCServerNet.Data.Enums;
using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public class Vote
    {
        public int Id { get; set; }

        public int MatchId { get; set; }
        public virtual Match Match { get; set; }

        public int JoueurId { get; set; }
        public virtual Joueur Joueur { get; set; }

        public string UserId { get; set; }

        [Column("TypeVote")]
        public string TypeVoteString {
            get { return TypeVote.ToString(); }
            private set { TypeVote = EnumExtensions.ParseEnum<TypeVote>(value); }
        }

        [NotMapped]
        public TypeVote TypeVote { get; set; }
    }
}
