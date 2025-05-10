using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.UI;
using iTextSharp.text;
using iTextSharp.text.pdf;
using Microsoft.AspNetCore.Hosting;
using Microsoft.CodeAnalysis;
using Resilience.Domain.Reports.Dtos;
using Document = iTextSharp.text.Document;

namespace Resilience.Domain.Reports
{
    class SexaualAssualtReportManager : DomainService
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly IRepository<SexualAssaultReport, Guid> _sexualAssualtrepository;

        public SexaualAssualtReportManager(IRepository<SexualAssaultReport, Guid> sexualAssualtrepository, IWebHostEnvironment hostingEnviroment, IRepository sexualAssaultReportRepository)
        {

            _webHostEnvironment = hostingEnviroment;
            _sexualAssualtrepository = sexualAssualtrepository;

        }

        public async Task<SexualAssaultReport> CreateSexualReportAsync
            (
                Guid reportId,
                string fullName,
                string idNumber,
                DateTime? dateOfBirth,
                string address,
                string phoneNumber,
                string occupation,

                // Incident Details
                DateTime? incidentDateTime,
                string location,
                bool aloneOrWithSomeone,
                string leadingEventsDescription,

                // Suspect Details
                bool isSuspectKnown,
                string suspectName,
                string suspectDescription,
                string weaponOrThreats,

                // Assault Details
                string assaultDescription,
                bool injuries,
                string wordsSpokenBySuspect,
                // Post-Incident Actions
                string actionsTaken,
                bool changedClothesOrShowered,
                bool clothesKept,

                // Witnesses and Evidence
                bool witnessPresent,
                string witnessDetails,
                bool cctvAvailable,
                bool isOtherEvidence,
                string otherEvidenceDescription,

                // Medical
                bool receivedMedicalAttention,
                bool willingForensicExam,
                // Safety and Support
                bool feelsSafe,
                bool wantsCounsellor,
                bool prefersFemaleOfficer
            )
        {
            try
            {
                var SexualAssaultReport = new SexualAssaultReport
                {

                    ReportId = reportId,
                    FullName = fullName,
                    IDNumber = idNumber,
                    DateOfBirth = dateOfBirth,
                    Address = address,
                    PhoneNumber = phoneNumber,
                    Occupation = occupation,

                    // Incident Details  
                    IncidentDateTime = incidentDateTime,
                    Location = location,
                    AloneOrWithSomeone = aloneOrWithSomeone,
                    LeadingEventsDescription = leadingEventsDescription,

                    // Suspect Details  
                    IsSuspectKnown = isSuspectKnown,
                    SuspectName = suspectName,
                    SuspectDescription = suspectDescription,
                    WeaponOrThreats = weaponOrThreats,

                    // Assault Details  
                    AssaultDescription = assaultDescription,
                    Injuries = injuries,
                    WordsSpokenBySuspect = wordsSpokenBySuspect,

                    // Post-Incident Actions  
                    ActionsTaken = actionsTaken,
                    ChangedClothesOrShowered = changedClothesOrShowered,
                    ClothesKept = clothesKept,

                    // Witnesses and Evidence  
                    WitnessPresent = witnessPresent,
                    WitnessDetails = witnessDetails,
                    CCTVAvailable = cctvAvailable,
                    IsOtherEvidence = isOtherEvidence,
                    OtherEvidenceDescription = otherEvidenceDescription,

                    // Medical  
                    ReceivedMedicalAttention = receivedMedicalAttention,
                    WillingForensicExam = willingForensicExam,

                    // Safety and Support  
                    FeelsSafe = feelsSafe,
                    WantsCounsellor = wantsCounsellor,
                    PrefersFemaleOfficer = prefersFemaleOfficer
                };
                return await _sexualAssualtrepository.InsertAsync(SexualAssaultReport);
            }
            catch (Exception ex)
            {
                Logger.Error($"Error creating Person: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the Person", ex);
            }
        }

        //Create the Pdf 

        //Generate the PDF
        public FileDto GeneratePdf(SexualAssaultReport sexualAssaultReport, string reportInput)
        {
            using (var memoryStream = new MemoryStream())
            {
                Document document = new Document(PageSize.A4, 50, 50, 50, 50);
                PdfWriter writer = PdfWriter.GetInstance(document, memoryStream);
                document.Open();

                Paragraph title = new Paragraph("Sexual Assualt Report",
                new Font(Font.FontFamily.HELVETICA, 18, Font.BOLD));
                title.Alignment = Element.ALIGN_CENTER;
                title.SpacingAfter = 20;
                document.Add(title);
                document.Close();

                return new FileDto
                {
                     FileName= $"SexualAssualtReport_{sexualAssaultReport.Id}_{DateTime.Now:yyyyMMMM}.pdf",
                     ContentType="application/pdf",
                     FileBytes= memoryStream.ToArray()
                };
            }
        }

    }
}

