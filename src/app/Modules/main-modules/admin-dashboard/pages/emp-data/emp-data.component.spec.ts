import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMPDataComponent } from './emp-data.component';

describe('EMPDataComponent', () => {
  let component: EMPDataComponent;
  let fixture: ComponentFixture<EMPDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMPDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMPDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
