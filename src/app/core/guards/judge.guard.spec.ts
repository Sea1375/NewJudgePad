import { TestBed } from '@angular/core/testing';

import { JudgeGuard } from './judge.guard';

describe('JudgeGuard', () => {
  let guard: JudgeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JudgeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
