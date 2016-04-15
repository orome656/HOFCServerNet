using HOFCServerNet.Data.Enums;
using HOFCServerNet.Data.Models;
using HOFCServerNet.ViewModels.Vote;
using Microsoft.AspNet.Mvc.Controllers;
using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace HOFCServerNet.Services
{
    public class MatchService
    {
        public List<Match> GetAll()
        {
            using (var dbContext = new BddContext())
            {
                return dbContext.Matchs.Include(item => item.Competition).ToList();
            }
        }

        public Dictionary<string, List<Match>> GetAllGroupedByCategory()
        {
            Dictionary<string, List<Match>> mapMatchs = new Dictionary<string, List<Match>>();
            mapMatchs.Add("equipe1", this.GetMatchByCategory("equipe1"));
            mapMatchs.Add("equipe2", this.GetMatchByCategory("equipe2"));
            mapMatchs.Add("equipe3", this.GetMatchByCategory("equipe3"));
            return mapMatchs; // TODO voir comment faire en un seul appel ...
                              /*using (var dbContext = new BddContext())
                              {
                                  var test = from match in dbContext.Matchs
                                             from comp in dbContext.Competitions
                                             where match.CompetitionId == comp.Nom
                                             select match;*/

            /*var matchMap = (from match in dbContext.Matchs
                            from competition in dbContext.Competitions
                            where competition.Nom == match.CompetitionId
                            group match by competition.Categorie
                            into matchs
                            select matchs).ToDictionary(group => group.Key, group => group.ToList());*/
            //group match by match.Competition.Categorie;

            //var sortie = test.ToDictionary(group => group.Key, group => group.ToList());

            /*var grouping = dbContext.Matchs
                            .Join(dbContext.Competitions, m => m.CompetitionId, c => c.Nom, (m,c) => new { Match = m, Competition = c})
                            .Select(x => x.Match)
                            .GroupBy(x => x.Competition.Categorie);
            return grouping.ToDictionary(group => group.Key, group => group.ToList());
        }*/
        }

        internal void ActivateVote(int id)
        {
            using (var bddContext = new BddContext())
            {
                Match match = bddContext.Matchs.FirstOrDefault(m => m.Id == id);
                if(match != null)
                {
                    match.VoteStatut = (int)StatutVote.OUVERT;
                    bddContext.SaveChanges();
                }

            }
        }

        internal void CloseVote(int id)
        {
            using (var bddContext = new BddContext())
            {
                Match match = bddContext.Matchs.FirstOrDefault(m => m.Id == id);
                if (match != null)
                {
                    match.VoteStatut = (int)StatutVote.CLOS;
                    bddContext.SaveChanges();
                }

            }
        }

        public List<Match> GetMatchsForHOFC()
        {
            using (var dbContext = new BddContext())
            {
                return dbContext.Matchs
                             .Where(item => item.Equipe1.Contains("HORGUES ODOS") || item.Equipe2.Contains("HORGUES ODOS")).OrderBy(item => item.Date)
                             .Include(item => item.Competition)
                             .ToList();
            }
        }

        public List<Match> GetMatchByCategoryAndJournee(string categorie, int numJournee)
        {
            using (var dbContext = new BddContext())
            {
                return dbContext.Matchs
                             .Where(item => item.Competition != null && item.Competition.Categorie.Equals(categorie) && item.IdJournee.Equals(numJournee))
                             .Include(item => item.Competition)
                             .ToList();
            }
        }

        internal Match GetMatchById(int id)
        {
            using (var dbContext = new BddContext())
            {
                return dbContext.Matchs
                             .Where(item => item.Id == id)
                             .Include(item => item.Competition)
                             .First();
            }
        }

        public List<Match> GetMatchsForHOFCByCategory(string categorie)
        {
            using (var dbContext = new BddContext())
            {
                return dbContext.Matchs
                                .Where(item => item.Competition != null && item.Competition.Categorie.Equals(categorie) && (item.Equipe1.Contains("HORGUES ODOS") || item.Equipe2.Contains("HORGUES ODOS")))
                                .OrderBy(item => item.Date)
                                .Include(item => item.Competition)
                                .ToList();
            }
        }

        public List<Match> GetMatchByCategory(string categorie)
        {
            using (var dbContext = new BddContext())
            {
                return dbContext.Matchs
                                .Include(item => item.Competition)
                                .Where(item => item.Competition.Categorie == categorie)
                                .ToList();
            }
        }

        public List<Match> GetMatchBetweenDates(DateTime date, DateTime dateEnd)
        {
            using (var dbContext = new BddContext())
            {
                return dbContext.Matchs.Where(item => (date == null || date.CompareTo(item.Date) <= 0) && (dateEnd == null || dateEnd.CompareTo(item.Date) > 0))
                                       .Include(item => item.Competition)
                                       .ToList();
            }


        }

        public List<VoteMatchViewModel> GetVoteMatchs(ClaimsPrincipal user)
        {
            using (var dbContext = new BddContext())
            {
                return dbContext
                    .Matchs
                    .Where(m => (m.Equipe1.Contains("HORGUES ODOS") || m.Equipe2.Contains("HORGUES ODOS")) && (m.VoteStatut == 1 || m.VoteStatut == 2 || (user.IsInRole("Contributor") && m.VoteStatut == 0 && m.Date < DateTime.Now)))
                    .Select(x => new VoteMatchViewModel() { MatchId = x.Id, Date = x.Date, Equipe1 = x.Equipe1, Equipe2 = x.Equipe2, Statut = x.VoteStatutEnum, Competition = x.Competition.Nom})
                    .OrderBy(x => x.Date)
                    .ToList();
            }
        }

        public List<Match> GetHOFCPastMatch()
        {
            using (var dbContext = new BddContext())
            {
                return dbContext.Matchs.Where(item => item.Date <= DateTime.Now && (item.Equipe1.Contains("HORGUES ODOS") || item.Equipe2.Contains("HORGUES ODOS")))
                                       .Include(item => item.Competition)
                                       .ToList();
            }
        }
    }
}
