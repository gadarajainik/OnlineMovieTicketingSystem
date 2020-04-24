import { TestBed } from '@angular/core/testing';

import { ManagemovieService } from './managemovie.service';

describe('DeletemovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagemovieService = TestBed.get(ManagemovieService);
    expect(service).toBeTruthy();
  });
});
