﻿using HOFCServerNet.Data.Converters;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    
    public class Classement: IModel
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        
        [JsonProperty(PropertyName = "nom")]
        public string Equipe { get; set; }

        [JsonProperty(PropertyName = "joue")]
        public int Joue { get; set; }

        [JsonProperty(PropertyName = "points")]
        public int Points { get; set; }

        [JsonProperty(PropertyName = "victoire")]
        public int Victoire { get; set; }

        [JsonProperty(PropertyName = "nul")]
        public int Nul { get; set; }

        [JsonProperty(PropertyName = "defaite")]
        public int Defaite { get; set; }

        [JsonProperty(PropertyName = "bp")]
        public int Bp { get; set; }

        [JsonProperty(PropertyName = "bc")]
        public int Bc { get; set; }

        [JsonProperty(PropertyName = "diff")]
        public int Difference { get; set; }

        [JsonIgnore]
        public string Categorie { get; set; }

        [JsonProperty(PropertyName = "competition")]
        public Competition Competition { get; set; }

        public override string ToString()
        {
            return "|" + Equipe + "|" + Joue + "|" + Points + "|" + Victoire + "|" + Nul + "|" + Defaite + "|" + Bp + "|" + Bc + "|" + Difference + "|";
        }
    }
}
