using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using HOFCServerNet.Data.Utils;

namespace HOFCServerNet.Data.Enums
{
    public enum TypeVote: int
    {
        [DisplayText("Meilleur Joueur")]
        TOP = 1,
        [DisplayText("Flop")]
        DOWN = 2
    }
}
