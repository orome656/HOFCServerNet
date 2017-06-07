using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HOFCServerNet.Data.Migrations
{
    public partial class Addtactiques : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_JoueurPoste_IdJoueur",
                table: "JoueurPoste");

            migrationBuilder.CreateTable(
                name: "Tactiques",
                columns: table => new
                {
                    Nom = table.Column<string>(nullable: false),
                    NbAID = table.Column<int>(nullable: false),
                    NbAIG = table.Column<int>(nullable: false),
                    NbBT = table.Column<int>(nullable: false),
                    NbDC = table.Column<int>(nullable: false),
                    NbDD = table.Column<int>(nullable: false),
                    NbDG = table.Column<int>(nullable: false),
                    NbMC = table.Column<int>(nullable: false),
                    NbMD = table.Column<int>(nullable: false),
                    NbMDF = table.Column<int>(nullable: false),
                    NbMG = table.Column<int>(nullable: false),
                    NbMO = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tactiques", x => x.Nom);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tactiques");

            migrationBuilder.CreateIndex(
                name: "IX_JoueurPoste_IdJoueur",
                table: "JoueurPoste",
                column: "IdJoueur");
        }
    }
}
