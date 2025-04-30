namespace Resilience.Domain.Persons
{
    public class Professional:Person
    {
        public string Profession { get; set; }
        public string Organization { get; set; }
        public string Credentials { get; set; }
        public bool IsVerified { get; set; }
        public bool isActive { get; set; }
    }
}
