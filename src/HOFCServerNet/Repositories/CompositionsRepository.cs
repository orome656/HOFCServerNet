using HOFCServerNet.APIModels;
using HOFCServerNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Repositories
{
    public class CompositionsRepository
    {
        public void SaveComposition(APIModels.Composition compo)
        {
            using(var bddContext = new BddContext())
            {
                Models.Composition compoBdd = bddContext.Compositions
                                                        .Where(c => c.Match.Id == compo.IdMatch && c.Joueur.Id == compo.IdJoueur)
                                                        .First();
                if(compoBdd != null && compoBdd.Poste.Nom != compo.NomPoste)
                {
                    Poste poste = bddContext.Postes.Where(p => p.Nom == compo.NomPoste).First();
                    if(poste != null)
                    {
                        compoBdd.Poste = poste;
                        bddContext.SaveChanges();
                    }

                } 
                else
                {

                }
            }
        }
    }
}
