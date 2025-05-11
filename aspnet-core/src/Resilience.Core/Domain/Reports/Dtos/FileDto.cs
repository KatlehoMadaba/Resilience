namespace Resilience.Domain.Reports.Dtos
{
    public class FileDto
    {
        public string FileName { get; set; }
        public string ContentType { get; set; }
        public byte[] FileBytes { get; set; }
        public long FileSize => FileBytes?.Length ?? 0;

        //method overloading for stages in the pdf generation
        public FileDto()
        {
        }

        public FileDto(string fileName, string contentType)
        {
            FileName = fileName;
            ContentType = contentType;
        }
        public FileDto(string fileName, string contentType, byte[] fileBytes)
        {
            FileName = fileName;
            ContentType = contentType;
            FileBytes = fileBytes;
        }
    }
}