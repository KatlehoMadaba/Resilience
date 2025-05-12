using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Resilience.Migrations
{
    /// <inheritdoc />
    public partial class anonymousIsnullable : Migration
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

            migrationBuilder.AlterColumn<bool>(
                name: "IsAnonymous",
                table: "Persons",
                type: "boolean",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "boolean");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "PersonId",
                table: "ProgressTrackers",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AlterColumn<bool>(
                name: "IsAnonymous",
                table: "Persons",
                type: "boolean",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "boolean",
                oldNullable: true);

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
        }
    }
}
