using System;
using System.IO;
using System.Threading.Tasks;
using Azure;
using Azure.Data.Tables;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Collections;


namespace QQ.Function
{
    public static class RSVPForm
    {
        [FunctionName("RSVPForm")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log,
            [Table("rsvp", Connection = "AZURE_STORAGE_CONNECTION_STRING")] TableClient rsvpTable)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var rsvps = JsonConvert.DeserializeObject<RSVPDTO>(requestBody);

            foreach (var rsvp in rsvps.Responses)
            {
                log.LogInformation(rsvp.Name);
                try
                {
                    var response = await rsvpTable.AddEntityAsync(new RSVPSubmission(rsvp));
                    log.LogInformation(response.Status.ToString());
                }
                catch (Exception e)
                {
                    log.LogError(e, $"Something when wrong adding {rsvp.Name}'s RSVP");
                    return new StatusCodeResult(500);
                }
            }

            string responseMessage = "";
            return new OkObjectResult(responseMessage);
        }
    }

    public class RSVPSubmission : ITableEntity
    {
        public RSVPSubmission(){}
        public RSVPSubmission(RSVPResponse response)
        {
            PartitionKey = response.IsComing;
            RowKey = response.Name;
            Dinner = string.IsNullOrWhiteSpace(response.Dinner) ? "N/A" : response.Dinner;
            Allergies = string.IsNullOrWhiteSpace(response.Allergies) ? "N/A" : response.Allergies;
        }
        public string PartitionKey { get; set; } = "";
        public string RowKey { get; set; } = "";
        public DateTimeOffset? Timestamp { get; set; }
        public ETag ETag { get; set; }
        public string Dinner { get; set; } = "N/A";
        public string Allergies { get; set; } = "N/A";

    }

    public class RSVPDTO
    {
        public List<RSVPResponse> Responses { get; set; } = new List<RSVPResponse>();
    }

    public class RSVPResponse
    {
        public string IsComing { get; set; } = "No";
        public string Name { get; set; } = "";
        public string Dinner { get; set; } = "";
        public string Allergies { get; set; } = "";
    }
}
