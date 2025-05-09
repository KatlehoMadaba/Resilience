using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Resilience.Domain.Persons;
using Resilience.Domain.ProgressTrackers;

namespace Resilience.Services.ProgressTrackerServices.Dtos
{
    public class ProgressTrackerDto: EntityDto<Guid>
    {
        public Guid PersonId { get; set; }
        public virtual Person Person { get; set; }
        public DateTime StartDate { get; set; }
        public int DaysSinceStart { get; set; }
        public virtual ICollection<MilestoneEntry> Milestones { get; set; }
        public virtual ICollection<JournalEntry> JournalEntries { get; set; }
        public virtual ICollection<MoodEntry> MoodEntries { get; set; }
    }
}
