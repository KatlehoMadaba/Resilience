using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Resilience.Domain.ProgressTrackers;

namespace Resilience.Services.ProgressTrackerServices.Dtos
{

    [AutoMap(typeof(JournalEntry))]
    public class JournalEntryDto: EntityDto<Guid>
    {
        [Required]
        public Guid ProgressTrackerId { get; set; }
        [Required]
        public string Content { get; set; }
        [Required]
        public DateTime EntryDate { get; set; }
        [Required]
        public List<string> Tags { get; set; }
        [Required]
        public bool IsPrivate { get; set; }
    }
}
