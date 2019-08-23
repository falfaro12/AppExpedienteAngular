import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaPacienteDetalleComponent } from './agenda-paciente-detalle.component';

describe('AgendaPacienteDetalleComponent', () => {
  let component: AgendaPacienteDetalleComponent;
  let fixture: ComponentFixture<AgendaPacienteDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaPacienteDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaPacienteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
