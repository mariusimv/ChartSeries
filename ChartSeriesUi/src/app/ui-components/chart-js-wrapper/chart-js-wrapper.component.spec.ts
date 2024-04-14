import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartJsWrapperComponent } from './chart-js-wrapper.component';

describe('ChartJsWrapperComponent', () => {
  let component: ChartJsWrapperComponent;
  let fixture: ComponentFixture<ChartJsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartJsWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartJsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
