using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HOFCServerNet.Data.Migrations
{
    public partial class Addmatchinfosindatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MatchInfos",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false)
                        .Annotation("MySql:ValueGeneratedOnAdd", true),
                    Adresse = table.Column<string>(nullable: true),
                    ArbitresString = table.Column<string>(nullable: true),
                    MatchId = table.Column<int>(nullable: false),
                    Nom = table.Column<string>(nullable: true),
                    Ville = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MatchInfos", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MatchInfos");
        }
    }
}
