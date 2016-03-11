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
        [Key]
        [JsonProperty(PropertyName = "nom")]
        public string Nom { get; set; }
        [JsonProperty(PropertyName = "categorie")]
        public string Categorie { get; set; }
    }
}
