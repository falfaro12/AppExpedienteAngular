import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FumadoAllComponent } from './fumado-all.component';

describe('FumadoAllComponent', () => {
  let component: FumadoAllComponent;
  let fixture: ComponentFixture<FumadoAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FumadoAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FumadoAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
