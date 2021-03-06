﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public class Actu: IModel
    {
        [JsonIgnore]
        [Key]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "postid")]
        public int PostId { get; set; }
        [JsonProperty(PropertyName = "titre")]
        public string Titre { get; set; }
        [JsonProperty(PropertyName = "texte")]
        public string Texte { get; set; }
        [JsonProperty(PropertyName = "url")]
        public string URL { get; set; }
        [JsonProperty(PropertyName = "image")]
        public string ImageURL { get; set; }
        [JsonProperty(PropertyName = "date")]
        public DateTime Date { get; set; }
        
        public string Contenu { get; set; }
        [NotMapped]
        public List<string> Photos { get; set; }

        [JsonIgnore]
        public string PhotosString
        {
            get { return Photos == null ? null : string.Join(";", Photos); }
            set { Photos = value?.Split(';').ToList(); }
        }

        public override string ToString()
        {
            return "|" + PostId + "|" + Titre + "|" + Texte + "|" + URL + "|" + ImageURL + "|" + Date + "|";
        }
    }
}
