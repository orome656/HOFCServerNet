using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HOFCServerNet.Data.Migrations
{
    public partial class Platform : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Actus",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Autoincrement", true),
                    Date = table.Column<DateTime>(nullable: false),
                    ImageURL = table.Column<string>(nullable: true),
                    PostId = table.Column<int>(nullable: false),
                    Texte = table.Column<string>(nullable: true),
                    Titre = table.Column<string>(nullable: true),
                    URL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Actus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Competitions",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Autoincrement", true),
                    Categorie = table.Column<string>(nullable: true),
                    Nom = table.Column<string>(nullable: true),
                    Saison = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Competitions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Joueurs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Autoincrement", true),
                    Categorie = table.Column<string>(nullable: true),
                    Nom = table.Column<string>(nullable: true),
                    Prenom = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Joueurs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "NotificationClients",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Autoincrement", true),
                    NotificationID = table.Column<string>(nullable: true),
                    Platform = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NotificationClients", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Postes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Autoincrement", true),
                    Nom = table.Column<string>(maxLength: 10, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Postes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Classements",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Autoincrement", true),
                    Bc = table.Column<int>(nullable: false),
                    Bp = table.Column<int>(nullable: false),
                    Categorie = table.Column<string>(nullable: true),
                    CompetitionId = table.Column<int>(nullable: true),
                    Defaite = table.Column<int>(nullable: false),
                    Difference = table.Column<int>(nullable: false),
                    Equipe = table.Column<string>(nullable: true),
                    Joue = table.Column<int>(nullable: false),
                    Nul = table.Column<int>(nullable: false),
                    Points = table.Column<int>(nullable: false),
                    Victoire = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Classements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Classements_Competitions_CompetitionId",
                        column: x => x.CompetitionId,
                        principalTable: "Competitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Matchs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Autoincrement", true),
                    CompetitionId = table.Column<int>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    Equipe1 = table.Column<string>(nullable: true),
                    Equipe2 = table.Column<string>(nullable: true),
                    IdJournee = table.Column<int>(nullable: true),
                    InfosId = table.Column<string>(nullable: true),
                    Score1 = table.Column<int>(nullable: true),
                    Score2 = table.Column<int>(nullable: true),
                    VoteStatut = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Matchs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Matchs_Competitions_CompetitionId",
                        column: x => x.CompetitionId,
                        principalTable: "Competitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "JoueurPoste",
                columns: table => new
                {
                    IdJoueur = table.Column<int>(nullable: false),
                    IdPoste = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JoueurPoste", x => new { x.IdJoueur, x.IdPoste });
                    table.ForeignKey(
                        name: "FK_JoueurPoste_Joueurs_IdJoueur",
                        column: x => x.IdJoueur,
                        principalTable: "Joueurs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_JoueurPoste_Postes_IdPoste",
                        column: x => x.IdPoste,
                        principalTable: "Postes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Compositions",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Autoincrement", true),
                    JoueurId = table.Column<int>(nullable: true),
                    MatchId = table.Column<int>(nullable: true),
                    PosteId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Compositions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Compositions_Joueurs_JoueurId",
                        column: x => x.JoueurId,
                        principalTable: "Joueurs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Compositions_Matchs_MatchId",
                        column: x => x.MatchId,
                        principalTable: "Matchs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Compositions_Postes_PosteId",
                        column: x => x.PosteId,
                        principalTable: "Postes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Stats",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Autoincrement", true),
                    JoueurId = table.Column<int>(nullable: false),
                    MatchId = table.Column<int>(nullable: false),
                    Nombre = table.Column<int>(nullable: false),
                    TypeStat = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stats", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Stats_Joueurs_JoueurId",
                        column: x => x.JoueurId,
                        principalTable: "Joueurs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Stats_Matchs_MatchId",
                        column: x => x.MatchId,
                        principalTable: "Matchs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Votes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Autoincrement", true),
                    JoueurId = table.Column<int>(nullable: false),
                    MatchId = table.Column<int>(nullable: false),
                    TypeVote = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Votes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Votes_Joueurs_JoueurId",
                        column: x => x.JoueurId,
                        principalTable: "Joueurs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Votes_Matchs_MatchId",
                        column: x => x.MatchId,
                        principalTable: "Matchs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Classements_CompetitionId",
                table: "Classements",
                column: "CompetitionId");

            migrationBuilder.CreateIndex(
                name: "IX_Compositions_JoueurId",
                table: "Compositions",
                column: "JoueurId");

            migrationBuilder.CreateIndex(
                name: "IX_Compositions_MatchId",
                table: "Compositions",
                column: "MatchId");

            migrationBuilder.CreateIndex(
                name: "IX_Compositions_PosteId",
                table: "Compositions",
                column: "PosteId");

            migrationBuilder.CreateIndex(
                name: "IX_JoueurPoste_IdJoueur",
                table: "JoueurPoste",
                column: "IdJoueur");

            migrationBuilder.CreateIndex(
                name: "IX_JoueurPoste_IdPoste",
                table: "JoueurPoste",
                column: "IdPoste");

            migrationBuilder.CreateIndex(
                name: "IX_Matchs_CompetitionId",
                table: "Matchs",
                column: "CompetitionId");

            migrationBuilder.CreateIndex(
                name: "IX_Stats_JoueurId",
                table: "Stats",
                column: "JoueurId");

            migrationBuilder.CreateIndex(
                name: "IX_Stats_MatchId",
                table: "Stats",
                column: "MatchId");

            migrationBuilder.CreateIndex(
                name: "IX_Votes_JoueurId",
                table: "Votes",
                column: "JoueurId");

            migrationBuilder.CreateIndex(
                name: "IX_Votes_MatchId",
                table: "Votes",
                column: "MatchId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Actus");

            migrationBuilder.DropTable(
                name: "Classements");

            migrationBuilder.DropTable(
                name: "Compositions");

            migrationBuilder.DropTable(
                name: "JoueurPoste");

            migrationBuilder.DropTable(
                name: "NotificationClients");

            migrationBuilder.DropTable(
                name: "Stats");

            migrationBuilder.DropTable(
                name: "Votes");

            migrationBuilder.DropTable(
                name: "Postes");

            migrationBuilder.DropTable(
                name: "Joueurs");

            migrationBuilder.DropTable(
                name: "Matchs");

            migrationBuilder.DropTable(
                name: "Competitions");
        }
    }
}
