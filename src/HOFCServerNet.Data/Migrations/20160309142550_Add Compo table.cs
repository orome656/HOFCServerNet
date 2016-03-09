using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;
using Microsoft.Data.Entity.Metadata;

namespace HOFCServerNet.Migrations
{
    public partial class AddCompotable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Joueur_IdJoueur", table: "JoueurPoste");
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Poste_IdPoste", table: "JoueurPoste");
            migrationBuilder.CreateTable(
                name: "Composition",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    JoueurId = table.Column<int>(nullable: true),
                    MatchId = table.Column<int>(nullable: true),
                    PosteId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Composition", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Composition_Joueur_JoueurId",
                        column: x => x.JoueurId,
                        principalTable: "Joueur",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Composition_Match_MatchId",
                        column: x => x.MatchId,
                        principalTable: "Match",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Composition_Poste_PosteId",
                        column: x => x.PosteId,
                        principalTable: "Poste",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });
            migrationBuilder.AddForeignKey(
                name: "FK_JoueurPoste_Joueur_IdJoueur",
                table: "JoueurPoste",
                column: "IdJoueur",
                principalTable: "Joueur",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
            migrationBuilder.AddForeignKey(
                name: "FK_JoueurPoste_Poste_IdPoste",
                table: "JoueurPoste",
                column: "IdPoste",
                principalTable: "Poste",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Joueur_IdJoueur", table: "JoueurPoste");
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Poste_IdPoste", table: "JoueurPoste");
            migrationBuilder.DropTable("Composition");
            migrationBuilder.AddForeignKey(
                name: "FK_JoueurPoste_Joueur_IdJoueur",
                table: "JoueurPoste",
                column: "IdJoueur",
                principalTable: "Joueur",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
            migrationBuilder.AddForeignKey(
                name: "FK_JoueurPoste_Poste_IdPoste",
                table: "JoueurPoste",
                column: "IdPoste",
                principalTable: "Poste",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
