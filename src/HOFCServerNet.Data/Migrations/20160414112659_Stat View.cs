using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;
using Microsoft.Data.Entity.Metadata;

namespace HOFCServerNet.Migrations
{
    public partial class StatView : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Joueur_IdJoueur", table: "JoueurPoste");
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Poste_IdPoste", table: "JoueurPoste");
            migrationBuilder.DropForeignKey(name: "FK_Vote_Joueur_JoueurId", table: "Vote");
            migrationBuilder.DropForeignKey(name: "FK_Vote_Match_MatchId", table: "Vote");
            migrationBuilder.CreateTable(
                name: "Stat",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    JoueurId = table.Column<int>(nullable: true),
                    MatchId = table.Column<int>(nullable: true),
                    Nombre = table.Column<int>(nullable: false),
                    TypeStat = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stat", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Stat_Joueur_JoueurId",
                        column: x => x.JoueurId,
                        principalTable: "Joueur",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Stat_Match_MatchId",
                        column: x => x.MatchId,
                        principalTable: "Match",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });
            migrationBuilder.AlterColumn<int>(
                name: "MatchId",
                table: "Vote",
                nullable: false);
            migrationBuilder.AlterColumn<int>(
                name: "JoueurId",
                table: "Vote",
                nullable: false);
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
            migrationBuilder.AddForeignKey(
                name: "FK_Vote_Joueur_JoueurId",
                table: "Vote",
                column: "JoueurId",
                principalTable: "Joueur",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
            migrationBuilder.AddForeignKey(
                name: "FK_Vote_Match_MatchId",
                table: "Vote",
                column: "MatchId",
                principalTable: "Match",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Joueur_IdJoueur", table: "JoueurPoste");
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Poste_IdPoste", table: "JoueurPoste");
            migrationBuilder.DropForeignKey(name: "FK_Vote_Joueur_JoueurId", table: "Vote");
            migrationBuilder.DropForeignKey(name: "FK_Vote_Match_MatchId", table: "Vote");
            migrationBuilder.DropTable("Stat");
            migrationBuilder.AlterColumn<int>(
                name: "MatchId",
                table: "Vote",
                nullable: true);
            migrationBuilder.AlterColumn<int>(
                name: "JoueurId",
                table: "Vote",
                nullable: true);
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
            migrationBuilder.AddForeignKey(
                name: "FK_Vote_Joueur_JoueurId",
                table: "Vote",
                column: "JoueurId",
                principalTable: "Joueur",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
            migrationBuilder.AddForeignKey(
                name: "FK_Vote_Match_MatchId",
                table: "Vote",
                column: "MatchId",
                principalTable: "Match",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
