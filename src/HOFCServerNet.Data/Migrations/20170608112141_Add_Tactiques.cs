using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HOFCServerNet.Data.Migrations
{
    public partial class Add_Tactiques : Migration
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
                    Nom = table.Column<string>(nullable: false)
                        .Annotation("MySql:ValueGeneratedOnAdd", true),
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

            migrationBuilder.AddColumn<string>(
                name: "TactiqueId",
                table: "Matchs",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Matchs_TactiqueId",
                table: "Matchs",
                column: "TactiqueId");

            migrationBuilder.AddForeignKey(
                name: "FK_Matchs_Tactiques_TactiqueId",
                table: "Matchs",
                column: "TactiqueId",
                principalTable: "Tactiques",
                principalColumn: "Nom",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Matchs_Tactiques_TactiqueId",
                table: "Matchs");

            migrationBuilder.DropIndex(
                name: "IX_Matchs_TactiqueId",
                table: "Matchs");

            migrationBuilder.DropColumn(
                name: "TactiqueId",
                table: "Matchs");

            migrationBuilder.DropTable(
                name: "Tactiques");

            migrationBuilder.CreateIndex(
                name: "IX_JoueurPoste_IdJoueur",
                table: "JoueurPoste",
                column: "IdJoueur");
        }
    }
}
