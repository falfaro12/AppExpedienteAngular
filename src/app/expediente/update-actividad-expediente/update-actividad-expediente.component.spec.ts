import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActividadExpedienteComponent } from './update-actividad-expediente.component';

describe('UpdateActividadExpedienteComponent', () => {
  let component: UpdateActividadExpedienteComponent;
  let fixture: ComponentFixture<UpdateActividadExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActividadExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActividadExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
