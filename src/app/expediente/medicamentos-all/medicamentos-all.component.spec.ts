import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosAllComponent } from './medicamentos-all.component';

describe('MedicamentosAllComponent', () => {
  let component: MedicamentosAllComponent;
  let fixture: ComponentFixture<MedicamentosAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentosAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentosAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
