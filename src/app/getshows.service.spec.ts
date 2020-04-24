import { TestBed } from '@angular/core/testing';

import { GetshowsService } from './getshows.service';

describe('GetshowsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetshowsService = TestBed.get(GetshowsService);
    expect(service).toBeTruthy();
  });
});
