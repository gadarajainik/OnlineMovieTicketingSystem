import { TestBed } from '@angular/core/testing';

import { SeatselectedService } from './seatselected.service';

describe('SeatselectedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeatselectedService = TestBed.get(SeatselectedService);
    expect(service).toBeTruthy();
  });
});
