import { TestBed } from '@angular/core/testing';

import { GetbookingsService } from './getbookings.service';

describe('GetbookingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetbookingsService = TestBed.get(GetbookingsService);
    expect(service).toBeTruthy();
  });
});
