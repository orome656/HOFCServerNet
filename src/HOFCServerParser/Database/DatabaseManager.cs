using HOFCServerNet.Data.Constants;
using HOFCServerNet.Data.Models;
using HOFCServerNet.Utils.Extensions;
using HOFCServerNet.Utils.Notifications;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerParser.Database
{
    public class DatabaseManager
    {
        public async void SaveMatchs(List<Match> matchs)
        {
            using (var bddContext = new BddContext(Program.Options))
            {
                List<Competition> addedCompetitions = new List<Competition>();
                foreach (Match calendrier in matchs)
                {
                    Match bddCalendrier = bddContext.Matchs.FirstOrDefault(item => calendrier.Equipe1.Equals(item.Equipe1)
                                                                                        && calendrier.Equipe2.Equals(item.Equipe2)
                                                                                        && item.Competition.Nom == calendrier.Competition.Nom);
                    if (bddCalendrier != null)
                    {
                        if (!bddCalendrier.Score1.HasValue && !bddCalendrier.Score2.HasValue
                            && calendrier.Score1.HasValue && calendrier.Score2.HasValue
                            && (calendrier.Equipe1.Contains(AppConstants.HOFC_NAME)
                                || calendrier.Equipe2.Contains(AppConstants.HOFC_NAME)))
                        {
                            string titre = string.Format("Nouveau Résultat {0}", calendrier.Competition.Categorie);
                            string notifMessage = null;
                            if (calendrier.Equipe1.Contains(AppConstants.HOFC_NAME) && calendrier.Score1 > calendrier.Score2)
                            {
                                notifMessage = "Victoire du HOFC (" + calendrier.Score1 + '-' + calendrier.Score2 + ") face à " + calendrier.Equipe2;
                            }
                            else if (calendrier.Equipe2.Contains(AppConstants.HOFC_NAME) && calendrier.Score2 > calendrier.Score1)
                            {
                                notifMessage = "Victoire du HOFC (" + calendrier.Score1 + '-' + calendrier.Score2 + ") face à " + calendrier.Equipe1;
                            }
                            else if (calendrier.Equipe1.Contains(AppConstants.HOFC_NAME) && calendrier.Score1 < calendrier.Score2)
                            {
                                notifMessage = "Défaite du HOFC (" + calendrier.Score1 + '-' + calendrier.Score2 + ") face à " + calendrier.Equipe2;
                            }
                            else if (calendrier.Equipe2.Contains(AppConstants.HOFC_NAME) && calendrier.Score2 < calendrier.Score1)
                            {
                                notifMessage = "Défaite du HOFC (" + calendrier.Score1 + '-' + calendrier.Score2 + ") face à " + calendrier.Equipe1;
                            }
                            else
                            {
                                notifMessage = "Match nul entre le HOFC et " + ((calendrier.Equipe1.Contains(AppConstants.HOFC_NAME)) ? calendrier.Equipe2 : calendrier.Equipe1);
                            }
                            NotificationHub notif = new NotificationHub(bddContext);
                            await notif.NotifyAll(titre, notifMessage);
                        }

                        bddCalendrier.Date = calendrier.Date;
                        bddCalendrier.Score1 = calendrier.Score1;
                        bddCalendrier.Score2 = calendrier.Score2;
                        if (calendrier.IdJournee != null)
                        {
                            bddCalendrier.IdJournee = calendrier.IdJournee;
                        }
                        bddCalendrier.Message = calendrier.Message;

                        bddContext.Entry(bddCalendrier).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    }
                    else
                    {
                        if (!string.IsNullOrWhiteSpace(calendrier.Competition.Nom) && !addedCompetitions.Any(x => x.Nom == calendrier.Competition.Nom && x.Saison == calendrier.Competition.Saison))
                        {
                            var competitionBdd = bddContext.Competitions.FirstOrDefault(c => c.Nom == calendrier.Competition.Nom && c.Saison == calendrier.Competition.Saison);
                            if (competitionBdd == null)
                            {
                                bddContext.Competitions.Add(calendrier.Competition);
                                addedCompetitions.Add(calendrier.Competition);
                            }
                            else
                            {
                                if (string.IsNullOrEmpty(competitionBdd.Categorie))
                                {
                                    competitionBdd.Categorie = calendrier.Competition.Categorie;
                                    bddContext.Entry(competitionBdd).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                                }
                                calendrier.Competition = competitionBdd;
                            }
                        }
                        else if (addedCompetitions.Any(x => x.Nom == calendrier.Competition.Nom && x.Saison == calendrier.Competition.Saison))
                        {
                            calendrier.Competition = addedCompetitions.First(x => x.Nom == calendrier.Competition.Nom && x.Saison == calendrier.Competition.Saison);
                        }

                        bddContext.Matchs.Add(calendrier);
                    }
                }
                bddContext.SaveChanges();
            }
        }

        public int? GetCurrentJournee(string equipe)
        {
            using (var bddContext = new BddContext(Program.Options))
            {
                var list = bddContext.Matchs.Where(m => m.Competition.Categorie.Equals(equipe) && m.Date.StartOfWeek(DayOfWeek.Monday) == DateTime.Now.StartOfWeek(DayOfWeek.Monday)).ToList();
                if (list.Count == 0)
                    return null;
                else
                    return list.First().IdJournee;
            }
        }
    }
}
