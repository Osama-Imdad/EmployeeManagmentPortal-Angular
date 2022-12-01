import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDataModelComponent } from './emp-data-model.component';

describe('EmpDataModelComponent', () => {
  let component: EmpDataModelComponent;
  let fixture: ComponentFixture<EmpDataModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDataModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDataModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
