using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Resilience.Migrations
{
    /// <inheritdoc />
    public partial class ReportInheritsSexualReport : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_JournalEntries_ProgressTrackers_ProgressTrackerId",
                table: "JournalEntries");

            migrationBuilder.DropForeignKey(
                name: "FK_MoodEntries_ProgressTrackers_ProgressTrackerId",
                table: "MoodEntries");

            migrationBuilder.DropForeignKey(
                name: "FK_ProgressTrackers_Persons_PersonId",
                table: "ProgressTrackers");

            migrationBuilder.DropForeignKey(
                name: "FK_SexualAssaultReports_Reports_ReportId",
                table: "SexualAssaultReports");

            migrationBuilder.DropTable(
                name: "Reports");

            migrationBuilder.DropIndex(
                name: "IX_SexualAssaultReports_ReportId",
                table: "SexualAssaultReports");

            migrationBuilder.DropIndex(
                name: "IX_ProgressTrackers_PersonId",
                table: "ProgressTrackers");

            migrationBuilder.DropIndex(
                name: "IX_MoodEntries_ProgressTrackerId",
                table: "MoodEntries");

            migrationBuilder.DropIndex(
                name: "IX_JournalEntries_ProgressTrackerId",
                table: "JournalEntries");

            migrationBuilder.DropColumn(
                name: "PersonId",
                table: "ProgressTrackers");

            migrationBuilder.DropColumn(
                name: "ProgressTrackerId",
                table: "MoodEntries");

            migrationBuilder.DropColumn(
                name: "ProgressTrackerId",
                table: "JournalEntries");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "SexualAssaultReports",
                type: "character varying(21)",
                maxLength: 21,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "EncryptedContent",
                table: "SexualAssaultReports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FileReference",
                table: "SexualAssaultReports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsSharedWithAuthorities",
                table: "SexualAssaultReports",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "PersonId",
                table: "SexualAssaultReports",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "ReportStatus",
                table: "SexualAssaultReports",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ReportStatusText",
                table: "SexualAssaultReports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "SharedDate",
                table: "SexualAssaultReports",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_SexualAssaultReports_PersonId",
                table: "SexualAssaultReports",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_SexualAssaultReports_ReportId",
                table: "SexualAssaultReports",
                column: "ReportId");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SexualAssaultReports_Persons_PersonId",
                table: "SexualAssaultReports");

            migrationBuilder.DropForeignKey(
                name: "FK_SexualAssaultReports_SexualAssaultReports_ReportId",
                table: "SexualAssaultReports");

            migrationBuilder.DropIndex(
                name: "IX_SexualAssaultReports_PersonId",
                table: "SexualAssaultReports");

            migrationBuilder.DropIndex(
                name: "IX_SexualAssaultReports_ReportId",
                table: "SexualAssaultReports");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "SexualAssaultReports");

            migrationBuilder.DropColumn(
                name: "EncryptedContent",
                table: "SexualAssaultReports");

            migrationBuilder.DropColumn(
                name: "FileReference",
                table: "SexualAssaultReports");

            migrationBuilder.DropColumn(
                name: "IsSharedWithAuthorities",
                table: "SexualAssaultReports");

            migrationBuilder.DropColumn(
                name: "PersonId",
                table: "SexualAssaultReports");

            migrationBuilder.DropColumn(
                name: "ReportStatus",
                table: "SexualAssaultReports");

            migrationBuilder.DropColumn(
                name: "ReportStatusText",
                table: "SexualAssaultReports");

            migrationBuilder.DropColumn(
                name: "SharedDate",
                table: "SexualAssaultReports");

            migrationBuilder.AddColumn<Guid>(
                name: "PersonId",
                table: "ProgressTrackers",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "ProgressTrackerId",
                table: "MoodEntries",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ProgressTrackerId",
                table: "JournalEntries",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Reports",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PersonId = table.Column<Guid>(type: "uuid", nullable: false),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeleterUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    EncryptedContent = table.Column<string>(type: "text", nullable: true),
                    FileReference = table.Column<string>(type: "text", nullable: true),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    IsSharedWithAuthorities = table.Column<bool>(type: "boolean", nullable: false),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    LastModifierUserId = table.Column<long>(type: "bigint", nullable: true),
                    ReportStatus = table.Column<long>(type: "bigint", nullable: false),
                    ReportStatusText = table.Column<string>(type: "text", nullable: true),
                    SharedDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reports", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reports_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SexualAssaultReports_ReportId",
                table: "SexualAssaultReports",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProgressTrackers_PersonId",
                table: "ProgressTrackers",
                column: "PersonId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MoodEntries_ProgressTrackerId",
                table: "MoodEntries",
                column: "ProgressTrackerId");

            migrationBuilder.CreateIndex(
                name: "IX_JournalEntries_ProgressTrackerId",
                table: "JournalEntries",
                column: "ProgressTrackerId");

            migrationBuilder.CreateIndex(
                name: "IX_Reports_PersonId",
                table: "Reports",
                column: "PersonId");

            migrationBuilder.AddForeignKey(
                name: "FK_JournalEntries_ProgressTrackers_ProgressTrackerId",
                table: "JournalEntries",
                column: "ProgressTrackerId",
                principalTable: "ProgressTrackers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MoodEntries_ProgressTrackers_ProgressTrackerId",
                table: "MoodEntries",
                column: "ProgressTrackerId",
                principalTable: "ProgressTrackers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProgressTrackers_Persons_PersonId",
                table: "ProgressTrackers",
                column: "PersonId",
                principalTable: "Persons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SexualAssaultReports_Reports_ReportId",
                table: "SexualAssaultReports",
                column: "ReportId",
                principalTable: "Reports",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
