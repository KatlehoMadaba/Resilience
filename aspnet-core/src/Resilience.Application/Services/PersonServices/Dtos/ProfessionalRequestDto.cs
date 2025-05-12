using Resilience.Domain.Persons;

namespace Resilience.Services.PersonServices.Dtos
{
    public class ProfessionalRequestDto
    {
        public string? UserName { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? Password { get; set; }
        public string? EmailAddress { get; set; }
        public ReflistSex? Sex { get; set; }
        public string? PhoneNumber { get; set; }
        public string Profession { get; set; }
        public string Organization { get; set; }
        public string Credentials { get; set; }
        public bool IsVerified { get; set; }
        public bool isActive { get; set; }
    }
}
