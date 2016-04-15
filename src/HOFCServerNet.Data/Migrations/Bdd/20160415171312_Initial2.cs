using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace HOFCServerNet.Data.Migrations.Bdd
{
    public partial class Initial2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Joueur_IdJoueur", table: "JoueurPoste");
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Poste_IdPoste", table: "JoueurPoste");
            migrationBuilder.DropForeignKey(name: "FK_Match_Competition_CompetitionId", table: "Match");
            migrationBuilder.DropForeignKey(name: "FK_Stat_Joueur_JoueurId", table: "Stat");
            migrationBuilder.DropForeignKey(name: "FK_Stat_Match_MatchId", table: "Stat");
            migrationBuilder.DropForeignKey(name: "FK_Vote_Joueur_JoueurId", table: "Vote");
            migrationBuilder.DropForeignKey(name: "FK_Vote_Match_MatchId", table: "Vote");
            migrationBuilder.AddColumn<int>(
                name: "CompetitionId",
                table: "Classement",
                nullable: true);
            migrationBuilder.AddForeignKey(
                name: "FK_Classement_Competition_CompetitionId",
                table: "Classement",
                column: "CompetitionId",
                principalTable: "Competition",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
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
                name: "FK_Match_Competition_CompetitionId",
                table: "Match",
                column: "CompetitionId",
                principalTable: "Competition",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
            migrationBuilder.AddForeignKey(
                name: "FK_Stat_Joueur_JoueurId",
                table: "Stat",
                column: "JoueurId",
                principalTable: "Joueur",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
            migrationBuilder.AddForeignKey(
                name: "FK_Stat_Match_MatchId",
                table: "Stat",
                column: "MatchId",
                principalTable: "Match",
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
            migrationBuilder.DropForeignKey(name: "FK_Classement_Competition_CompetitionId", table: "Classement");
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Joueur_IdJoueur", table: "JoueurPoste");
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Poste_IdPoste", table: "JoueurPoste");
            migrationBuilder.DropForeignKey(name: "FK_Match_Competition_CompetitionId", table: "Match");
            migrationBuilder.DropForeignKey(name: "FK_Stat_Joueur_JoueurId", table: "Stat");
            migrationBuilder.DropForeignKey(name: "FK_Stat_Match_MatchId", table: "Stat");
            migrationBuilder.DropForeignKey(name: "FK_Vote_Joueur_JoueurId", table: "Vote");
            migrationBuilder.DropForeignKey(name: "FK_Vote_Match_MatchId", table: "Vote");
            migrationBuilder.DropColumn(name: "CompetitionId", table: "Classement");
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
                name: "FK_Match_Competition_CompetitionId",
                table: "Match",
                column: "CompetitionId",
                principalTable: "Competition",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
            migrationBuilder.AddForeignKey(
                name: "FK_Stat_Joueur_JoueurId",
                table: "Stat",
                column: "JoueurId",
                principalTable: "Joueur",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
            migrationBuilder.AddForeignKey(
                name: "FK_Stat_Match_MatchId",
                table: "Stat",
                column: "MatchId",
                principalTable: "Match",
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
