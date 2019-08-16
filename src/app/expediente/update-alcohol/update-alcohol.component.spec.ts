import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlcoholComponent } from './update-alcohol.component';

describe('UpdateAlcoholComponent', () => {
  let component: UpdateAlcoholComponent;
  let fixture: ComponentFixture<UpdateAlcoholComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAlcoholComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
