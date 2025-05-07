using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Resilience.Domain.Persons;

namespace Resilience.Services.PersonServices.Dtos
{
    public class GeneralSupporterRequestDto
    {
        //Person
        public string? UserName { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? Password { get; set; }
        public string? EmailAddress { get; set; }
        public string? DisplayName { get; set; }
        public bool? UseDisplayNameOnly { get; set; }
        public string? AnonymousId { get; set; }
        public bool IsAnonymous { get; set; }
        public ReflistSex? Sex { get; set; }
        public string? PhoneNumber { get; set; }
        public string SupportMotivation { get; set; }//(Why they want to support)
        public bool IsSubscribedToUpdates { get; set; }
        public List<string> AreasOfInterest { get; set; }

    }
}
