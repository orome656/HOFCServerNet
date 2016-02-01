using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;
using Microsoft.Data.Entity.Metadata;

namespace HOFCServerNet.Migrations
{
    public partial class DatabaseRefactoringRemoveduplicates : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable("Agenda");
            migrationBuilder.DropTable("Calendrier");
            migrationBuilder.DropTable("Journee");
            migrationBuilder.CreateTable(
                name: "Competition",
                columns: table => new
                {
                    Nom = table.Column<string>(nullable: false),
                    Categorie = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Competition", x => x.Nom);
                });
            migrationBuilder.CreateTable(
                name: "Match",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Categorie = table.Column<string>(nullable: true),
                    CompetitionId = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    Equipe1 = table.Column<string>(nullable: true),
                    Equipe2 = table.Column<string>(nullable: true),
                    IdJournee = table.Column<int>(nullable: true),
                    InfosId = table.Column<string>(nullable: true),
                    Score1 = table.Column<int>(nullable: true),
                    Score2 = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Match", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Match_Competition_CompetitionId",
                        column: x => x.CompetitionId,
                        principalTable: "Competition",
                        principalColumn: "Nom",
                        onDelete: ReferentialAction.Restrict);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable("Match");
            migrationBuilder.DropTable("Competition");
            migrationBuilder.CreateTable(
                name: "Agenda",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Date = table.Column<DateTime>(nullable: false),
                    Equipe1 = table.Column<string>(nullable: true),
                    Equipe2 = table.Column<string>(nullable: true),
                    InfosId = table.Column<string>(nullable: true),
                    Score1 = table.Column<int>(nullable: true),
                    Score2 = table.Column<int>(nullable: true),
                    Semaine = table.Column<string>(nullable: true),
                    Titre = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Agenda", x => x.Id);
                });
            migrationBuilder.CreateTable(
                name: "Calendrier",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Categorie = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    Equipe1 = table.Column<string>(nullable: true),
                    Equipe2 = table.Column<string>(nullable: true),
                    Score1 = table.Column<int>(nullable: true),
                    Score2 = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Calendrier", x => x.Id);
                });
            migrationBuilder.CreateTable(
                name: "Journee",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Categorie = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    Equipe1 = table.Column<string>(nullable: true),
                    Equipe2 = table.Column<string>(nullable: true),
                    IdJournee = table.Column<int>(nullable: false),
                    InfosId = table.Column<string>(nullable: true),
                    Score1 = table.Column<int>(nullable: true),
                    Score2 = table.Column<int>(nullable: true),
                    Titre = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Journee", x => x.Id);
                });
        }
    }
}
