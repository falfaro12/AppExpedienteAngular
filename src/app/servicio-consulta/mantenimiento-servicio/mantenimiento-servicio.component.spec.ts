import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoServicioComponent } from './mantenimiento-servicio.component';

describe('MantenimientoServicioComponent', () => {
  let component: MantenimientoServicioComponent;
  let fixture: ComponentFixture<MantenimientoServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
