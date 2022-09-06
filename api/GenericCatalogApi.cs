using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Azure.Data.Tables;
using Azure;
using System.Text.Json;
using System.Collections.Generic;
using System.Linq;

namespace NQuandt.Functions
{
    public static class GenericCatalogApi
    {
        private static JsonSerializerOptions _settings = new JsonSerializerOptions() {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };

        [FunctionName("GenericCatalogApi")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log,
            [Table("genericcatalog", Connection = "AZURE_STORAGE_CONNECTION_STRING")] TableClient catalog)
        {   
            var catalogRequest = await JsonSerializer.DeserializeAsync<CatalogRequest>(req.Body, _settings);

            var entries = new List<GenericCatalogEntryDTO>();
            if (catalogRequest.ReturnAll) {
                await foreach(var entry in catalog.QueryAsync<GenericCatalogEntry>(x => true)) {
                    entries.Add(GenericCatalogEntryMapper.ToDTO(entry));
                }
            }


            System.Threading.Thread.Sleep(3000); //Simulate a slow connection.

            var str = JsonSerializer.Serialize(entries, _settings);
            return new ContentResult() {
                Content = str,
                ContentType = "application/json",
                StatusCode = 200
            };
        }
    }

    public static class GenericCatalogEntryMapper
    {
        public static GenericCatalogEntryDTO ToDTO(GenericCatalogEntry x){
            return new GenericCatalogEntryDTO() {
                Name = x.Name.AsNullIfWhitespace(),
                Tags = x.Tags.Split(new char[] {','}, StringSplitOptions.RemoveEmptyEntries).Select(x => x.Trim()),
                Description = x.Description.AsNullIfWhitespace(),
                Url = x.Url.AsNullIfWhitespace(),
            };
        }

        public static GenericCatalogEntry FromDTO(GenericCatalogEntryDTO entry){
            throw new NotImplementedException();            
        }
    }

    public class CatalogRequest
    {
        public bool ReturnAll { get; set; } = false;
    }

    public class GenericCatalogEntryDTO
    {
        public string Name { get; set; } = null;
        public IEnumerable<string> Tags { get; set; } = null;
        public string Description { get; set; } = null;
        public string Url { get; set; } = null;
    }

    public class GenericCatalogEntry : ITableEntity
    {
        public GenericCatalogEntry() { }
        public string PartitionKey { get; set; } = "";
        public string RowKey { get; set; } = "";
        public DateTimeOffset? Timestamp { get; set; }
        public ETag ETag { get; set; }
        public string Name { get; set; } = "";
        public string Tags { get; set; } = "";
        public string Description { get; set; } = "";
        public string Url { get; set; } = "";

    }
}
