import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoMedicoComponent } from './mantenimiento-medico.component';

describe('MantenimientoMedicoComponent', () => {
  let component: MantenimientoMedicoComponent;
  let fixture: ComponentFixture<MantenimientoMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
