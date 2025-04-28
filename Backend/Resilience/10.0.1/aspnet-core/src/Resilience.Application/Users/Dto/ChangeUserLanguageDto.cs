using System.ComponentModel.DataAnnotations;

namespace Resilience.Users.Dto;

public class ChangeUserLanguageDto
{
    [Required]
    public string LanguageName { get; set; }
}