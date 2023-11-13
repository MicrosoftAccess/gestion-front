import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { createCaseGuard } from './create-case.guard';

describe('createCaseGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => createCaseGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
