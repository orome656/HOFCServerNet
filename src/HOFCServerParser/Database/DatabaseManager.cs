using HOFCServerNet.Models;
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
                foreach (Match calendrier in matchs)
                {
                    Match bddCalendrier = bddContext.Matchs.FirstOrDefault(item => calendrier.Equipe1.Equals(item.Equipe1)
                                                                                        && calendrier.Equipe2.Equals(item.Equipe2)
                                                                                        && item.Competition.Nom == calendrier.CompetitionId);
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
                        // New Element insert it and send notification
                        bddContext.Matchs.Add(calendrier);
                    }
                }
                bddContext.SaveChanges();
            }
        }
    }
}
