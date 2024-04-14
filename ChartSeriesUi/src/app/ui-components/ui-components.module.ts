import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartJsWrapperComponent } from './chart-js-wrapper/chart-js-wrapper.component';



@NgModule({
  declarations: [
    ChartJsWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChartJsWrapperComponent
  ]
})
export class UiComponentsModule { }
