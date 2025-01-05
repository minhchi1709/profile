import { TestBed } from '@angular/core/testing';

import { ComputerEngineeringService } from './computer-engineering.service';

describe('ComputerEngineeringService', () => {
  let service: ComputerEngineeringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerEngineeringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
