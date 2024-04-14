using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChartSeries.Objects;
using ChartSeries.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ChartSeriesApiService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChartSeriesController : ControllerBase
    {
        private readonly ILogger<ChartSeriesController> _logger;
        private readonly IChartService _chartService;

        public ChartSeriesController(ILogger<ChartSeriesController> logger, IChartService chartService)
        {
            this._logger = logger;
            this._chartService = chartService;
        }

        [HttpGet]
        public IEnumerable<ChartPoint> Get()
        {
            this._logger.LogInformation($"{DateTimeOffset.Now.ToLocalTime()}");
            IEnumerable<ChartPoint> chartPoints = this._chartService.GetPoints();
            return chartPoints;
        }
    }
}
