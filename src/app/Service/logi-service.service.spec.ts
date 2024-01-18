import { TestBed } from '@angular/core/testing';

import { LogiServiceService } from './logi-service.service';

describe('LogiServiceService', () => {
  let service: LogiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
