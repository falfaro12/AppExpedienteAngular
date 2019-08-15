import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleExpedienteComponent } from './detalle-expediente.component';

describe('DetalleExpedienteComponent', () => {
  let component: DetalleExpedienteComponent;
  let fixture: ComponentFixture<DetalleExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
