using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace HOFCServerNet.Migrations
{
    public partial class Remove_Categorie_From_Match : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "Categorie", table: "Match");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Categorie",
                table: "Match",
                nullable: true);
        }
    }
}
