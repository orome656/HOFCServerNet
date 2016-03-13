using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using HOFCServerNet.Data.Models;

namespace HOFCServerNet.Migrations
{
    [DbContext(typeof(BddContext))]
    [Migration("20160311214615_Correctly add vote")]
    partial class Correctlyaddvote
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc1-16348")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

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
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Classement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Bc");

                    b.Property<int>("Bp");

                    b.Property<string>("Categorie");

                    b.Property<int>("Defaite");

                    b.Property<int>("Difference");

                    b.Property<string>("Equipe");

                    b.Property<int>("Joue");

                    b.Property<int>("Nul");

                    b.Property<int>("Points");

                    b.Property<int>("Victoire");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Competition", b =>
                {
                    b.Property<string>("Nom");

                    b.Property<string>("Categorie");

                    b.HasKey("Nom");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Composition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("JoueurId");

                    b.Property<int?>("MatchId");

                    b.Property<int?>("PosteId");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Joueur", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Categorie");

                    b.Property<string>("Nom");

                    b.Property<string>("Prenom");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.JoueurPoste", b =>
                {
                    b.Property<int>("IdJoueur");

                    b.Property<int>("IdPoste");

                    b.HasKey("IdJoueur", "IdPoste");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Match", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CompetitionId");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Equipe1");

                    b.Property<string>("Equipe2");

                    b.Property<int?>("IdJournee");

                    b.Property<string>("InfosId");

                    b.Property<int?>("Score1");

                    b.Property<int?>("Score2");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.NotificationClient", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("NotificationID");

                    b.Property<string>("UUID");

                    b.HasKey("ID");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Poste", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Nom")
                        .HasAnnotation("MaxLength", 10);

                    b.HasKey("Id");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Vote", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("JoueurId");

                    b.Property<int?>("MatchId");

                    b.Property<string>("TypeVoteString")
                        .HasAnnotation("Relational:ColumnName", "TypeVote");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Composition", b =>
                {
                    b.HasOne("HOFCServerNet.Data.Models.Joueur")
                        .WithMany()
                        .HasForeignKey("JoueurId");

                    b.HasOne("HOFCServerNet.Data.Models.Match")
                        .WithMany()
                        .HasForeignKey("MatchId");

                    b.HasOne("HOFCServerNet.Data.Models.Poste")
                        .WithMany()
                        .HasForeignKey("PosteId");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.JoueurPoste", b =>
                {
                    b.HasOne("HOFCServerNet.Data.Models.Joueur")
                        .WithMany()
                        .HasForeignKey("IdJoueur");

                    b.HasOne("HOFCServerNet.Data.Models.Poste")
                        .WithMany()
                        .HasForeignKey("IdPoste");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Match", b =>
                {
                    b.HasOne("HOFCServerNet.Data.Models.Competition")
                        .WithMany()
                        .HasForeignKey("CompetitionId");
                });

            modelBuilder.Entity("HOFCServerNet.Data.Models.Vote", b =>
                {
                    b.HasOne("HOFCServerNet.Data.Models.Joueur")
                        .WithMany()
                        .HasForeignKey("JoueurId");

                    b.HasOne("HOFCServerNet.Data.Models.Match")
                        .WithMany()
                        .HasForeignKey("MatchId");
                });
        }
    }
}
