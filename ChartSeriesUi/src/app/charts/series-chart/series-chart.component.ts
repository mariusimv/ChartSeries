import { Component, OnInit } from '@angular/core';
import { SeriesChartApiService } from '../series-chart-api.service';
import { ChartPoint } from './ChartPoint';

@Component({
  selector: 'app-series-chart',
  templateUrl: './series-chart.component.html',
  styleUrls: ['./series-chart.component.css']
})
export class SeriesChartComponent implements OnInit {
  chartValuesData: any;
  chartLineOptions: any;
  dataSetPoints: ChartPoint[] | undefined = undefined;
  info: string | undefined = undefined;

  constructor(private apiService: SeriesChartApiService) {
    this.chartLineOptions = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: false,
            },
            pinch: {
              enabled: false
            },
            mode: 'xy', /// options xy / x / y
          }
        },
      },
      scales: {
        x: {
          grid: {
            drawBorder: false,
            display: false
          }
        },
        y: {
          title: {
            display: true
          }
        },
      },
    };
  }

  async ngOnInit(): Promise<void> {
    await this.loadDataAsync();

    this.chartValuesData = {
      datasets: [
        {
          order: 1,
          label: "Chart Series",
          data: this.dataSetPoints,

          borderWidth: 2,

          pointStyle: 'circle',
          pointRadius: 10,
          pointHoverRadius: 20,
          pointBorderWidth: 1,

          tension: 0.4,
          cubicInterpolationMode: 'monotone',
          backgroundColor: 'rgb(255, 99, 132)'
        }
      ]
    };
  }

  onRefreshClick() {
    this.loadDataAsync();
  }

  async loadDataAsync() {
    this.dataSetPoints = undefined;
    this.info = undefined;

    try {
      this.dataSetPoints = await this.apiService.getChartSeriesAsync();
    }
    catch {
      this.dataSetPoints = [];
      this.info = "Error while fetching data. The server might be down!";
    }

    console.log(this.dataSetPoints);
  }
}
