import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpedienteComponent } from './update-expediente.component';

describe('UpdateExpedienteComponent', () => {
  let component: UpdateExpedienteComponent;
  let fixture: ComponentFixture<UpdateExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
