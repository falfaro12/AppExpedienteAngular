import { TestBed } from '@angular/core/testing';

import { NotificacionService } from './notificacion.service.service';

describe('Notificacion.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificacionService = TestBed.get(NotificacionService);
    expect(service).toBeTruthy();
  });
});
