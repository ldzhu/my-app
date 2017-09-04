import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoFiberhomeChartComponent } from './kendo-fiberhome-chart.component';

describe('KendoFiberhomeChartComponent', () => {
  let component: KendoFiberhomeChartComponent;
  let fixture: ComponentFixture<KendoFiberhomeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoFiberhomeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoFiberhomeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
