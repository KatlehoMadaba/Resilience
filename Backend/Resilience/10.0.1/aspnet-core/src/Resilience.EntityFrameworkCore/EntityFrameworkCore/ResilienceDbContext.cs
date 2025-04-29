using Abp.Zero.EntityFrameworkCore;
using Resilience.Authorization.Roles;
using Resilience.Authorization.Users;
using Resilience.MultiTenancy;
using Microsoft.EntityFrameworkCore;
using Resilience.Domain.Persons;
using Resilience.Domain.Petitions;
using Resilience.Domain.ProgressTrackers;
using Resilience.Domain.Reports;
using Resilience.Domain.Stories;
using Resilience.Domain.SupportResources;
using Resilience.Domain.SupportSessions;
using Resilience.Domain.Testimonies;
using Resilience.Domain.CheckLists;
using Resilience.Domain.CrowdfundingCampaigns;
using Resilience.Domain.MedicalAssistanceRecords;
using Resilience.Domain.Medical_AssistanceRecords;

namespace Resilience.EntityFrameworkCore;

public class ResilienceDbContext : AbpZeroDbContext<Tenant, Role, User, ResilienceDbContext>
{
    /* Define a DbSet for each entity of the application */

    public ResilienceDbContext(DbContextOptions<ResilienceDbContext> options)
        : base(options)
    {
    }
    //Persons
    public DbSet<Person> Persons { get; set; }
    public DbSet<GeneralSupporter> GeneralSupporters { get; set; }
    public DbSet<PastSurvivor> PastSurvivors { get; set; }
    public DbSet<ImmediateSurvivor> ImmediateSurvivors { get; set; }
    public DbSet<Professional> Professionals { get; set; }

    //Checklist
    public DbSet<Checklist> CheckLists { get; set; }
    public DbSet<ChecklistItem> CheckListItem { get; set; }
    //Crowdfunding

    public DbSet<CrowdfundingCampaign> CrowdfundingCampaigns { get; set; }
    public DbSet<Donation> Donations { get; set; }
    //Medical Assistance
    public DbSet<MedicalAssistanceRecord> edicalAssistanceRecords { get; set; }
    public DbSet<MedicalFacility> MedicalFacilitys { get; set; }
    //Petitions
    public DbSet<Petition> Petitions { get; set; }
    public DbSet<PetitionSignature> PetitionSignatures { get; set; }
    //ProgressTracker
    public DbSet<ProgressTracker> ProgressTrackers { get; set; }
    public DbSet<JournalEntry> JournalEntries { get; set; }
    public DbSet<MilestoneEntry> MilestoneEntries { get; set; }
    public DbSet<MoodEntry> MoodEntries { get; set; }
    //Reports
    public DbSet<Report> Reports { get; set; }
    public DbSet<SexualAssaultReport> SexualAssaultReports { get; set; }
    //Stories
    public DbSet<Story> Stories { get; set; }
    public DbSet<StoryComment> StoryComments { get; set; }
    public DbSet<StoryReaction> StoryReactions { get; set; }
    //SupportResources
    public DbSet<SupportResource> SupportResources { get; set; }
    //SupportSessions
    public DbSet<SupportSession> SupportSessions { get; set; }
    public DbSet<Message> Messages { get; set; }
    public DbSet<ProsessionalMessage> PrsessionalMessagess { get; set; }
    //Testimonies
    public DbSet<Testimony> Testimonies { get; set; }
}
