import { TestBed } from '@angular/core/testing';

import { ServicioConsultaService } from './servicio-consulta.service';

describe('ServicioConsultaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioConsultaService = TestBed.get(ServicioConsultaService);
    expect(service).toBeTruthy();
  });
});
