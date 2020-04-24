import { TestBed } from '@angular/core/testing';

import { MovieselectedService } from './movieselected.service';

describe('MovieselectedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieselectedService = TestBed.get(MovieselectedService);
    expect(service).toBeTruthy();
  });
});
