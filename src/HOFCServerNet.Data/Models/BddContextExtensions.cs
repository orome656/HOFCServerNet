using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Models
{
    public static class BddContextExtensions
    {
        public static void EnsureSeedData(this BddContext context)
        {
            if(!context.Postes.Any())
            {
                context.Postes.Add(new Poste() { Nom = "G" });
                context.Postes.Add(new Poste() { Nom = "DD" });
                context.Postes.Add(new Poste() { Nom = "DG" });
                context.Postes.Add(new Poste() { Nom = "DC" });
                context.Postes.Add(new Poste() { Nom = "MDF" });
                context.Postes.Add(new Poste() { Nom = "MG" });
                context.Postes.Add(new Poste() { Nom = "MO" });
                context.Postes.Add(new Poste() { Nom = "MC" });
                context.Postes.Add(new Poste() { Nom = "MD" });
                context.Postes.Add(new Poste() { Nom = "AiG" });
                context.Postes.Add(new Poste() { Nom = "AiD" });
                context.Postes.Add(new Poste() { Nom = "BT" });
                context.Postes.Add(new Poste() { Nom = "REMP" });
                context.SaveChanges();
            }

            if (!context.Tactiques.Any())
            {
                context.Tactiques.Add(new Tactique()
                {
                    Nom = "4-3-3",
                    NbDD = 1,
                    NbDG = 1,
                    NbDC = 1,
                    NbMDF = 1,
                    NbMC = 2,
                    NbMG = 0,
                    NbMD = 0,
                    NbMO = 0,
                    NbAIG = 1,
                    NbAID = 1,
                    NbBT = 1
                });
                context.Tactiques.Add(new Tactique()
                {
                    Nom = "4-4-2",
                    NbDD = 1,
                    NbDG = 1,
                    NbDC = 1,
                    NbMDF = 0,
                    NbMC = 2,
                    NbMG = 1,
                    NbMD = 1,
                    NbMO = 0,
                    NbAIG = 0,
                    NbAID = 0,
                    NbBT = 2
                });
                context.Tactiques.Add(new Tactique()
                {
                    Nom = "4-4-2-Losange",
                    NbDD = 1,
                    NbDG = 1,
                    NbDC = 1,
                    NbMDF = 1,
                    NbMC = 0,
                    NbMG = 1,
                    NbMD = 1,
                    NbMO = 1,
                    NbAIG = 0,
                    NbAID = 0,
                    NbBT = 2
                });
                context.SaveChanges();
            }

            /*if(!context.Competitions.Any())
            {
                context.Competitions.Add(new Competition()
                {
                    Nom = "CHALLENGE ARNAUNE BIDOUILH Poule unique",
                    Categorie = "equipe2"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "CHALLENGE DISTRICT SENIORS Poule unique",
                    Categorie = "equipe1"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "CHAMP U19 INTERDISTRICTS GROUPE A",
                    Categorie = "u19"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "CHAMPIONNAT U15 HONNEUR POULE UNIQUE",
                    Categorie = "u15"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "CHAMPIONNAT U17 PROMOTION POULE UNIQUE",
                    Categorie = "u17"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "COMPETITION FUTSAL SENIORS POULE UNIQUE",
                    Categorie = "equipe1"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "COUPE  DE FRANCE 2015-2016 POULE (E) HTES PYREN",
                    Categorie = "equipe1"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "COUPE DE BIGORRE M. MENVIELLE Poule unique",
                    Categorie = "equipe1"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "COUPE DE BIGORRE U15 Poule unique",
                    Categorie = "u15"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "COUPE DE BIGORRE U17 Poule unique",
                    Categorie = "u17"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "COUPE DES RÉSERVES HERVÉ DUTHU Poule unique",
                    Categorie = "equipe2"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "COUPE DISTRICT U15 Poule unique",
                    Categorie = "u15"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "COUPE DISTRICT U17 Poule unique",
                    Categorie = "u17"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "COUPE U19 INTERDISTRICT GROUPE A",
                    Categorie = "u19"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "CPE MIDI PYRENEES SENIORS (C) DIST. 32/65/82",
                    Categorie = "equipe1"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "EXCELLENCE POULE UNIQUE",
                    Categorie = "equipe1"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "JOUR  DE COUPE U10 POULE UNIQUE",
                    Categorie = "u10"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "JOUR  DE COUPE U11 NIVEAU 1",
                    Categorie = "u11"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "JOUR  DE COUPE U11 NIVEAU 2",
                    Categorie = "u11"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "JOUR  DE COUPE U13 NIVEAU 2",
                    Categorie = "u13"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "PREMIERE DIVISION POULE UNIQUE",
                    Categorie = "equipe2"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "PROMOTION 1ERE DIVISION POULE A",
                    Categorie = "equipe3"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "U15 DISTRICT POULE HONNEUR",
                    Categorie = "u15"
                });
                context.Competitions.Add(new Competition()
                {
                    Nom = "U17 DISTRICT POULE B",
                    Categorie = "u17"
                });
                context.SaveChanges();
            }*/
        }
    }
}
