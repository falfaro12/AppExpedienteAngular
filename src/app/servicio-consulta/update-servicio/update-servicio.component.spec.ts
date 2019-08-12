import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServicioComponent } from './update-servicio.component';

describe('UpdateServicioComponent', () => {
  let component: UpdateServicioComponent;
  let fixture: ComponentFixture<UpdateServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
