import { TestBed } from '@angular/core/testing';

import { SeriesChartApiService } from './series-chart-api.service';

describe('SeriesChartApiService', () => {
  let service: SeriesChartApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesChartApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
