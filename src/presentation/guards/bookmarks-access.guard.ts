import { CanActivateFn } from '@angular/router';

export const bookmarksAccessGuard: CanActivateFn = (route, state) => {
  return false;
};
