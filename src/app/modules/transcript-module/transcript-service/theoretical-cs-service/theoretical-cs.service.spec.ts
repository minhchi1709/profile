import { TestBed } from '@angular/core/testing';

import { TheoreticalCSService } from './theoretical-cs.service';

describe('TheoreticalCSService', () => {
  let service: TheoreticalCSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheoreticalCSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
