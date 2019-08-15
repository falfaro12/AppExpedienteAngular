import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoExpedienteComponent } from './mantenimiento-expediente.component';

describe('MantenimientoExpedienteComponent', () => {
  let component: MantenimientoExpedienteComponent;
  let fixture: ComponentFixture<MantenimientoExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
