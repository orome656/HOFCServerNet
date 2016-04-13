using HOFCServerNet.Data.Enums;
using HOFCServerNet.Data.Models;
using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HOFCServerNet.ViewModels.Vote;

namespace HOFCServerNet.Services
{
    public class VoteService
    {
        public List<Vote> GetForUserAndMatch(string userId, int matchId)
        {
            using(var bddContext = new BddContext())
            {
                var listeVote = bddContext.Votes
                                          .Where(v => v.UserId == userId && v.Match.Id == matchId)
                                          .Include(v => v.Joueur)
                                          .ToList();
                if(listeVote.Count < Enum.GetNames(typeof(TypeVote)).Length)
                {
                    foreach(TypeVote typeVote in Enum.GetValues(typeof(TypeVote)))
                    {
                        if(!listeVote.Where(v => v.TypeVote.Equals(typeVote)).Any())
                        {
                            listeVote.Add(new Vote() {
                                Match = new Match() { Id = matchId},
                                TypeVote = typeVote
                            });
                        }
                    }
                }
                return listeVote;
            }
        }

        public void SaveVotes(List<Vote> votes, int matchId, string userId)
        {
             
            using (var bddContext = new BddContext())
            {
                bddContext.Votes.RemoveRange(bddContext.Votes.Where(vo => vo.UserId == userId && vo.Match.Id == matchId).ToList());

                foreach (var v in votes)
                {

                    int joueurId = (v.Joueur != null) ? v.Joueur.Id : 0;
                    TypeVote type = v.TypeVote;


                    Vote vote = new Vote()
                    {
                        Joueur = new Joueur() { Id = joueurId },
                        Match = new Match() { Id = matchId },
                        TypeVote = type,
                        UserId = userId
                    };
                    bddContext.Votes.Add(vote);
                    bddContext.SaveChanges();
                }
                
            }
        }
        
        internal List<VoteSum> GetResultsForMatch(int? matchId)
        {
            using(var bddContext = new BddContext())
            {
                var query = bddContext.Votes
                                .Where(v => matchId == null || v.MatchId == matchId)
                                .GroupBy(v => new { v.JoueurId, v.TypeVote })
                                .Select(g => new VoteSum() { JoueurId = g.Key.JoueurId, TypeVote = g.Key.TypeVote, Nb = g.Count() });

                var result = query.ToList();
                foreach (var entry in result)
                    entry.Joueur = bddContext.Joueurs.FirstOrDefault(j => j.Id == entry.JoueurId);
                // There is a bug when using Include and Group By. Change this code when this bug is fixed
                // https://github.com/aspnet/EntityFramework/issues/3418
                return result;
            }
        }
    }
}
