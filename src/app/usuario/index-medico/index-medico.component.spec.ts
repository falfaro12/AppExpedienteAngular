import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMedicoComponent } from './index-medico.component';

describe('IndexMedicoComponent', () => {
  let component: IndexMedicoComponent;
  let fixture: ComponentFixture<IndexMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
