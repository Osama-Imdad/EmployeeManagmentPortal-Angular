import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordAnalyticsComponent } from './dashbord-analytics.component';

describe('DashbordAnalyticsComponent', () => {
  let component: DashbordAnalyticsComponent;
  let fixture: ComponentFixture<DashbordAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
