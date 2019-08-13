import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilIndexComponent } from './perfil-index.component';

describe('PerfilIndexComponent', () => {
  let component: PerfilIndexComponent;
  let fixture: ComponentFixture<PerfilIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
