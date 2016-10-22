using HOFCServerNet.Data.Enums;
using HOFCServerNet.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HOFCServerNet.ViewModels.Vote;

namespace HOFCServerNet.Services
{
    public class VoteService
    {

        public BddContext BddContext { get; set; }
        public VoteService(BddContext dbContext)
        {
            BddContext = dbContext;
        }

        public List<Vote> GetForUserAndMatch(string userId, int matchId)
        {
            var listeVote = BddContext.Votes
                                      .Where(v => v.UserId == userId && v.Match.Id == matchId)
                                      .Include(v => v.Joueur)
                                      .ToList();
            if (listeVote.Count < Enum.GetNames(typeof(TypeVote)).Length)
            {
                foreach (TypeVote typeVote in Enum.GetValues(typeof(TypeVote)))
                {
                    if (!listeVote.Where(v => v.TypeVote.Equals(typeVote)).Any())
                    {
                        listeVote.Add(new Vote()
                        {
                            Match = new Match() { Id = matchId },
                            TypeVote = typeVote
                        });
                    }
                }
            }
            return listeVote;

        }

        public void SaveVotes(List<Vote> votes, int matchId, string userId)
        {

            BddContext.Votes.RemoveRange(BddContext.Votes.Where(vo => vo.UserId == userId && vo.Match.Id == matchId).ToList());
            var match = new Match() { Id = matchId };
            BddContext.Matchs.Attach(match);
            foreach (var v in votes)
            {

                int joueurId = (v.Joueur != null) ? v.Joueur.Id : 0;
                TypeVote type = v.TypeVote;


                Vote vote = new Vote()
                {
                    Joueur = new Joueur() { Id = joueurId },
                    Match = match,
                    TypeVote = type,
                    UserId = userId
                };
                BddContext.Joueurs.Attach(vote.Joueur);
                BddContext.Votes.Add(vote);
                BddContext.SaveChanges();
            }


        }

        internal List<VoteSum> GetResultsForMatch(int? matchId)
        {
            var query = BddContext.Votes
                            .Where(v => matchId == null || v.MatchId == matchId)
                            .GroupBy(v => new { v.JoueurId, v.TypeVote })
                            .Select(g => new VoteSum() { JoueurId = g.Key.JoueurId, TypeVote = g.Key.TypeVote, Nb = g.Count() });

            var result = query.ToList();
            foreach (var entry in result)
                entry.Joueur = BddContext.Joueurs.FirstOrDefault(j => j.Id == entry.JoueurId);
            // There is a bug when using Include and Group By. Change this code when this bug is fixed
            // https://github.com/aspnet/EntityFramework/issues/3418
            return result;
        }

        /// <summary>
        /// Permet de supprimer les votes d'un match pour un utilisateur
        /// </summary>
        /// <param name="id">Identifiant du match</param>
        /// <param name="v">Identifiant de l'utilisateur</param>
        public void DeleteVotesForMatch(int id, string v)
        {
            throw new NotImplementedException();
        }
    }
}
