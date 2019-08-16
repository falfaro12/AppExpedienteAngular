import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActividadExpedienteComponent } from './create-actividad-expediente.component';

describe('CreateActividadExpedienteComponent', () => {
  let component: CreateActividadExpedienteComponent;
  let fixture: ComponentFixture<CreateActividadExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateActividadExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateActividadExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
