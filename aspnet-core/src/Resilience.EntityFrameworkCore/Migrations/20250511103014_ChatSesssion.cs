using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Resilience.Migrations
{
    /// <inheritdoc />
    public partial class ChatSesssion : Migration
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

            migrationBuilder.CreateTable(
                name: "ChatMessages",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    SenderPersonId = table.Column<Guid>(type: "uuid", nullable: false),
                    SenderId = table.Column<Guid>(type: "uuid", nullable: true),
                    ReceiverPersonId = table.Column<Guid>(type: "uuid", nullable: false),
                    ReceiverId = table.Column<Guid>(type: "uuid", nullable: true),
                    Content = table.Column<string>(type: "text", nullable: false),
                    IsRead = table.Column<bool>(type: "boolean", nullable: false),
                    SentAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ChatSessionId = table.Column<Guid>(type: "uuid", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    LastModifierUserId = table.Column<long>(type: "bigint", nullable: true),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    DeleterUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChatMessages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChatMessages_Persons_ReceiverId",
                        column: x => x.ReceiverId,
                        principalTable: "Persons",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ChatMessages_Persons_SenderId",
                        column: x => x.SenderId,
                        principalTable: "Persons",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ChatMessages_ReceiverId",
                table: "ChatMessages",
                column: "ReceiverId");

            migrationBuilder.CreateIndex(
                name: "IX_ChatMessages_SenderId",
                table: "ChatMessages",
                column: "SenderId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ChatMessages");

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
