using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HOFCServerNet.Data.Migrations
{
    public partial class ActuDetails : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Contenu",
                table: "Actus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhotosString",
                table: "Actus",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Contenu",
                table: "Actus");

            migrationBuilder.DropColumn(
                name: "PhotosString",
                table: "Actus");
        }
    }
}
