import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholAllComponent } from './alcohol-all.component';

describe('AlcoholAllComponent', () => {
  let component: AlcoholAllComponent;
  let fixture: ComponentFixture<AlcoholAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcoholAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
