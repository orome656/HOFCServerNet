using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;
using Microsoft.Data.Entity.Metadata;

namespace HOFCServerNet.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Actu",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Date = table.Column<DateTime>(nullable: false),
                    ImageURL = table.Column<string>(nullable: true),
                    PostId = table.Column<int>(nullable: false),
                    Texte = table.Column<string>(nullable: true),
                    Titre = table.Column<string>(nullable: true),
                    URL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Actu", x => x.Id);
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
                    Score1 = table.Column<int>(nullable: false),
                    Score2 = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Calendrier", x => x.Id);
                });
            migrationBuilder.CreateTable(
                name: "Classement",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Bc = table.Column<int>(nullable: false),
                    Bp = table.Column<int>(nullable: false),
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
                    table.PrimaryKey("PK_Classement", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable("Actu");
            migrationBuilder.DropTable("Calendrier");
            migrationBuilder.DropTable("Classement");
        }
    }
}
