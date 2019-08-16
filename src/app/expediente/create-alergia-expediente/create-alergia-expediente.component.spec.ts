import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlergiaExpedienteComponent } from './create-alergia-expediente.component';

describe('CreateAlergiaExpedienteComponent', () => {
  let component: CreateAlergiaExpedienteComponent;
  let fixture: ComponentFixture<CreateAlergiaExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAlergiaExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlergiaExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
