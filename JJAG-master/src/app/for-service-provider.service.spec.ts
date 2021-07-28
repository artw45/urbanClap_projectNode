import { TestBed } from '@angular/core/testing';

import { ForServiceProviderService } from './for-service-provider.service';

describe('ForServiceProviderService', () => {
  let service: ForServiceProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForServiceProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
