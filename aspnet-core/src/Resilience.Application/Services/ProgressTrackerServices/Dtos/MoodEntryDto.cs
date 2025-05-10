using System;
using Abp.Application.Services.Dto;
using Resilience.Domain.ProgressTrackers;

namespace Resilience.Services.ProgressTrackerServices.Dtos
{
    public class MoodEntryDto: EntityDto<Guid>
    {
        public Guid PersonId {get;set;}
        public int Rating { get; set; }
        public ReflistMoodType MoodType { get; set; }
        public string Notes { get; set; }
        public DateTime EntryDate { get; set; }
    }
}
