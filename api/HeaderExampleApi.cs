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
    public static class HeaderExampleApi
    {
        private static JsonSerializerOptions _settings = new JsonSerializerOptions()
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };

        [FunctionName("authexample")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            if (!req.Headers.TryGetValue("Z-Proxy-Authorization", out var auth))
            {
                return new NoContentResult();
            }

            return new ContentResult()
            {
                Content = Base64Decode(auth),
                ContentType = "application/json",
                StatusCode = 200
            };
        }

        public static string Base64Decode(string base64EncodedData)
        {
            var base64EncodedBytes = System.Convert.FromBase64String(base64EncodedData);
            return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
        }
    }
}
