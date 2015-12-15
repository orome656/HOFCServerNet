using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace HOFCServerNet.Migrations
{
    public partial class Nullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Categorie",
                table: "Classement",
                nullable: true);
            migrationBuilder.AlterColumn<int>(
                name: "Score2",
                table: "Calendrier",
                nullable: true);
            migrationBuilder.AlterColumn<int>(
                name: "Score1",
                table: "Calendrier",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "Categorie", table: "Classement");
            migrationBuilder.AlterColumn<int>(
                name: "Score2",
                table: "Calendrier",
                nullable: false);
            migrationBuilder.AlterColumn<int>(
                name: "Score1",
                table: "Calendrier",
                nullable: false);
        }
    }
}
