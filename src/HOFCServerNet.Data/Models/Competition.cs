using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public class Competition: IModel
    {
        public int Id { get; set; }

        [JsonProperty(PropertyName = "nom")]
        public string Nom { get; set; }

        public string Saison { get; set; }

        [JsonProperty(PropertyName = "categorie")]
        public string Categorie { get; set; }
    }
}
