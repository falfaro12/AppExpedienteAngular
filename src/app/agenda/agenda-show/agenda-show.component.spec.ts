import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaShowComponent } from './agenda-show.component';

describe('AgendaShowComponent', () => {
  let component: AgendaShowComponent;
  let fixture: ComponentFixture<AgendaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
