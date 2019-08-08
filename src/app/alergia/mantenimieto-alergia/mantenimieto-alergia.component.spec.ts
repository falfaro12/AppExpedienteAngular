import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimietoAlergiaComponent } from './mantenimieto-alergia.component';

describe('MantenimietoAlergiaComponent', () => {
  let component: MantenimietoAlergiaComponent;
  let fixture: ComponentFixture<MantenimietoAlergiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimietoAlergiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimietoAlergiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
