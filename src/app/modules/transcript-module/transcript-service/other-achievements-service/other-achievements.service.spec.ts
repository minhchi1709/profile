import { TestBed } from '@angular/core/testing';

import { OtherAchievementsService } from './other-achievements.service';

describe('OtherAchievementsService', () => {
  let service: OtherAchievementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherAchievementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
