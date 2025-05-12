using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Resilience.Migrations
{
    /// <inheritdoc />
    public partial class RemovedManyToManyRelationShips : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SexualAssaultReports_Persons_PersonId",
                table: "SexualAssaultReports");

            migrationBuilder.DropForeignKey(
                name: "FK_SexualAssaultReports_SexualAssaultReports_ReportId",
                table: "SexualAssaultReports");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SexualAssaultReports",
                table: "SexualAssaultReports");

            migrationBuilder.DropIndex(
                name: "IX_SexualAssaultReports_PersonId",
                table: "SexualAssaultReports");

            migrationBuilder.DropColumn(
                name: "PersonId",
                table: "SexualAssaultReports");

            migrationBuilder.RenameTable(
                name: "SexualAssaultReports",
                newName: "Report");

            migrationBuilder.RenameIndex(
                name: "IX_SexualAssaultReports_ReportId",
                table: "Report",
                newName: "IX_Report_ReportId");

            migrationBuilder.AlterColumn<bool>(
                name: "WitnessPresent",
                table: "Report",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AlterColumn<bool>(
                name: "WillingForensicExam",
                table: "Report",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AlterColumn<bool>(
                name: "WantsCounsellor",
                table: "Report",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AlterColumn<long>(
                name: "ReportStatus",
                table: "Report",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "ReportId",
                table: "Report",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AlterColumn<bool>(
                name: "ReceivedMedicalAttention",
                table: "Report",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AlterColumn<bool>(
                name: "PrefersFemaleOfficer",
                table: "Report",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AlterColumn<bool>(
                name: "IsSuspectKnown",
                table: "Report",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AlterColumn<bool>(
                name: "IsSharedWithAuthorities",
                table: "Report",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "IsOtherEvidence",
                table: "Report",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AlterColumn<bool>(
                name: "Injuries",
                table: "Report",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AlterColumn<bool>(
                name: "FeelsSafe",
                table: "Report",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AlterColumn<bool>(
                name: "ClothesKept",
                table: "Report",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AlterColumn<bool>(
                name: "ChangedClothesOrShowered",
                table: "Report",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AlterColumn<bool>(
                name: "CCTVAvailable",
                table: "Report",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AlterColumn<bool>(
                name: "AloneOrWithSomeone",
                table: "Report",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Report",
                table: "Report",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Report_Report_ReportId",
                table: "Report",
                column: "ReportId",
                principalTable: "Report",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Report_Report_ReportId",
                table: "Report");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Report",
                table: "Report");

            migrationBuilder.RenameTable(
                name: "Report",
                newName: "SexualAssaultReports");

            migrationBuilder.RenameIndex(
                name: "IX_Report_ReportId",
                table: "SexualAssaultReports",
                newName: "IX_SexualAssaultReports_ReportId");

            migrationBuilder.AlterColumn<bool>(
                name: "WitnessPresent",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "WillingForensicExam",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "WantsCounsellor",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "ReportStatus",
                table: "SexualAssaultReports",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AlterColumn<Guid>(
                name: "ReportId",
                table: "SexualAssaultReports",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "ReceivedMedicalAttention",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "PrefersFemaleOfficer",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "IsSuspectKnown",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "IsSharedWithAuthorities",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");

            migrationBuilder.AlterColumn<bool>(
                name: "IsOtherEvidence",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "Injuries",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "FeelsSafe",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "ClothesKept",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "ChangedClothesOrShowered",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "CCTVAvailable",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "AloneOrWithSomeone",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "PersonId",
                table: "SexualAssaultReports",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_SexualAssaultReports",
                table: "SexualAssaultReports",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_SexualAssaultReports_PersonId",
                table: "SexualAssaultReports",
                column: "PersonId");

            migrationBuilder.AddForeignKey(
                name: "FK_SexualAssaultReports_Persons_PersonId",
                table: "SexualAssaultReports",
                column: "PersonId",
                principalTable: "Persons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SexualAssaultReports_SexualAssaultReports_ReportId",
                table: "SexualAssaultReports",
                column: "ReportId",
                principalTable: "SexualAssaultReports",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
