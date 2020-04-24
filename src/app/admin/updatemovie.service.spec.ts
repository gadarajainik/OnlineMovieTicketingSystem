import { TestBed } from '@angular/core/testing';

import { UpdatemovieService } from './updatemovie.service';

describe('UpdatemovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatemovieService = TestBed.get(UpdatemovieService);
    expect(service).toBeTruthy();
  });
});
