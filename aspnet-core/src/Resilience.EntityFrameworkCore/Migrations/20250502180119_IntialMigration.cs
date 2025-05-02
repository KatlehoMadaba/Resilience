using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Resilience.Migrations
{
    /// <inheritdoc />
    public partial class IntialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AbpAuditLogs",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    UserId = table.Column<long>(type: "bigint", nullable: true),
                    ServiceName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    MethodName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    Parameters = table.Column<string>(type: "character varying(2048)", maxLength: 2048, nullable: true),
                    ReturnValue = table.Column<string>(type: "text", nullable: true),
                    ExecutionTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ExecutionDuration = table.Column<int>(type: "integer", nullable: false),
                    ClientIpAddress = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: true),
                    ClientName = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: true),
                    BrowserInfo = table.Column<string>(type: "character varying(512)", maxLength: 512, nullable: true),
                    ExceptionMessage = table.Column<string>(type: "character varying(1024)", maxLength: 1024, nullable: true),
                    Exception = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: true),
                    ImpersonatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    ImpersonatorTenantId = table.Column<int>(type: "integer", nullable: true),
                    CustomData = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpAuditLogs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpBackgroundJobs",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    JobType = table.Column<string>(type: "character varying(512)", maxLength: 512, nullable: false),
                    JobArgs = table.Column<string>(type: "character varying(1048576)", maxLength: 1048576, nullable: false),
                    TryCount = table.Column<short>(type: "smallint", nullable: false),
                    NextTryTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    LastTryTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    IsAbandoned = table.Column<bool>(type: "boolean", nullable: false),
                    Priority = table.Column<byte>(type: "smallint", nullable: false),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpBackgroundJobs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpDynamicProperties",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    PropertyName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    DisplayName = table.Column<string>(type: "text", nullable: true),
                    InputType = table.Column<string>(type: "text", nullable: true),
                    Permission = table.Column<string>(type: "text", nullable: true),
                    TenantId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpDynamicProperties", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpEditions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    DisplayName = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: false),
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
                    table.PrimaryKey("PK_AbpEditions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpEntityChangeSets",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    BrowserInfo = table.Column<string>(type: "character varying(512)", maxLength: 512, nullable: true),
                    ClientIpAddress = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: true),
                    ClientName = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ExtensionData = table.Column<string>(type: "text", nullable: true),
                    ImpersonatorTenantId = table.Column<int>(type: "integer", nullable: true),
                    ImpersonatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    Reason = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    UserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpEntityChangeSets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpLanguages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    Name = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    DisplayName = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: false),
                    Icon = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: true),
                    IsDisabled = table.Column<bool>(type: "boolean", nullable: false),
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
                    table.PrimaryKey("PK_AbpLanguages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpLanguageTexts",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    LanguageName = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    Source = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    Key = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: false),
                    Value = table.Column<string>(type: "text", maxLength: 67108864, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    LastModifierUserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpLanguageTexts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpNotifications",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    NotificationName = table.Column<string>(type: "character varying(96)", maxLength: 96, nullable: false),
                    Data = table.Column<string>(type: "character varying(1048576)", maxLength: 1048576, nullable: true),
                    DataTypeName = table.Column<string>(type: "character varying(512)", maxLength: 512, nullable: true),
                    EntityTypeName = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: true),
                    EntityTypeAssemblyQualifiedName = table.Column<string>(type: "character varying(512)", maxLength: 512, nullable: true),
                    EntityId = table.Column<string>(type: "character varying(96)", maxLength: 96, nullable: true),
                    Severity = table.Column<byte>(type: "smallint", nullable: false),
                    UserIds = table.Column<string>(type: "character varying(131072)", maxLength: 131072, nullable: true),
                    ExcludedUserIds = table.Column<string>(type: "character varying(131072)", maxLength: 131072, nullable: true),
                    TenantIds = table.Column<string>(type: "character varying(131072)", maxLength: 131072, nullable: true),
                    TargetNotifiers = table.Column<string>(type: "character varying(1024)", maxLength: 1024, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpNotifications", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpNotificationSubscriptions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    NotificationName = table.Column<string>(type: "character varying(96)", maxLength: 96, nullable: true),
                    EntityTypeName = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: true),
                    EntityTypeAssemblyQualifiedName = table.Column<string>(type: "character varying(512)", maxLength: 512, nullable: true),
                    EntityId = table.Column<string>(type: "character varying(96)", maxLength: 96, nullable: true),
                    TargetNotifiers = table.Column<string>(type: "character varying(1024)", maxLength: 1024, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpNotificationSubscriptions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpOrganizationUnitRoles",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    RoleId = table.Column<int>(type: "integer", nullable: false),
                    OrganizationUnitId = table.Column<long>(type: "bigint", nullable: false),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpOrganizationUnitRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpOrganizationUnits",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    ParentId = table.Column<long>(type: "bigint", nullable: true),
                    Code = table.Column<string>(type: "character varying(95)", maxLength: 95, nullable: false),
                    DisplayName = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
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
                    table.PrimaryKey("PK_AbpOrganizationUnits", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpOrganizationUnits_AbpOrganizationUnits_ParentId",
                        column: x => x.ParentId,
                        principalTable: "AbpOrganizationUnits",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AbpTenantNotifications",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    NotificationName = table.Column<string>(type: "character varying(96)", maxLength: 96, nullable: false),
                    Data = table.Column<string>(type: "character varying(1048576)", maxLength: 1048576, nullable: true),
                    DataTypeName = table.Column<string>(type: "character varying(512)", maxLength: 512, nullable: true),
                    EntityTypeName = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: true),
                    EntityTypeAssemblyQualifiedName = table.Column<string>(type: "character varying(512)", maxLength: 512, nullable: true),
                    EntityId = table.Column<string>(type: "character varying(96)", maxLength: 96, nullable: true),
                    Severity = table.Column<byte>(type: "smallint", nullable: false),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpTenantNotifications", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpUserAccounts",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    UserLinkId = table.Column<long>(type: "bigint", nullable: true),
                    UserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    EmailAddress = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
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
                    table.PrimaryKey("PK_AbpUserAccounts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpUserLoginAttempts",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    TenancyName = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: true),
                    UserId = table.Column<long>(type: "bigint", nullable: true),
                    UserNameOrEmailAddress = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    ClientIpAddress = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: true),
                    ClientName = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: true),
                    BrowserInfo = table.Column<string>(type: "character varying(512)", maxLength: 512, nullable: true),
                    Result = table.Column<byte>(type: "smallint", nullable: false),
                    FailReason = table.Column<string>(type: "character varying(1024)", maxLength: 1024, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpUserLoginAttempts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpUserNotifications",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    TenantNotificationId = table.Column<Guid>(type: "uuid", nullable: false),
                    State = table.Column<int>(type: "integer", nullable: false),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    TargetNotifiers = table.Column<string>(type: "character varying(1024)", maxLength: 1024, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpUserNotifications", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpUserOrganizationUnits",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    OrganizationUnitId = table.Column<long>(type: "bigint", nullable: false),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpUserOrganizationUnits", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpUsers",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    LastModifierUserId = table.Column<long>(type: "bigint", nullable: true),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    DeleterUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    AuthenticationSource = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: true),
                    UserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: false),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    EmailAddress = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: false),
                    Name = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: false),
                    Surname = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: false),
                    Password = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    EmailConfirmationCode = table.Column<string>(type: "character varying(328)", maxLength: 328, nullable: true),
                    PasswordResetCode = table.Column<string>(type: "character varying(328)", maxLength: 328, nullable: true),
                    LockoutEndDateUtc = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    AccessFailedCount = table.Column<int>(type: "integer", nullable: false),
                    IsLockoutEnabled = table.Column<bool>(type: "boolean", nullable: false),
                    PhoneNumber = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: true),
                    IsPhoneNumberConfirmed = table.Column<bool>(type: "boolean", nullable: false),
                    SecurityStamp = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: true),
                    IsTwoFactorEnabled = table.Column<bool>(type: "boolean", nullable: false),
                    IsEmailConfirmed = table.Column<bool>(type: "boolean", nullable: false),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    NormalizedUserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: false),
                    NormalizedEmailAddress = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpUsers_AbpUsers_CreatorUserId",
                        column: x => x.CreatorUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AbpUsers_AbpUsers_DeleterUserId",
                        column: x => x.DeleterUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AbpUsers_AbpUsers_LastModifierUserId",
                        column: x => x.LastModifierUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AbpWebhookEvents",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    WebhookName = table.Column<string>(type: "text", nullable: false),
                    Data = table.Column<string>(type: "text", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    DeletionTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpWebhookEvents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpWebhookSubscriptions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    WebhookUri = table.Column<string>(type: "text", nullable: false),
                    Secret = table.Column<string>(type: "text", nullable: false),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    Webhooks = table.Column<string>(type: "text", nullable: true),
                    Headers = table.Column<string>(type: "text", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpWebhookSubscriptions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CheckLists",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    TargetUserType = table.Column<string>(type: "text", nullable: true),
                    IsImmediate = table.Column<bool>(type: "boolean", nullable: false),
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
                    table.PrimaryKey("PK_CheckLists", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MedicalFacilitys",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Address = table.Column<string>(type: "text", nullable: true),
                    City = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    HasRapeKit = table.Column<bool>(type: "boolean", nullable: false),
                    State = table.Column<string>(type: "text", nullable: true),
                    PostalCode = table.Column<string>(type: "text", nullable: true),
                    Country = table.Column<string>(type: "text", nullable: true),
                    FacilityType = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    PlaceId = table.Column<string>(type: "text", nullable: true),
                    Latitude = table.Column<double>(type: "double precision", nullable: false),
                    Longitude = table.Column<double>(type: "double precision", nullable: false),
                    GoogleMapsUrl = table.Column<string>(type: "text", nullable: true),
                    AdditionalInfo = table.Column<string>(type: "text", nullable: true),
                    OperatingHours = table.Column<string>(type: "text", nullable: true),
                    SupportAllGenders = table.Column<bool>(type: "boolean", nullable: false),
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
                    table.PrimaryKey("PK_MedicalFacilitys", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PoliceStations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Address = table.Column<string>(type: "text", nullable: true),
                    City = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    State = table.Column<string>(type: "text", nullable: true),
                    PlaceId = table.Column<string>(type: "text", nullable: true),
                    Latitude = table.Column<double>(type: "double precision", nullable: false),
                    Longitude = table.Column<double>(type: "double precision", nullable: false),
                    GoogleMapsUrl = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_PoliceStations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AbpDynamicEntityProperties",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    EntityFullName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    DynamicPropertyId = table.Column<int>(type: "integer", nullable: false),
                    TenantId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpDynamicEntityProperties", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpDynamicEntityProperties_AbpDynamicProperties_DynamicProp~",
                        column: x => x.DynamicPropertyId,
                        principalTable: "AbpDynamicProperties",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AbpDynamicPropertyValues",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Value = table.Column<string>(type: "text", nullable: false),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    DynamicPropertyId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpDynamicPropertyValues", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpDynamicPropertyValues_AbpDynamicProperties_DynamicProper~",
                        column: x => x.DynamicPropertyId,
                        principalTable: "AbpDynamicProperties",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AbpFeatures",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    Name = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    Value = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: false),
                    Discriminator = table.Column<string>(type: "character varying(21)", maxLength: 21, nullable: false),
                    EditionId = table.Column<int>(type: "integer", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpFeatures", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpFeatures_AbpEditions_EditionId",
                        column: x => x.EditionId,
                        principalTable: "AbpEditions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AbpEntityChanges",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ChangeTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ChangeType = table.Column<byte>(type: "smallint", nullable: false),
                    EntityChangeSetId = table.Column<long>(type: "bigint", nullable: false),
                    EntityId = table.Column<string>(type: "character varying(48)", maxLength: 48, nullable: true),
                    EntityTypeFullName = table.Column<string>(type: "character varying(192)", maxLength: 192, nullable: true),
                    TenantId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpEntityChanges", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpEntityChanges_AbpEntityChangeSets_EntityChangeSetId",
                        column: x => x.EntityChangeSetId,
                        principalTable: "AbpEntityChangeSets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AbpRoles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Description = table.Column<string>(type: "character varying(5000)", maxLength: 5000, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    LastModifierUserId = table.Column<long>(type: "bigint", nullable: true),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    DeleterUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    Name = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    DisplayName = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: false),
                    IsStatic = table.Column<bool>(type: "boolean", nullable: false),
                    IsDefault = table.Column<bool>(type: "boolean", nullable: false),
                    NormalizedName = table.Column<string>(type: "character varying(32)", maxLength: 32, nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpRoles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpRoles_AbpUsers_CreatorUserId",
                        column: x => x.CreatorUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AbpRoles_AbpUsers_DeleterUserId",
                        column: x => x.DeleterUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AbpRoles_AbpUsers_LastModifierUserId",
                        column: x => x.LastModifierUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AbpSettings",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    UserId = table.Column<long>(type: "bigint", nullable: true),
                    Name = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: false),
                    Value = table.Column<string>(type: "text", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    LastModifierUserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpSettings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpSettings_AbpUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AbpTenants",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    LastModifierUserId = table.Column<long>(type: "bigint", nullable: true),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    DeleterUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    TenancyName = table.Column<string>(type: "character varying(64)", maxLength: 64, nullable: false),
                    Name = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    ConnectionString = table.Column<string>(type: "character varying(1024)", maxLength: 1024, nullable: true),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    EditionId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpTenants", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpTenants_AbpEditions_EditionId",
                        column: x => x.EditionId,
                        principalTable: "AbpEditions",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AbpTenants_AbpUsers_CreatorUserId",
                        column: x => x.CreatorUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AbpTenants_AbpUsers_DeleterUserId",
                        column: x => x.DeleterUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AbpTenants_AbpUsers_LastModifierUserId",
                        column: x => x.LastModifierUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AbpUserClaims",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    ClaimType = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    ClaimValue = table.Column<string>(type: "text", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpUserClaims_AbpUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AbpUserLogins",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    LoginProvider = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    ProviderKey = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpUserLogins", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpUserLogins_AbpUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AbpUserRoles",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    RoleId = table.Column<int>(type: "integer", nullable: false),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpUserRoles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpUserRoles_AbpUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AbpUserTokens",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    LoginProvider = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: true),
                    Name = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: true),
                    Value = table.Column<string>(type: "character varying(512)", maxLength: 512, nullable: true),
                    ExpireDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpUserTokens", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpUserTokens_AbpUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Persons",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    AnonymousId = table.Column<string>(type: "text", nullable: true),
                    DisplayName = table.Column<string>(type: "text", nullable: true),
                    UseDisplayNameOnly = table.Column<bool>(type: "boolean", nullable: true),
                    Sex = table.Column<long>(type: "bigint", nullable: true),
                    SexText = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    IsAnonymous = table.Column<bool>(type: "boolean", nullable: false),
                    Discriminator = table.Column<string>(type: "character varying(21)", maxLength: 21, nullable: false),
                    SupportMotivation = table.Column<string>(type: "text", nullable: true),
                    IsSubscribedToUpdates = table.Column<bool>(type: "boolean", nullable: true),
                    AreasOfInterest = table.Column<List<string>>(type: "text[]", nullable: true),
                    ImmediateSurvivor_IncidentDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    HasReceivedMedicalAttention = table.Column<bool>(type: "boolean", nullable: true),
                    HasReportedToAuthorities = table.Column<bool>(type: "boolean", nullable: true),
                    IncidentDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    HasDisclosedBefore = table.Column<bool>(type: "boolean", nullable: true),
                    TimeElapsedInDays = table.Column<int>(type: "integer", nullable: true),
                    RecoveryPhase = table.Column<int>(type: "integer", nullable: true),
                    RecoveryPhaseText = table.Column<string>(type: "text", nullable: true),
                    Profession = table.Column<string>(type: "text", nullable: true),
                    Organization = table.Column<string>(type: "text", nullable: true),
                    Credentials = table.Column<string>(type: "text", nullable: true),
                    IsVerified = table.Column<bool>(type: "boolean", nullable: true),
                    isActive = table.Column<bool>(type: "boolean", nullable: true),
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
                    table.PrimaryKey("PK_Persons", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Persons_AbpUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AbpWebhookSendAttempts",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    WebhookEventId = table.Column<Guid>(type: "uuid", nullable: false),
                    WebhookSubscriptionId = table.Column<Guid>(type: "uuid", nullable: false),
                    Response = table.Column<string>(type: "text", nullable: true),
                    ResponseStatusCode = table.Column<int>(type: "integer", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    TenantId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpWebhookSendAttempts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpWebhookSendAttempts_AbpWebhookEvents_WebhookEventId",
                        column: x => x.WebhookEventId,
                        principalTable: "AbpWebhookEvents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CheckListItem",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Order = table.Column<int>(type: "integer", nullable: false),
                    IsOptional = table.Column<bool>(type: "boolean", nullable: false),
                    ChecklistId = table.Column<Guid>(type: "uuid", nullable: false),
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
                    table.PrimaryKey("PK_CheckListItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CheckListItem_CheckLists_ChecklistId",
                        column: x => x.ChecklistId,
                        principalTable: "CheckLists",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AbpDynamicEntityPropertyValues",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Value = table.Column<string>(type: "text", nullable: false),
                    EntityId = table.Column<string>(type: "text", nullable: true),
                    DynamicEntityPropertyId = table.Column<int>(type: "integer", nullable: false),
                    TenantId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpDynamicEntityPropertyValues", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpDynamicEntityPropertyValues_AbpDynamicEntityProperties_D~",
                        column: x => x.DynamicEntityPropertyId,
                        principalTable: "AbpDynamicEntityProperties",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AbpEntityPropertyChanges",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    EntityChangeId = table.Column<long>(type: "bigint", nullable: false),
                    NewValue = table.Column<string>(type: "character varying(512)", maxLength: 512, nullable: true),
                    OriginalValue = table.Column<string>(type: "character varying(512)", maxLength: 512, nullable: true),
                    PropertyName = table.Column<string>(type: "character varying(96)", maxLength: 96, nullable: true),
                    PropertyTypeFullName = table.Column<string>(type: "character varying(192)", maxLength: 192, nullable: true),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    NewValueHash = table.Column<string>(type: "text", nullable: true),
                    OriginalValueHash = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpEntityPropertyChanges", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpEntityPropertyChanges_AbpEntityChanges_EntityChangeId",
                        column: x => x.EntityChangeId,
                        principalTable: "AbpEntityChanges",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AbpPermissions",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    Name = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    IsGranted = table.Column<bool>(type: "boolean", nullable: false),
                    Discriminator = table.Column<string>(type: "character varying(21)", maxLength: 21, nullable: false),
                    RoleId = table.Column<int>(type: "integer", nullable: true),
                    UserId = table.Column<long>(type: "bigint", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpPermissions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpPermissions_AbpRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AbpRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AbpPermissions_AbpUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AbpRoleClaims",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TenantId = table.Column<int>(type: "integer", nullable: true),
                    RoleId = table.Column<int>(type: "integer", nullable: false),
                    ClaimType = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    ClaimValue = table.Column<string>(type: "text", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AbpRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AbpRoleClaims_AbpRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AbpRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CrowdfundingCampaigns",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CreatorPersonId = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    FundingGoal = table.Column<decimal>(type: "numeric", nullable: false),
                    CurrentAmount = table.Column<decimal>(type: "numeric", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    EndDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Status = table.Column<int>(type: "integer", nullable: false),
                    CampaignStatusText = table.Column<string>(type: "text", nullable: true),
                    BankingDetails = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_CrowdfundingCampaigns", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CrowdfundingCampaigns_Persons_CreatorPersonId",
                        column: x => x.CreatorPersonId,
                        principalTable: "Persons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "edicalAssistanceRecords",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    SurvivorId = table.Column<Guid>(type: "uuid", nullable: false),
                    MedicalFacilityId = table.Column<Guid>(type: "uuid", nullable: true),
                    VisitDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    RapeKitCollected = table.Column<bool>(type: "boolean", nullable: false),
                    TreatmentProvided = table.Column<string>(type: "text", nullable: true),
                    FollowUpInstructions = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_edicalAssistanceRecords", x => x.Id);
                    table.ForeignKey(
                        name: "FK_edicalAssistanceRecords_MedicalFacilitys_MedicalFacilityId",
                        column: x => x.MedicalFacilityId,
                        principalTable: "MedicalFacilitys",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_edicalAssistanceRecords_Persons_SurvivorId",
                        column: x => x.SurvivorId,
                        principalTable: "Persons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Petitions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CreatorPersonId = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Target = table.Column<string>(type: "text", nullable: true),
                    SignatureGoal = table.Column<int>(type: "integer", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    EndDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
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
                    table.PrimaryKey("PK_Petitions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Petitions_Persons_CreatorPersonId",
                        column: x => x.CreatorPersonId,
                        principalTable: "Persons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProgressTrackers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PersonId = table.Column<Guid>(type: "uuid", nullable: false),
                    StartDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    DaysSinceStart = table.Column<int>(type: "integer", nullable: false),
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
                    table.PrimaryKey("PK_ProgressTrackers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProgressTrackers_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reports",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PersonId = table.Column<Guid>(type: "uuid", nullable: false),
                    ReportStatus = table.Column<long>(type: "bigint", nullable: false),
                    ReportStatusText = table.Column<string>(type: "text", nullable: true),
                    EncryptedContent = table.Column<string>(type: "text", nullable: true),
                    IsSharedWithAuthorities = table.Column<bool>(type: "boolean", nullable: false),
                    SharedDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    FileReference = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_Reports", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reports_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Stories",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PersonId = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Content = table.Column<string>(type: "text", nullable: true),
                    PostedDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IsAnonymous = table.Column<bool>(type: "boolean", nullable: false),
                    Tags = table.Column<List<string>>(type: "text[]", nullable: true),
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
                    table.PrimaryKey("PK_Stories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Stories_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SupportResources",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Type = table.Column<long>(type: "bigint", nullable: false),
                    ContentUrl = table.Column<string>(type: "text", nullable: true),
                    Tags = table.Column<List<string>>(type: "text[]", nullable: true),
                    TargetUserTypes = table.Column<List<string>>(type: "text[]", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    LastUpdatedDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    PersonId = table.Column<Guid>(type: "uuid", nullable: true),
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
                    table.PrimaryKey("PK_SupportResources", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SupportResources_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "SupportSessions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PersonId = table.Column<Guid>(type: "uuid", nullable: true),
                    AnonymousId = table.Column<string>(type: "text", nullable: true),
                    StartTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    EndTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    SessionNotes = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_SupportSessions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SupportSessions_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Testimonies",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PersonId = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Tags = table.Column<List<string>>(type: "text[]", nullable: true),
                    IsAnonymous = table.Column<bool>(type: "boolean", nullable: false),
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
                    table.PrimaryKey("PK_Testimonies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Testimonies_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Donations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CampaignId = table.Column<Guid>(type: "uuid", nullable: false),
                    DonorPersonId = table.Column<Guid>(type: "uuid", nullable: true),
                    Amount = table.Column<decimal>(type: "numeric", nullable: false),
                    DonorName = table.Column<string>(type: "text", nullable: true),
                    Message = table.Column<string>(type: "text", nullable: true),
                    DonationDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IsAnonymous = table.Column<bool>(type: "boolean", nullable: false),
                    TransactionId = table.Column<string>(type: "text", nullable: true),
                    GeneralSupporterId = table.Column<Guid>(type: "uuid", nullable: true),
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
                    table.PrimaryKey("PK_Donations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Donations_CrowdfundingCampaigns_CampaignId",
                        column: x => x.CampaignId,
                        principalTable: "CrowdfundingCampaigns",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Donations_Persons_DonorPersonId",
                        column: x => x.DonorPersonId,
                        principalTable: "Persons",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Donations_Persons_GeneralSupporterId",
                        column: x => x.GeneralSupporterId,
                        principalTable: "Persons",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PetitionSignatures",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PetitionId = table.Column<Guid>(type: "uuid", nullable: false),
                    PersonId = table.Column<Guid>(type: "uuid", nullable: true),
                    SignerName = table.Column<string>(type: "text", nullable: true),
                    SignerEmail = table.Column<string>(type: "text", nullable: true),
                    SignedDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IsAnonymous = table.Column<bool>(type: "boolean", nullable: false),
                    Comment = table.Column<string>(type: "text", nullable: true),
                    GeneralSupporterId = table.Column<Guid>(type: "uuid", nullable: true),
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
                    table.PrimaryKey("PK_PetitionSignatures", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PetitionSignatures_Persons_GeneralSupporterId",
                        column: x => x.GeneralSupporterId,
                        principalTable: "Persons",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PetitionSignatures_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PetitionSignatures_Petitions_PetitionId",
                        column: x => x.PetitionId,
                        principalTable: "Petitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "JournalEntries",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProgressTrackerId = table.Column<Guid>(type: "uuid", nullable: false),
                    Content = table.Column<string>(type: "text", nullable: true),
                    EntryDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Tags = table.Column<List<string>>(type: "text[]", nullable: true),
                    IsPrivate = table.Column<bool>(type: "boolean", nullable: false),
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
                    table.PrimaryKey("PK_JournalEntries", x => x.Id);
                    table.ForeignKey(
                        name: "FK_JournalEntries_ProgressTrackers_ProgressTrackerId",
                        column: x => x.ProgressTrackerId,
                        principalTable: "ProgressTrackers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MilestoneEntries",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProgressTrackerId = table.Column<Guid>(type: "uuid", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    AchievedDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Type = table.Column<long>(type: "bigint", nullable: false),
                    MilestoneTypeText = table.Column<string>(type: "text", nullable: true),
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
                    table.PrimaryKey("PK_MilestoneEntries", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MilestoneEntries_ProgressTrackers_ProgressTrackerId",
                        column: x => x.ProgressTrackerId,
                        principalTable: "ProgressTrackers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MoodEntries",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProgressTrackerId = table.Column<Guid>(type: "uuid", nullable: false),
                    Rating = table.Column<int>(type: "integer", nullable: false),
                    MoodType = table.Column<long>(type: "bigint", nullable: false),
                    MoodTypeText = table.Column<string>(type: "text", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
                    EntryDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
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
                    table.PrimaryKey("PK_MoodEntries", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MoodEntries_ProgressTrackers_ProgressTrackerId",
                        column: x => x.ProgressTrackerId,
                        principalTable: "ProgressTrackers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SexualAssaultReports",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ReportId = table.Column<Guid>(type: "uuid", nullable: false),
                    FullName = table.Column<string>(type: "text", nullable: true),
                    IDNumber = table.Column<string>(type: "text", nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    Address = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    Occupation = table.Column<string>(type: "text", nullable: true),
                    IncidentDateTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    Location = table.Column<string>(type: "text", nullable: true),
                    AloneOrWithSomeone = table.Column<bool>(type: "boolean", nullable: false),
                    LeadingEventsDescription = table.Column<string>(type: "text", nullable: true),
                    IsSuspectKnown = table.Column<bool>(type: "boolean", nullable: false),
                    SuspectName = table.Column<string>(type: "text", nullable: true),
                    SuspectDescription = table.Column<string>(type: "text", nullable: true),
                    WeaponOrThreats = table.Column<string>(type: "text", nullable: true),
                    AssaultDescription = table.Column<string>(type: "text", nullable: true),
                    Injuries = table.Column<bool>(type: "boolean", nullable: false),
                    WordsSpokenBySuspect = table.Column<string>(type: "text", nullable: true),
                    ActionsTaken = table.Column<string>(type: "text", nullable: true),
                    ChangedClothesOrShowered = table.Column<bool>(type: "boolean", nullable: false),
                    ClothesKept = table.Column<bool>(type: "boolean", nullable: false),
                    WitnessPresent = table.Column<bool>(type: "boolean", nullable: false),
                    WitnessDetails = table.Column<string>(type: "text", nullable: true),
                    CCTVAvailable = table.Column<bool>(type: "boolean", nullable: false),
                    IsOtherEvidence = table.Column<bool>(type: "boolean", nullable: false),
                    OtherEvidenceDescription = table.Column<string>(type: "text", nullable: true),
                    ReceivedMedicalAttention = table.Column<bool>(type: "boolean", nullable: false),
                    WillingForensicExam = table.Column<bool>(type: "boolean", nullable: false),
                    FeelsSafe = table.Column<bool>(type: "boolean", nullable: false),
                    WantsCounsellor = table.Column<bool>(type: "boolean", nullable: false),
                    PrefersFemaleOfficer = table.Column<bool>(type: "boolean", nullable: false),
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
                    table.PrimaryKey("PK_SexualAssaultReports", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SexualAssaultReports_Reports_ReportId",
                        column: x => x.ReportId,
                        principalTable: "Reports",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "StoryComments",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    StoryId = table.Column<Guid>(type: "uuid", nullable: false),
                    PersonId = table.Column<Guid>(type: "uuid", nullable: true),
                    Content = table.Column<string>(type: "text", nullable: true),
                    PostedDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IsAnonymous = table.Column<bool>(type: "boolean", nullable: false),
                    GeneralSupporterId = table.Column<Guid>(type: "uuid", nullable: true),
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
                    table.PrimaryKey("PK_StoryComments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StoryComments_Persons_GeneralSupporterId",
                        column: x => x.GeneralSupporterId,
                        principalTable: "Persons",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_StoryComments_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_StoryComments_Stories_StoryId",
                        column: x => x.StoryId,
                        principalTable: "Stories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "StoryReactions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    StoryId = table.Column<Guid>(type: "uuid", nullable: false),
                    PersonId = table.Column<Guid>(type: "uuid", nullable: true),
                    ReactionType = table.Column<long>(type: "bigint", nullable: false),
                    ReactionTypeText = table.Column<string>(type: "text", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    GeneralSupporterId = table.Column<Guid>(type: "uuid", nullable: true),
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
                    table.PrimaryKey("PK_StoryReactions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StoryReactions_Persons_GeneralSupporterId",
                        column: x => x.GeneralSupporterId,
                        principalTable: "Persons",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_StoryReactions_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_StoryReactions_Stories_StoryId",
                        column: x => x.StoryId,
                        principalTable: "Stories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Messages",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    SessionId = table.Column<Guid>(type: "uuid", nullable: false),
                    Content = table.Column<string>(type: "text", nullable: true),
                    IsFromAI = table.Column<bool>(type: "boolean", nullable: false),
                    Timestamp = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Sentiment = table.Column<long>(type: "bigint", nullable: true),
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
                    table.PrimaryKey("PK_Messages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Messages_SupportSessions_SessionId",
                        column: x => x.SessionId,
                        principalTable: "SupportSessions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PrsessionalMessagess",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    SessionId = table.Column<Guid>(type: "uuid", nullable: false),
                    Content = table.Column<string>(type: "text", nullable: true),
                    IsFromProsessional = table.Column<bool>(type: "boolean", nullable: false),
                    Timestamp = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
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
                    table.PrimaryKey("PK_PrsessionalMessagess", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PrsessionalMessagess_SupportSessions_SessionId",
                        column: x => x.SessionId,
                        principalTable: "SupportSessions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AbpAuditLogs_TenantId_ExecutionDuration",
                table: "AbpAuditLogs",
                columns: new[] { "TenantId", "ExecutionDuration" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpAuditLogs_TenantId_ExecutionTime",
                table: "AbpAuditLogs",
                columns: new[] { "TenantId", "ExecutionTime" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpAuditLogs_TenantId_UserId",
                table: "AbpAuditLogs",
                columns: new[] { "TenantId", "UserId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpBackgroundJobs_IsAbandoned_NextTryTime",
                table: "AbpBackgroundJobs",
                columns: new[] { "IsAbandoned", "NextTryTime" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpDynamicEntityProperties_DynamicPropertyId",
                table: "AbpDynamicEntityProperties",
                column: "DynamicPropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpDynamicEntityProperties_EntityFullName_DynamicPropertyId~",
                table: "AbpDynamicEntityProperties",
                columns: new[] { "EntityFullName", "DynamicPropertyId", "TenantId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AbpDynamicEntityPropertyValues_DynamicEntityPropertyId",
                table: "AbpDynamicEntityPropertyValues",
                column: "DynamicEntityPropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpDynamicProperties_PropertyName_TenantId",
                table: "AbpDynamicProperties",
                columns: new[] { "PropertyName", "TenantId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AbpDynamicPropertyValues_DynamicPropertyId",
                table: "AbpDynamicPropertyValues",
                column: "DynamicPropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpEntityChanges_EntityChangeSetId",
                table: "AbpEntityChanges",
                column: "EntityChangeSetId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpEntityChanges_EntityTypeFullName_EntityId",
                table: "AbpEntityChanges",
                columns: new[] { "EntityTypeFullName", "EntityId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpEntityChangeSets_TenantId_CreationTime",
                table: "AbpEntityChangeSets",
                columns: new[] { "TenantId", "CreationTime" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpEntityChangeSets_TenantId_Reason",
                table: "AbpEntityChangeSets",
                columns: new[] { "TenantId", "Reason" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpEntityChangeSets_TenantId_UserId",
                table: "AbpEntityChangeSets",
                columns: new[] { "TenantId", "UserId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpEntityPropertyChanges_EntityChangeId",
                table: "AbpEntityPropertyChanges",
                column: "EntityChangeId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpFeatures_EditionId_Name",
                table: "AbpFeatures",
                columns: new[] { "EditionId", "Name" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpFeatures_TenantId_Name",
                table: "AbpFeatures",
                columns: new[] { "TenantId", "Name" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpLanguages_TenantId_Name",
                table: "AbpLanguages",
                columns: new[] { "TenantId", "Name" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpLanguageTexts_TenantId_Source_LanguageName_Key",
                table: "AbpLanguageTexts",
                columns: new[] { "TenantId", "Source", "LanguageName", "Key" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpNotificationSubscriptions_NotificationName_EntityTypeNam~",
                table: "AbpNotificationSubscriptions",
                columns: new[] { "NotificationName", "EntityTypeName", "EntityId", "UserId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpNotificationSubscriptions_TenantId_NotificationName_Enti~",
                table: "AbpNotificationSubscriptions",
                columns: new[] { "TenantId", "NotificationName", "EntityTypeName", "EntityId", "UserId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpOrganizationUnitRoles_TenantId_OrganizationUnitId",
                table: "AbpOrganizationUnitRoles",
                columns: new[] { "TenantId", "OrganizationUnitId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpOrganizationUnitRoles_TenantId_RoleId",
                table: "AbpOrganizationUnitRoles",
                columns: new[] { "TenantId", "RoleId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpOrganizationUnits_ParentId",
                table: "AbpOrganizationUnits",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpOrganizationUnits_TenantId_Code",
                table: "AbpOrganizationUnits",
                columns: new[] { "TenantId", "Code" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpPermissions_RoleId",
                table: "AbpPermissions",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpPermissions_TenantId_Name",
                table: "AbpPermissions",
                columns: new[] { "TenantId", "Name" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpPermissions_UserId",
                table: "AbpPermissions",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpRoleClaims_RoleId",
                table: "AbpRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpRoleClaims_TenantId_ClaimType",
                table: "AbpRoleClaims",
                columns: new[] { "TenantId", "ClaimType" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpRoles_CreatorUserId",
                table: "AbpRoles",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpRoles_DeleterUserId",
                table: "AbpRoles",
                column: "DeleterUserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpRoles_LastModifierUserId",
                table: "AbpRoles",
                column: "LastModifierUserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpRoles_TenantId_NormalizedName",
                table: "AbpRoles",
                columns: new[] { "TenantId", "NormalizedName" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpSettings_TenantId_Name_UserId",
                table: "AbpSettings",
                columns: new[] { "TenantId", "Name", "UserId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AbpSettings_UserId",
                table: "AbpSettings",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpTenantNotifications_TenantId",
                table: "AbpTenantNotifications",
                column: "TenantId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpTenants_CreatorUserId",
                table: "AbpTenants",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpTenants_DeleterUserId",
                table: "AbpTenants",
                column: "DeleterUserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpTenants_EditionId",
                table: "AbpTenants",
                column: "EditionId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpTenants_LastModifierUserId",
                table: "AbpTenants",
                column: "LastModifierUserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpTenants_TenancyName",
                table: "AbpTenants",
                column: "TenancyName");

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserAccounts_EmailAddress",
                table: "AbpUserAccounts",
                column: "EmailAddress");

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserAccounts_TenantId_EmailAddress",
                table: "AbpUserAccounts",
                columns: new[] { "TenantId", "EmailAddress" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserAccounts_TenantId_UserId",
                table: "AbpUserAccounts",
                columns: new[] { "TenantId", "UserId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserAccounts_TenantId_UserName",
                table: "AbpUserAccounts",
                columns: new[] { "TenantId", "UserName" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserAccounts_UserName",
                table: "AbpUserAccounts",
                column: "UserName");

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserClaims_TenantId_ClaimType",
                table: "AbpUserClaims",
                columns: new[] { "TenantId", "ClaimType" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserClaims_UserId",
                table: "AbpUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserLoginAttempts_TenancyName_UserNameOrEmailAddress_Res~",
                table: "AbpUserLoginAttempts",
                columns: new[] { "TenancyName", "UserNameOrEmailAddress", "Result" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserLoginAttempts_UserId_TenantId",
                table: "AbpUserLoginAttempts",
                columns: new[] { "UserId", "TenantId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserLogins_ProviderKey_TenantId",
                table: "AbpUserLogins",
                columns: new[] { "ProviderKey", "TenantId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserLogins_TenantId_LoginProvider_ProviderKey",
                table: "AbpUserLogins",
                columns: new[] { "TenantId", "LoginProvider", "ProviderKey" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserLogins_TenantId_UserId",
                table: "AbpUserLogins",
                columns: new[] { "TenantId", "UserId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserLogins_UserId",
                table: "AbpUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserNotifications_UserId_State_CreationTime",
                table: "AbpUserNotifications",
                columns: new[] { "UserId", "State", "CreationTime" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserOrganizationUnits_TenantId_OrganizationUnitId",
                table: "AbpUserOrganizationUnits",
                columns: new[] { "TenantId", "OrganizationUnitId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserOrganizationUnits_TenantId_UserId",
                table: "AbpUserOrganizationUnits",
                columns: new[] { "TenantId", "UserId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserRoles_TenantId_RoleId",
                table: "AbpUserRoles",
                columns: new[] { "TenantId", "RoleId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserRoles_TenantId_UserId",
                table: "AbpUserRoles",
                columns: new[] { "TenantId", "UserId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserRoles_UserId",
                table: "AbpUserRoles",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpUsers_CreatorUserId",
                table: "AbpUsers",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpUsers_DeleterUserId",
                table: "AbpUsers",
                column: "DeleterUserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpUsers_LastModifierUserId",
                table: "AbpUsers",
                column: "LastModifierUserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpUsers_TenantId_NormalizedEmailAddress",
                table: "AbpUsers",
                columns: new[] { "TenantId", "NormalizedEmailAddress" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUsers_TenantId_NormalizedUserName",
                table: "AbpUsers",
                columns: new[] { "TenantId", "NormalizedUserName" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserTokens_TenantId_UserId",
                table: "AbpUserTokens",
                columns: new[] { "TenantId", "UserId" });

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserTokens_UserId",
                table: "AbpUserTokens",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AbpWebhookSendAttempts_WebhookEventId",
                table: "AbpWebhookSendAttempts",
                column: "WebhookEventId");

            migrationBuilder.CreateIndex(
                name: "IX_CheckListItem_ChecklistId",
                table: "CheckListItem",
                column: "ChecklistId");

            migrationBuilder.CreateIndex(
                name: "IX_CrowdfundingCampaigns_CreatorPersonId",
                table: "CrowdfundingCampaigns",
                column: "CreatorPersonId");

            migrationBuilder.CreateIndex(
                name: "IX_Donations_CampaignId",
                table: "Donations",
                column: "CampaignId");

            migrationBuilder.CreateIndex(
                name: "IX_Donations_DonorPersonId",
                table: "Donations",
                column: "DonorPersonId");

            migrationBuilder.CreateIndex(
                name: "IX_Donations_GeneralSupporterId",
                table: "Donations",
                column: "GeneralSupporterId");

            migrationBuilder.CreateIndex(
                name: "IX_edicalAssistanceRecords_MedicalFacilityId",
                table: "edicalAssistanceRecords",
                column: "MedicalFacilityId");

            migrationBuilder.CreateIndex(
                name: "IX_edicalAssistanceRecords_SurvivorId",
                table: "edicalAssistanceRecords",
                column: "SurvivorId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_JournalEntries_ProgressTrackerId",
                table: "JournalEntries",
                column: "ProgressTrackerId");

            migrationBuilder.CreateIndex(
                name: "IX_Messages_SessionId",
                table: "Messages",
                column: "SessionId");

            migrationBuilder.CreateIndex(
                name: "IX_MilestoneEntries_ProgressTrackerId",
                table: "MilestoneEntries",
                column: "ProgressTrackerId");

            migrationBuilder.CreateIndex(
                name: "IX_MoodEntries_ProgressTrackerId",
                table: "MoodEntries",
                column: "ProgressTrackerId");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_UserId",
                table: "Persons",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Petitions_CreatorPersonId",
                table: "Petitions",
                column: "CreatorPersonId");

            migrationBuilder.CreateIndex(
                name: "IX_PetitionSignatures_GeneralSupporterId",
                table: "PetitionSignatures",
                column: "GeneralSupporterId");

            migrationBuilder.CreateIndex(
                name: "IX_PetitionSignatures_PersonId",
                table: "PetitionSignatures",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_PetitionSignatures_PetitionId",
                table: "PetitionSignatures",
                column: "PetitionId");

            migrationBuilder.CreateIndex(
                name: "IX_ProgressTrackers_PersonId",
                table: "ProgressTrackers",
                column: "PersonId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PrsessionalMessagess_SessionId",
                table: "PrsessionalMessagess",
                column: "SessionId");

            migrationBuilder.CreateIndex(
                name: "IX_Reports_PersonId",
                table: "Reports",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_SexualAssaultReports_ReportId",
                table: "SexualAssaultReports",
                column: "ReportId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Stories_PersonId",
                table: "Stories",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_StoryComments_GeneralSupporterId",
                table: "StoryComments",
                column: "GeneralSupporterId");

            migrationBuilder.CreateIndex(
                name: "IX_StoryComments_PersonId",
                table: "StoryComments",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_StoryComments_StoryId",
                table: "StoryComments",
                column: "StoryId");

            migrationBuilder.CreateIndex(
                name: "IX_StoryReactions_GeneralSupporterId",
                table: "StoryReactions",
                column: "GeneralSupporterId");

            migrationBuilder.CreateIndex(
                name: "IX_StoryReactions_PersonId",
                table: "StoryReactions",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_StoryReactions_StoryId",
                table: "StoryReactions",
                column: "StoryId");

            migrationBuilder.CreateIndex(
                name: "IX_SupportResources_PersonId",
                table: "SupportResources",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_SupportSessions_PersonId",
                table: "SupportSessions",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_Testimonies_PersonId",
                table: "Testimonies",
                column: "PersonId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AbpAuditLogs");

            migrationBuilder.DropTable(
                name: "AbpBackgroundJobs");

            migrationBuilder.DropTable(
                name: "AbpDynamicEntityPropertyValues");

            migrationBuilder.DropTable(
                name: "AbpDynamicPropertyValues");

            migrationBuilder.DropTable(
                name: "AbpEntityPropertyChanges");

            migrationBuilder.DropTable(
                name: "AbpFeatures");

            migrationBuilder.DropTable(
                name: "AbpLanguages");

            migrationBuilder.DropTable(
                name: "AbpLanguageTexts");

            migrationBuilder.DropTable(
                name: "AbpNotifications");

            migrationBuilder.DropTable(
                name: "AbpNotificationSubscriptions");

            migrationBuilder.DropTable(
                name: "AbpOrganizationUnitRoles");

            migrationBuilder.DropTable(
                name: "AbpOrganizationUnits");

            migrationBuilder.DropTable(
                name: "AbpPermissions");

            migrationBuilder.DropTable(
                name: "AbpRoleClaims");

            migrationBuilder.DropTable(
                name: "AbpSettings");

            migrationBuilder.DropTable(
                name: "AbpTenantNotifications");

            migrationBuilder.DropTable(
                name: "AbpTenants");

            migrationBuilder.DropTable(
                name: "AbpUserAccounts");

            migrationBuilder.DropTable(
                name: "AbpUserClaims");

            migrationBuilder.DropTable(
                name: "AbpUserLoginAttempts");

            migrationBuilder.DropTable(
                name: "AbpUserLogins");

            migrationBuilder.DropTable(
                name: "AbpUserNotifications");

            migrationBuilder.DropTable(
                name: "AbpUserOrganizationUnits");

            migrationBuilder.DropTable(
                name: "AbpUserRoles");

            migrationBuilder.DropTable(
                name: "AbpUserTokens");

            migrationBuilder.DropTable(
                name: "AbpWebhookSendAttempts");

            migrationBuilder.DropTable(
                name: "AbpWebhookSubscriptions");

            migrationBuilder.DropTable(
                name: "CheckListItem");

            migrationBuilder.DropTable(
                name: "Donations");

            migrationBuilder.DropTable(
                name: "edicalAssistanceRecords");

            migrationBuilder.DropTable(
                name: "JournalEntries");

            migrationBuilder.DropTable(
                name: "Messages");

            migrationBuilder.DropTable(
                name: "MilestoneEntries");

            migrationBuilder.DropTable(
                name: "MoodEntries");

            migrationBuilder.DropTable(
                name: "PetitionSignatures");

            migrationBuilder.DropTable(
                name: "PoliceStations");

            migrationBuilder.DropTable(
                name: "PrsessionalMessagess");

            migrationBuilder.DropTable(
                name: "SexualAssaultReports");

            migrationBuilder.DropTable(
                name: "StoryComments");

            migrationBuilder.DropTable(
                name: "StoryReactions");

            migrationBuilder.DropTable(
                name: "SupportResources");

            migrationBuilder.DropTable(
                name: "Testimonies");

            migrationBuilder.DropTable(
                name: "AbpDynamicEntityProperties");

            migrationBuilder.DropTable(
                name: "AbpEntityChanges");

            migrationBuilder.DropTable(
                name: "AbpRoles");

            migrationBuilder.DropTable(
                name: "AbpEditions");

            migrationBuilder.DropTable(
                name: "AbpWebhookEvents");

            migrationBuilder.DropTable(
                name: "CheckLists");

            migrationBuilder.DropTable(
                name: "CrowdfundingCampaigns");

            migrationBuilder.DropTable(
                name: "MedicalFacilitys");

            migrationBuilder.DropTable(
                name: "ProgressTrackers");

            migrationBuilder.DropTable(
                name: "Petitions");

            migrationBuilder.DropTable(
                name: "SupportSessions");

            migrationBuilder.DropTable(
                name: "Reports");

            migrationBuilder.DropTable(
                name: "Stories");

            migrationBuilder.DropTable(
                name: "AbpDynamicProperties");

            migrationBuilder.DropTable(
                name: "AbpEntityChangeSets");

            migrationBuilder.DropTable(
                name: "Persons");

            migrationBuilder.DropTable(
                name: "AbpUsers");
        }
    }
}
