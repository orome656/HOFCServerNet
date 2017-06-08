using HOFCServerNet.Data.Enums;
using HOFCServerNet.Data.Models;
using HOFCServerNet.Extensions;
using HOFCServerNet.Utils.Extensions;
using HOFCServerNet.ViewModels.Vote;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace HOFCServerNet.Services
{
    public class MatchService
    {
        private BddContext BddContext { get; set; }

        public MatchService(BddContext dbContext)
        {
            BddContext = dbContext;
        }

        public List<Match> GetAll()
        {
                return BddContext.Matchs.Include(item => item.Competition).ToList();
        }

        public Dictionary<string, List<Match>> GetAllGroupedByCategory()
        {
            Dictionary<string, List<Match>> mapMatchs = new Dictionary<string, List<Match>>();
            mapMatchs.Add("equipe1", this.GetMatchByCategory("equipe1"));
            mapMatchs.Add("equipe2", this.GetMatchByCategory("equipe2"));
            mapMatchs.Add("equipe3", this.GetMatchByCategory("equipe3"));
            return mapMatchs; // TODO voir comment faire en un seul appel ...
                              /*using (var BddContext = new BddContext())
                              {
                                  var test = from match in BddContext.Matchs
                                             from comp in BddContext.Competitions
                                             where match.CompetitionId == comp.Nom
                                             select match;*/

            /*var matchMap = (from match in BddContext.Matchs
                            from competition in BddContext.Competitions
                            where competition.Nom == match.CompetitionId
                            group match by competition.Categorie
                            into matchs
                            select matchs).ToDictionary(group => group.Key, group => group.ToList());*/
            //group match by match.Competition.Categorie;

            //var sortie = test.ToDictionary(group => group.Key, group => group.ToList());

            /*var grouping = BddContext.Matchs
                            .Join(BddContext.Competitions, m => m.CompetitionId, c => c.Nom, (m,c) => new { Match = m, Competition = c})
                            .Select(x => x.Match)
                            .GroupBy(x => x.Competition.Categorie);
            return grouping.ToDictionary(group => group.Key, group => group.ToList());
        }*/
        }

        internal void ActivateVote(int id)
        {
                Match match = BddContext.Matchs.FirstOrDefault(m => m.Id == id);
                if(match != null)
                {
                    match.VoteStatut = (int)StatutVote.OUVERT;
                    BddContext.SaveChanges();
                }
        }

        internal void CloseVote(int id)
        {
                Match match = BddContext.Matchs.FirstOrDefault(m => m.Id == id);
                if (match != null)
                {
                    match.VoteStatut = (int)StatutVote.CLOS;
                    BddContext.SaveChanges();
                }
        }

        public List<Match> GetMatchsForHOFC()
        {
                return BddContext.Matchs
                             .Where(item => item.Equipe1.Contains("HORGUES ODOS") || item.Equipe2.Contains("HORGUES ODOS")).OrderBy(item => item.Date)
                             .Include(item => item.Competition)
                             .ToList();
        }

        public List<Match> GetMatchByCategoryAndJournee(string categorie, int numJournee)
        {
                return BddContext.Matchs
                             .Where(item => item.Competition != null && item.Competition.Categorie.Equals(categorie) && item.IdJournee.Equals(numJournee))
                             .Include(item => item.Competition)
                             .ToList();
        }

        internal Match GetMatchById(int id)
        {
            return BddContext.Matchs
                             .Where(item => item.Id == id)
                             .Include(item => item.Competition)
                             .Include(item => item.Compositions)
                                .ThenInclude(c => c.Joueur)
                             .Include(c => c.Compositions)
                                .ThenInclude(c => c.Poste)
                             .FirstOrDefault();
        }

        public List<Match> GetMatchsForHOFCByCategory(string categorie)
        {
                return BddContext.Matchs
                                .Where(item => item.Competition.Categorie.Equals(categorie) && (item.Equipe1.Contains("HORGUES ODOS") || item.Equipe2.Contains("HORGUES ODOS")))
                                .OrderBy(item => item.Date)
                                .Include(item => item.Competition)
                                .ToList();
        }

        public List<Match> GetMatchByCategory(string categorie)
        {
                return BddContext.Matchs
                                .Include(item => item.Competition)
                                .Where(item => item.Competition.Categorie == categorie)
                                .ToList();
        }

        public List<Match> GetMatchForHOFCByWeek(DateTime date)
        {
            return BddContext.Matchs
                            .Include(item => item.Competition)
                            .Where(item => item.Date.StartOfWeek(DayOfWeek.Monday).Date == date.StartOfWeek(DayOfWeek.Monday).Date && (item.Equipe1.Contains("HORGUES ODOS") || item.Equipe2.Contains("HORGUES ODOS")))
                            .ToList();
        }

        public List<Match> GetMatchBetweenDates(DateTime date, DateTime dateEnd)
        {
                return BddContext.Matchs.Where(item => (date == null || date.CompareTo(item.Date) <= 0) && (dateEnd == null || dateEnd.CompareTo(item.Date) > 0))
                                       .Include(item => item.Competition)
                                       .ToList();


        }

        public List<VoteMatchViewModel> GetVoteMatchs(ClaimsPrincipal user)
        {
            return BddContext
                .Matchs
                .Where(m => (m.Equipe1.Contains("HORGUES ODOS") || m.Equipe2.Contains("HORGUES ODOS")) && (m.VoteStatut == 1 || m.VoteStatut == 2 || (user.IsInRole("Contributor") && m.VoteStatut == 0 && m.Date < DateTime.Now)))
                .Select(x => new VoteMatchViewModel() { MatchId = x.Id, Date = x.Date, Equipe1 = x.Equipe1, Equipe2 = x.Equipe2, Statut = x.VoteStatutEnum, Competition = x.Competition.Nom })
                .OrderBy(x => x.Date)
                .ToList();
        }

        public List<Match> GetHOFCPastMatch()
        {
                return BddContext.Matchs.Where(item => item.Date <= DateTime.Now && (item.Equipe1.Contains("HORGUES ODOS") || item.Equipe2.Contains("HORGUES ODOS")))
                                       .Include(item => item.Competition)
                                       .ToList();
            
        }

        public List<Tactique> GetTactiques()
        {
            return BddContext.Tactiques.ToList();
        }
    }
}
