using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Resilience.Migrations
{
    /// <inheritdoc />
    public partial class removedManytoMany : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SexualAssaultReports");

            migrationBuilder.AddColumn<string>(
                name: "ActionsTaken",
                table: "Reports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Reports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "AloneOrWithSomeone",
                table: "Reports",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AssaultDescription",
                table: "Reports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "CCTVAvailable",
                table: "Reports",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "ChangedClothesOrShowered",
                table: "Reports",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "ClothesKept",
                table: "Reports",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfBirth",
                table: "Reports",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Reports",
                type: "character varying(21)",
                maxLength: 21,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "FeelsSafe",
                table: "Reports",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "Reports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IDNumber",
                table: "Reports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "IncidentDateTime",
                table: "Reports",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Injuries",
                table: "Reports",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsOtherEvidence",
                table: "Reports",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsSuspectKnown",
                table: "Reports",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LeadingEventsDescription",
                table: "Reports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "Reports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Occupation",
                table: "Reports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OtherEvidenceDescription",
                table: "Reports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "Reports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "PrefersFemaleOfficer",
                table: "Reports",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "ReceivedMedicalAttention",
                table: "Reports",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SuspectDescription",
                table: "Reports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SuspectName",
                table: "Reports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "WantsCounsellor",
                table: "Reports",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WeaponOrThreats",
                table: "Reports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "WillingForensicExam",
                table: "Reports",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WitnessDetails",
                table: "Reports",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "WitnessPresent",
                table: "Reports",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WordsSpokenBySuspect",
                table: "Reports",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ActionsTaken",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "AloneOrWithSomeone",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "AssaultDescription",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "CCTVAvailable",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "ChangedClothesOrShowered",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "ClothesKept",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "DateOfBirth",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "FeelsSafe",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "FullName",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "IDNumber",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "IncidentDateTime",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "Injuries",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "IsOtherEvidence",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "IsSuspectKnown",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "LeadingEventsDescription",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "Occupation",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "OtherEvidenceDescription",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "PrefersFemaleOfficer",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "ReceivedMedicalAttention",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "SuspectDescription",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "SuspectName",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "WantsCounsellor",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "WeaponOrThreats",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "WillingForensicExam",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "WitnessDetails",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "WitnessPresent",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "WordsSpokenBySuspect",
                table: "Reports");

            migrationBuilder.CreateTable(
                name: "SexualAssaultReports",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ReportId = table.Column<Guid>(type: "uuid", nullable: false),
                    ActionsTaken = table.Column<string>(type: "text", nullable: true),
                    Address = table.Column<string>(type: "text", nullable: true),
                    AloneOrWithSomeone = table.Column<bool>(type: "boolean", nullable: false),
                    AssaultDescription = table.Column<string>(type: "text", nullable: true),
                    CCTVAvailable = table.Column<bool>(type: "boolean", nullable: false),
                    ChangedClothesOrShowered = table.Column<bool>(type: "boolean", nullable: false),
                    ClothesKept = table.Column<bool>(type: "boolean", nullable: false),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    DeleterUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    FeelsSafe = table.Column<bool>(type: "boolean", nullable: false),
                    FullName = table.Column<string>(type: "text", nullable: true),
                    IDNumber = table.Column<string>(type: "text", nullable: true),
                    IncidentDateTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    Injuries = table.Column<bool>(type: "boolean", nullable: false),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    IsOtherEvidence = table.Column<bool>(type: "boolean", nullable: false),
                    IsSuspectKnown = table.Column<bool>(type: "boolean", nullable: false),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    LastModifierUserId = table.Column<long>(type: "bigint", nullable: true),
                    LeadingEventsDescription = table.Column<string>(type: "text", nullable: true),
                    Location = table.Column<string>(type: "text", nullable: true),
                    Occupation = table.Column<string>(type: "text", nullable: true),
                    OtherEvidenceDescription = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    PrefersFemaleOfficer = table.Column<bool>(type: "boolean", nullable: false),
                    ReceivedMedicalAttention = table.Column<bool>(type: "boolean", nullable: false),
                    SuspectDescription = table.Column<string>(type: "text", nullable: true),
                    SuspectName = table.Column<string>(type: "text", nullable: true),
                    WantsCounsellor = table.Column<bool>(type: "boolean", nullable: false),
                    WeaponOrThreats = table.Column<string>(type: "text", nullable: true),
                    WillingForensicExam = table.Column<bool>(type: "boolean", nullable: false),
                    WitnessDetails = table.Column<string>(type: "text", nullable: true),
                    WitnessPresent = table.Column<bool>(type: "boolean", nullable: false),
                    WordsSpokenBySuspect = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SexualAssaultReports", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SexualAssaultReports_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SexualAssaultReports_ReportId",
                table: "SexualAssaultReports",
                column: "ReportId",
                unique: true);
        }
    }
}
