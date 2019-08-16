import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadAllExpedienteComponent } from './actividad-all-expediente.component';

describe('ActividadAllExpedienteComponent', () => {
  let component: ActividadAllExpedienteComponent;
  let fixture: ComponentFixture<ActividadAllExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadAllExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadAllExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
