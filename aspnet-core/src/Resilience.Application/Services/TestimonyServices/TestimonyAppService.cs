using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Domain.Repositories;
using Resilience.Domain.Testimonies;
using Resilience.Services.TestimonyServices.Dtos;

namespace Resilience.Services.TestimonyServices
{
    public class TestimonyAppService : AsyncCrudAppService<Testimony, TestimonyDto, Guid, TestimonyDto>
    {
        public TestimonyAppService(IRepository<Testimony, Guid> repository) : base(repository)
        {
        }
    }
}
