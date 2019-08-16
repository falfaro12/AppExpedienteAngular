import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermedadAllExpedienteComponent } from './enfermedad-all-expediente.component';

describe('EnfermedadAllExpedienteComponent', () => {
  let component: EnfermedadAllExpedienteComponent;
  let fixture: ComponentFixture<EnfermedadAllExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfermedadAllExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermedadAllExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
