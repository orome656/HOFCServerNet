using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;
using Microsoft.Data.Entity.Metadata;

namespace HOFCServerNet.Migrations
{
    public partial class JourneeDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable("Journee");
        }
    }
}
