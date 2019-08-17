import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioMantComponent } from './horario-mant.component';

describe('HorarioMantComponent', () => {
  let component: HorarioMantComponent;
  let fixture: ComponentFixture<HorarioMantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioMantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
