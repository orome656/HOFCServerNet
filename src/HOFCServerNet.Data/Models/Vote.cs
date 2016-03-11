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
        public Match Match { get; set; }
        public Joueur Joueur { get; set; }

        [Column("TypeVote")]
        public string TypeVoteString {
            get { return TypeVote.ToString(); }
            private set { TypeVote = EnumExtensions.ParseEnum<TypeVote>(value); }
        }

        [NotMapped]
        public TypeVote TypeVote { get; set; }
    }
}
