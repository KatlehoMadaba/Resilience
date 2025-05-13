using System;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using AutoMapper;
using Resilience.Domain.Persons;
using Resilience.Domain.Reports;
using Resilience.Services.ReportsServices.Dtos;

namespace Resilience.Services.ReportsServices
{
    public class SexualAssaultReportAppService : AsyncCrudAppService<SexualAssaultReport, SexualAssaultReportDto, Guid, PagedAndSortedResultRequestDto, SexualAssaultReportDto>
    {
        private SexaualAssualtReportManager _sexualAssualtReportmanager;
        private readonly IMapper _mapper;
        public SexualAssaultReportAppService(IRepository<SexualAssaultReport, Guid> repository, SexaualAssualtReportManager sexualAssualtReportmanager) : base(repository)
        {
            _sexualAssualtReportmanager = sexualAssualtReportmanager;
        }

        public override async Task<SexualAssaultReportDto> CreateAsync(SexualAssaultReportDto input)
        {
            var sexualAssualtReport = await _sexualAssualtReportmanager.CreateSexualReportAsync
                (
                    input.PersonId,
                    input.ReportStatus,
                    input.EncryptedContent,
                    input.IsSharedWithAuthorities,
                    input.SharedDate,
                    input.FileReference,

                    input.FullName,
                    input.IDNumber,
                    input.DateOfBirth,
                    input.Address,
                    input.PhoneNumber,
                    input.Occupation,

                    // Incident Details  
                    input.IncidentDateTime,
                    input.Location,
                    input.AloneOrWithSomeone,
                    input.LeadingEventsDescription,

                    // Suspect Details  
                    input.IsSuspectKnown,
                    input.SuspectName,
                    input.SuspectDescription,
                    input.WeaponOrThreats,

                    // Assault Details  
                    input.AssaultDescription,
                    input.Injuries,
                    input.WordsSpokenBySuspect,

                    // Post-Incident Actions  
                    input.ActionsTaken,
                    input.ChangedClothesOrShowered,
                    input.ClothesKept,

                    // Witnesses and Evidence  
                    input.WitnessPresent,
                    input.WitnessDetails,
                    input.CCTVAvailable,
                    input.IsOtherEvidence,
                    input.OtherEvidenceDescription,

                    // Medical  
                    input.ReceivedMedicalAttention,
                    input.WillingForensicExam,

                    // Safety and Support  
                    input.FeelsSafe,
                    input.WantsCounsellor,
                    input.PrefersFemaleOfficer
                );
            return _mapper.Map<SexualAssaultReportDto>(sexualAssualtReport);
        }

    }


}
