using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using HOFCServerNet.Data.Models;

namespace HOFCServerNet.Data.Migrations
{
    [DbContext(typeof(BddContext))]
    partial class BddContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431");

            modelBuilder.Entity("HOFCServerNet.Data.Models.Actu", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Date");

                    b.Property<string>("ImageURL");

                    b.Property<int>("PostId");

                    b.Property<string>("Texte");

                    b.Property<string>("Titre");

                    b.Property<string>("URL");

                    b.HasKey("Id");

                    b.ToTable("Actus");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Classement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Bc");

                    b.Property<int>("Bp");

                    b.Property<string>("Categorie");

                    b.Property<int?>("CompetitionId");

                    b.Property<int>("Defaite");

                    b.Property<int>("Difference");

                    b.Property<string>("Equipe");

                    b.Property<int>("Joue");

                    b.Property<int>("Nul");

                    b.Property<int>("Points");

                    b.Property<int>("Victoire");

                    b.HasKey("Id");

                    b.HasIndex("CompetitionId");

                    b.ToTable("Classements");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Competition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Categorie");

                    b.Property<string>("Nom");

                    b.Property<string>("Saison");

                    b.HasKey("Id");

                    b.ToTable("Competitions");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Composition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("JoueurId");

                    b.Property<int?>("MatchId");

                    b.Property<int?>("PosteId");

                    b.HasKey("Id");

                    b.HasIndex("JoueurId");

                    b.HasIndex("MatchId");

                    b.HasIndex("PosteId");

                    b.ToTable("Compositions");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Joueur", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Categorie");

                    b.Property<string>("Nom");

                    b.Property<string>("Prenom");

                    b.HasKey("Id");

                    b.ToTable("Joueurs");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.JoueurPoste", b =>
                {
                    b.Property<int>("IdJoueur");

                    b.Property<int>("IdPoste");

                    b.HasKey("IdJoueur", "IdPoste");

                    b.HasIndex("IdJoueur");

                    b.HasIndex("IdPoste");

                    b.ToTable("JoueurPoste");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Match", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CompetitionId");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Equipe1");

                    b.Property<string>("Equipe2");

                    b.Property<int?>("IdJournee");

                    b.Property<string>("InfosId");

                    b.Property<int?>("Score1");

                    b.Property<int?>("Score2");

                    b.Property<int>("VoteStatut");

                    b.HasKey("Id");

                    b.HasIndex("CompetitionId");

                    b.ToTable("Matchs");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.NotificationClient", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("NotificationID");

                    b.Property<int>("Platform");

                    b.HasKey("ID");

                    b.ToTable("NotificationClients");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Poste", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Nom")
                        .HasAnnotation("MaxLength", 10);

                    b.HasKey("Id");

                    b.ToTable("Postes");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Stat", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("JoueurId");

                    b.Property<int>("MatchId");

                    b.Property<int>("Nombre");

                    b.Property<int>("TypeStat");

                    b.HasKey("Id");

                    b.HasIndex("JoueurId");

                    b.HasIndex("MatchId");

                    b.ToTable("Stats");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Vote", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("JoueurId");

                    b.Property<int>("MatchId");

                    b.Property<string>("TypeVoteString")
                        .HasColumnName("TypeVote");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("JoueurId");

                    b.HasIndex("MatchId");

                    b.ToTable("Votes");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Classement", b =>
                {
                    b.HasOne("HOFCServerNet.Data.Models.Competition", "Competition")
                        .WithMany()
                        .HasForeignKey("CompetitionId");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Composition", b =>
                {
                    b.HasOne("HOFCServerNet.Data.Models.Joueur", "Joueur")
                        .WithMany()
                        .HasForeignKey("JoueurId");

                    b.HasOne("HOFCServerNet.Data.Models.Match", "Match")
                        .WithMany()
                        .HasForeignKey("MatchId");

                    b.HasOne("HOFCServerNet.Data.Models.Poste", "Poste")
                        .WithMany()
                        .HasForeignKey("PosteId");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.JoueurPoste", b =>
                {
                    b.HasOne("HOFCServerNet.Data.Models.Joueur", "Joueur")
                        .WithMany("JoueurPostes")
                        .HasForeignKey("IdJoueur")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("HOFCServerNet.Data.Models.Poste", "Poste")
                        .WithMany("JoueurPostes")
                        .HasForeignKey("IdPoste")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Match", b =>
                {
                    b.HasOne("HOFCServerNet.Data.Models.Competition", "Competition")
                        .WithMany()
                        .HasForeignKey("CompetitionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Stat", b =>
                {
                    b.HasOne("HOFCServerNet.Data.Models.Joueur", "Joueur")
                        .WithMany()
                        .HasForeignKey("JoueurId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("HOFCServerNet.Data.Models.Match", "Match")
                        .WithMany()
                        .HasForeignKey("MatchId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Vote", b =>
                {
                    b.HasOne("HOFCServerNet.Data.Models.Joueur", "Joueur")
                        .WithMany()
                        .HasForeignKey("JoueurId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("HOFCServerNet.Data.Models.Match", "Match")
                        .WithMany()
                        .HasForeignKey("MatchId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
