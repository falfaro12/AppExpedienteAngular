import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirugiasAllComponent } from './cirugias-all.component';

describe('CirugiasAllComponent', () => {
  let component: CirugiasAllComponent;
  let fixture: ComponentFixture<CirugiasAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirugiasAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirugiasAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
