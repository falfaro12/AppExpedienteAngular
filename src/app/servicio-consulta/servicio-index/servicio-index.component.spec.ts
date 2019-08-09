import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioIndexComponent } from './servicio-index.component';

describe('ServicioIndexComponent', () => {
  let component: ServicioIndexComponent;
  let fixture: ComponentFixture<ServicioIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
