import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergiaAllExpedienteComponent } from './alergia-all-expediente.component';

describe('AlergiaAllExpedienteComponent', () => {
  let component: AlergiaAllExpedienteComponent;
  let fixture: ComponentFixture<AlergiaAllExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlergiaAllExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergiaAllExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
