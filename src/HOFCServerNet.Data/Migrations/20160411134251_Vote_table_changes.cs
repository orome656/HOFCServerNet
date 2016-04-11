using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace HOFCServerNet.Migrations
{
    public partial class Vote_table_changes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Joueur_IdJoueur", table: "JoueurPoste");
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Poste_IdPoste", table: "JoueurPoste");
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Vote",
                nullable: true);
            migrationBuilder.AddColumn<int>(
                name: "VoteStatut",
                table: "Match",
                nullable: false,
                defaultValue: 0);
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
            migrationBuilder.DropColumn(name: "UserId", table: "Vote");
            migrationBuilder.DropColumn(name: "VoteStatut", table: "Match");
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
