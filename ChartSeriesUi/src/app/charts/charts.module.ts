import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesChartComponent } from './series-chart/series-chart.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SeriesChartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UiComponentsModule
  ],
  exports: [
    SeriesChartComponent
  ]
})
export class ChartsModule { }
