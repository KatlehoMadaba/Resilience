using System;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.Domain.Uow;
using Abp.Runtime.Session;
using Abp.UI;

namespace Resilience.Domain.Reports
{
    public class SexaualAssualtReportManager : DomainService
    {
        //private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly IRepository<SexualAssaultReport, Guid> _sexualAssualtrepository;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IAbpSession _abpSession;
        public SexaualAssualtReportManager(IRepository<SexualAssaultReport, Guid> sexualAssualtrepository, /*IWebHostEnvironment hostingEnviroment*/ IRepository sexualAssaultReportRepository, IUnitOfWorkManager unitOfWorkManager, IAbpSession _abpSession)
        {

            //_webHostEnvironment = hostingEnviroment;
            _sexualAssualtrepository = sexualAssualtrepository;
            _unitOfWorkManager = unitOfWorkManager;
        }

        public async Task<SexualAssaultReport> CreateSexualReportAsync
            (
                
                Guid PersonId,
                ReflistReportStatus ? reportStatus,
                string? EncryptedContent,
                bool isSharedWithAuthorities,
                DateTime ? SharedDate,
                string? fileReference,
                string fullName,
                string idNumber,
                DateTime? dateOfBirth,
                string address,
                string phoneNumber,
                string? occupation,

                // Incident Details
                DateTime? incidentDateTime,
                string? location,
                bool aloneOrWithSomeone,
                string? leadingEventsDescription,

                // Suspect Details
                bool isSuspectKnown,
                string? suspectName,
                string? suspectDescription,
                string? weaponOrThreats,

                // Assault Details
                string? assaultDescription,
                bool injuries,
                string? wordsSpokenBySuspect,
                // Post-Incident Actions
                string? actionsTaken,
                bool changedClothesOrShowered,
                bool clothesKept,

                // Witnesses and Evidence
                bool witnessPresent,
                string witnessDetails,
                bool cctvAvailable,
                bool isOtherEvidence,
                string? otherEvidenceDescription,

                // Medical
                bool receivedMedicalAttention,
                bool willingForensicExam,
                // Safety and Support
                bool feelsSafe,
                bool wantsCounsellor,
                bool prefersFemaleOfficer
            )
        {
              SexualAssaultReport asexualAssaultReport;
            try
            {
                using (var uow = _unitOfWorkManager.Begin()) using (_unitOfWorkManager.Current.SetTenantId(1))
                {
                    var session = _abpSession.Use(1, 1);
                    var sexualAssaultReport = new SexualAssaultReport
                    {

                        PersonId = PersonId,
                        ReportStatus = reportStatus,
                        EncryptedContent = EncryptedContent,
                        IsSharedWithAuthorities = isSharedWithAuthorities,
                        SharedDate = SharedDate,
                        FileReference = fileReference,

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
                    await _sexualAssualtrepository.InsertAsync(sexualAssaultReport);
                    asexualAssaultReport = sexualAssaultReport;
                    await uow.CompleteAsync();
                }
            }
            catch (Exception ex)
            {
                Logger.Error($"Error creating Person: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the Person", ex);
            }
            return asexualAssaultReport;
        }

        //Create the Pdf 




        //Generate the PDF
        //public FileDto GeneratePdf(SexualAssaultReport sexualAssaultReport, string reportInput)
        //{
        //    using (var memoryStream = new MemoryStream())
        //    {
        //        //Document fomating
        //        Document document = new Document(PageSize.A4, 50, 50, 50, 50);
        //        //Creating instance for pdf writer
        //        PdfWriter writer = PdfWriter.GetInstance(document, memoryStream);
        //        //Open document for writing 
        //        document.Open();
        //        //adding a title paragraph to document 
        //        Paragraph title = new Paragraph("Sexual Assualt Report",
        //        //adding fonts and styling to the document
        //        new Font(Font.FontFamily.HELVETICA, 18, Font.BOLD));
        //        title.Alignment = Element.ALIGN_CENTER;
        //        title.SpacingAfter = 20;
        //        document.Add(title);
        //        //closing document after writing to it 
        //        document.Close();

        //        return new FileDto
        //        {
        //             FileName= $"SexualAssualtReport_{sexualAssaultReport.Id}_{DateTime.Now:yyyyMMMM}.pdf",
        //             ContentType="application/pdf",
        //             FileBytes= memoryStream.ToArray()
        //        };
        //    }
        //}

       


    }
}

