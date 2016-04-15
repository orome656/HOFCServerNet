using HOFCServerNet.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerParser.Database
{
    public class DatabaseManager
    {
        public void SaveMatchs(List<Match> matchs)
        {
            using (var bddContext = new BddContext())
            {
                List<Competition> addedCompetitions = new List<Competition>();
                foreach (Match calendrier in matchs)
                {
                    Match bddCalendrier = bddContext.Matchs.FirstOrDefault(item => calendrier.Equipe1.Equals(item.Equipe1)
                                                                                        && calendrier.Equipe2.Equals(item.Equipe2)
                                                                                        && item.Competition.Nom == calendrier.Competition.Nom);
                    if (bddCalendrier != null)
                    {
                        bddCalendrier.Date = calendrier.Date;
                        bddCalendrier.Score1 = calendrier.Score1;
                        bddCalendrier.Score2 = calendrier.Score2;
                        if(calendrier.IdJournee != null)
                        {
                            bddCalendrier.IdJournee = calendrier.IdJournee;
                        }
                        bddContext.Entry(bddCalendrier).State = Microsoft.Data.Entity.EntityState.Modified;
                    }
                    else
                    {
                        if (!string.IsNullOrWhiteSpace(calendrier.Competition.Nom) && !addedCompetitions.Any(x => x.Nom == calendrier.Competition.Nom && x.Saison == calendrier.Competition.Saison))
                        {
                            var competitionBdd = bddContext.Competitions.FirstOrDefault(c => c.Nom == calendrier.Competition.Nom && c.Saison == calendrier.Competition.Saison);
                            if(competitionBdd == null)
                            {
                                bddContext.Competitions.Add(calendrier.Competition);
                                addedCompetitions.Add(calendrier.Competition);
                            }
                            else
                            {
                                if (string.IsNullOrEmpty(competitionBdd.Categorie))
                                {
                                    competitionBdd.Categorie = calendrier.Competition.Categorie;
                                    bddContext.Entry(competitionBdd).State = Microsoft.Data.Entity.EntityState.Modified;
                                }
                                calendrier.Competition = competitionBdd;
                            }
                        } else if (addedCompetitions.Any(x => x.Nom == calendrier.Competition.Nom && x.Saison == calendrier.Competition.Saison))
                        {
                            calendrier.Competition = addedCompetitions.First(x => x.Nom == calendrier.Competition.Nom && x.Saison == calendrier.Competition.Saison);
                        }

                        // New Element insert it and send notification
                        bddContext.Matchs.Add(calendrier);
                    }
                }
                bddContext.SaveChanges();
            }
        }
    }
}
