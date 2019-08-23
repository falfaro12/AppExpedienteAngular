import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosIndexComponent } from './medicos-index.component';

describe('MedicosIndexComponent', () => {
  let component: MedicosIndexComponent;
  let fixture: ComponentFixture<MedicosIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicosIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
