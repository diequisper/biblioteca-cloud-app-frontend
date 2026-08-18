import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bookmarksAccessGuard } from './bookmarks-access.guard';

describe('bookmarksAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bookmarksAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
