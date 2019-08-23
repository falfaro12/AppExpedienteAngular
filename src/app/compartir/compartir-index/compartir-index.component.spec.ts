import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartirIndexComponent } from './compartir-index.component';

describe('CompartirIndexComponent', () => {
  let component: CompartirIndexComponent;
  let fixture: ComponentFixture<CompartirIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompartirIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompartirIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
