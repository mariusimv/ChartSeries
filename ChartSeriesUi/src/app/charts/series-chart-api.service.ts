import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChartPoint } from './series-chart/ChartPoint';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesChartApiService {

  constructor(private httpClient: HttpClient) { }

  async getChartSeriesAsync() {
    await (new Promise(resolve => setTimeout(resolve, 1000)));

    return await lastValueFrom(this.httpClient.get<ChartPoint[]>("http://localhost:5000/ChartSeries",
      { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }) }));
  }
}
