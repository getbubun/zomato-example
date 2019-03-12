import { TestBed } from '@angular/core/testing';

import { ZomatoserviceService } from './zomatoservice.service';

describe('ZomatoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZomatoserviceService = TestBed.get(ZomatoserviceService);
    expect(service).toBeTruthy();
  });
});
