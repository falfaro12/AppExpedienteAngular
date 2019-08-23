import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartirStoreComponent } from './compartir-store.component';

describe('CompartirStoreComponent', () => {
  let component: CompartirStoreComponent;
  let fixture: ComponentFixture<CompartirStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompartirStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompartirStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
