import { TestBed } from '@angular/core/testing';

import { AvailableCarsService } from './available-cars.service';

describe('AvailableCarsService', () => {
  let service: AvailableCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
