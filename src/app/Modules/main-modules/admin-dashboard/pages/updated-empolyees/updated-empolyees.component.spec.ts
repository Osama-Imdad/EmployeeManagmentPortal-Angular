import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedEmpolyeesComponent } from './updated-empolyees.component';

describe('UpdatedEmpolyeesComponent', () => {
  let component: UpdatedEmpolyeesComponent;
  let fixture: ComponentFixture<UpdatedEmpolyeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedEmpolyeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedEmpolyeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
