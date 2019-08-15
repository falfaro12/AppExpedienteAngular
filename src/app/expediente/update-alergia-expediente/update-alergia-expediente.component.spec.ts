import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlergiaExpedienteComponent } from './update-alergia-expediente.component';

describe('UpdateAlergiaExpedienteComponent', () => {
  let component: UpdateAlergiaExpedienteComponent;
  let fixture: ComponentFixture<UpdateAlergiaExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAlergiaExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAlergiaExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
