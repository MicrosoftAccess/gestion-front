import { CanActivateFn } from '@angular/router';

export const createCaseGuard: CanActivateFn = (route, state) => {
  return true;
};
