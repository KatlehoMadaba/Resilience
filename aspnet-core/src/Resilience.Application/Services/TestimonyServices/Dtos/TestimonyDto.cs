using System;
using System.Collections.Generic;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Resilience.Domain.Testimonies;

namespace Resilience.Services.TestimonyServices.Dtos
{
    [AutoMap(typeof(Testimony))]
    public class TestimonyDto: FullAuditedEntityDto<Guid>
    {
        public Guid PersonId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public List<string> Tags { get; set; }
        public bool IsAnonymous { get; set; }
    }
}
