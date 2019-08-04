import { TestBed } from '@angular/core/testing';

import { CustomHandlerErrorService } from './custom-handler-error-service.service';

describe('CustomHandlerErrorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomHandlerErrorService = TestBed.get(CustomHandlerErrorService);
    expect(service).toBeTruthy();
  });
});
