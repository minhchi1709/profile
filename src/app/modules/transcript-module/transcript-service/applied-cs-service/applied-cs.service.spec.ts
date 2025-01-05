import { TestBed } from '@angular/core/testing';

import { AppliedCSService } from './applied-cs.service';

describe('AppliedCSService', () => {
  let service: AppliedCSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppliedCSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
