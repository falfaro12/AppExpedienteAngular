import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCrearComponent } from './perfil-crear.component';

describe('PerfilCrearComponent', () => {
  let component: PerfilCrearComponent;
  let fixture: ComponentFixture<PerfilCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
