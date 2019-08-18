import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadAllComponent } from './actividad-all.component';

describe('ActividadAllComponent', () => {
  let component: ActividadAllComponent;
  let fixture: ComponentFixture<ActividadAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
