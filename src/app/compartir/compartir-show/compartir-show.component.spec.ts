import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartirShowComponent } from './compartir-show.component';

describe('CompartirShowComponent', () => {
  let component: CompartirShowComponent;
  let fixture: ComponentFixture<CompartirShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompartirShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompartirShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
