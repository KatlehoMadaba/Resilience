using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resilience.Services.PersonServices.Dtos
{
    public class ImdSurvivorRequestDto
    {
        public string? AnonymousId { get; set; }
        public DateTime? IncidentDate { get; set; }
        public bool HasReceivedMedicalAttention { get; set; }
        public bool HasReportedToAuthorities { get; set; }
    }
}
