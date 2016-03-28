using HOFCServerNet.Constants;
using HOFCServerNet.Data.Models;
using HOFCServerNet.ViewModels.Joueur;
using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Services
{
    public class JoueurService
    {
        public List<JoueurDetailsViewModel> GetAll()
        {
            using(var bddContext = new BddContext())
            {
                List<JoueurDetailsViewModel> result = new List<JoueurDetailsViewModel>();
                List<Joueur> joueurs = bddContext.Joueurs.Include(item => item.JoueurPostes).ThenInclude(item => item.Poste).ToList();
                foreach(Joueur j in joueurs)
                {
                    result.Add(convertToAPIPlayer(j));
                }
                return result;
            }
        }

        public JoueurDetailsViewModel GetById(int id)
        {
            using (var bddContext = new BddContext())
            {
                return convertToAPIPlayer(bddContext.Joueurs
                                                   .Where(item => item.Id == id)
                                                   .Include(item => item.JoueurPostes)
                                                   .ThenInclude(item => item.Poste)
                                                   .First());
            }
        }

        public ServiceConstants.DELETE_STATUT Delete(int id)
        {
            using (var bddContext = new BddContext())
            {
                Joueur joueur = bddContext.Joueurs.Where(item => item.Id == id).FirstOrDefault();
                if (joueur != null)
                {
                    bddContext.Joueurs.Remove(joueur);
                    bddContext.SaveChanges();
                    return ServiceConstants.DELETE_STATUT.SUCCES;
                } 
                else
                {
                    return ServiceConstants.DELETE_STATUT.INCONNU;
                }
            }
        }

        public void Create(JoueurDetailsViewModel joueur)
        {
            using(var bddContext = new BddContext())
            {
                if(joueur.Id == 0 || !bddContext.Joueurs.Any(j => j.Id == joueur.Id))
                {
                    if (joueur.Id != 0)
                        joueur.Id = 0;
                    Joueur joueurBdd = convertToBddPlayer(joueur);
                    bddContext.Joueurs.Add(joueurBdd);
                    bddContext.SaveChanges();
                }
                else
                {
                    this.Update(joueur);
                    /*
                    Joueur joueurBdd = bddContext.Joueurs.First(j => j.Id == joueur.Id);
                    joueurBdd.Nom = joueur.Nom;
                    joueurBdd.Prenom = joueur.Prenom;
                    joueurBdd.Categorie = joueur.Categorie;
                    joueurBdd.JoueurPostes.RemoveAll(jp => jp.IdJoueur == joueur.Id);
                    foreach(string nomPoste in joueur.Postes)
                    {
                        Poste poste = bddContext.Postes.First(p => p.Nom.Equals(nomPoste));
                        if (poste != null)
                            joueurBdd.JoueurPostes.Add(new JoueurPoste()
                            {
                                IdPoste = poste.Id,
                                Poste = poste
                            });
                    }
                    bddContext.SaveChanges();
                    */
                }
            }
        }

        internal void Update(JoueurDetailsViewModel joueur)
        {
            using (var bddContext = new BddContext())
            {
                if (joueur.Id == 0 || !bddContext.Joueurs.Any(j => j.Id == joueur.Id))
                {
                    this.Create(joueur);
                }
                else
                {
                    Joueur joueurBdd = bddContext.Joueurs
                                                 .Where(item => item.Id == joueur.Id)
                                                 .Include(item => item.JoueurPostes)
                                                 .ThenInclude(item => item.Poste).FirstOrDefault();
                    if (joueurBdd != null)
                    {
                        joueurBdd.Categorie = joueur.Categorie;
                        joueurBdd.Nom = joueur.Nom;
                        joueurBdd.Prenom = joueur.Prenom;

                        List<String> listPosteBdd = new List<string>();
                        List<String> listPosteRecus = new List<string>();

                        if (joueurBdd.JoueurPostes != null)
                        {
                            listPosteBdd = joueurBdd.JoueurPostes.Select(jp => jp.Poste).Select(p => p.Nom).ToList();
                        }
                        if (joueur.Postes != null)
                        {
                            foreach (string nomPoste in joueur.Postes)
                            {
                                Poste poste = bddContext.Postes.First(p => p.Nom.Equals(nomPoste));
                                if (poste != null)
                                {
                                    listPosteRecus.Add(poste.Nom);
                                    if (joueurBdd.JoueurPostes == null)
                                        joueurBdd.JoueurPostes = new List<JoueurPoste>();

                                    if (!listPosteBdd.Contains(poste.Nom))
                                    {
                                        joueurBdd.JoueurPostes.Add(new JoueurPoste()
                                        {
                                            IdPoste = poste.Id,
                                            Poste = poste
                                        });
                                    }
                                }
                            }
                            List<JoueurPoste> listJoueurPosteBdd = joueurBdd.JoueurPostes.ToList();
                            foreach (JoueurPoste joueurPoste in listJoueurPosteBdd)
                            {
                                if (!listPosteRecus.Contains(joueurPoste.Poste.Nom))
                                {
                                    joueurBdd.JoueurPostes.Remove(joueurPoste);
                                }
                            }
                        }
                        else
                        {
                            // On fait autre chose ?
                        }
                    
                        bddContext.SaveChanges();
                    }
                }
            }
        }

        private Joueur convertToBddPlayer(JoueurDetailsViewModel joueurAPI)
        {
            Data.Models.Joueur joueur = new Data.Models.Joueur();
            joueur.Nom = joueurAPI.Nom;
            joueur.Prenom = joueurAPI.Prenom;
            joueur.Categorie = joueurAPI.Categorie;
            if(joueurAPI.Id != null)
                joueur.Id = joueurAPI.Id.Value;

            if (joueurAPI.Postes != null && joueurAPI.Postes.Count > 0)
            {
                using (var bddContext = new BddContext())
                {
                    foreach (string nomPoste in joueurAPI.Postes)
                    {
                        Poste poste = bddContext.Postes.First(p => p.Nom.Equals(nomPoste));
                        if (poste != null)
                            if (joueur.JoueurPostes == null)
                            {
                                joueur.JoueurPostes = new List<JoueurPoste>();
                            }
                        joueur.JoueurPostes.Add(new JoueurPoste()
                        {
                            IdPoste = poste.Id,
                            Poste = poste
                        });

                    }
                }
            }
            return joueur;
        }

        private JoueurDetailsViewModel convertToAPIPlayer(Joueur joueurBdd)
        {
            JoueurDetailsViewModel joueurApi = new JoueurDetailsViewModel();
            joueurApi.Id = joueurBdd.Id;
            joueurApi.Nom = joueurBdd.Nom;
            joueurApi.Prenom = joueurBdd.Prenom;
            joueurApi.Categorie = joueurBdd.Categorie;
            joueurApi.Postes = new List<string>();
            if(joueurBdd.JoueurPostes != null)
            {
                foreach(JoueurPoste joueurPoste in joueurBdd.JoueurPostes)
                {
                    joueurApi.Postes.Add(joueurPoste.Poste.Nom);
                }
            }
            return joueurApi;
        }
    }
}
