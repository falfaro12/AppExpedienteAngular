import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergiaDropComponent } from './alergia-drop.component';

describe('AlergiaDropComponent', () => {
  let component: AlergiaDropComponent;
  let fixture: ComponentFixture<AlergiaDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlergiaDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergiaDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
