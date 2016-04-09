using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace HOFCServerNet.Migrations
{
    public partial class AddStatsTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Joueur_IdJoueur", table: "JoueurPoste");
            migrationBuilder.DropForeignKey(name: "FK_JoueurPoste_Poste_IdPoste", table: "JoueurPoste");
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
