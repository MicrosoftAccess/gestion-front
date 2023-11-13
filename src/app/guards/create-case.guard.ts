import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from '../utils/jwt.util';

export const createCaseGuard: CanActivateFn = (
  route,
  state,
  _jwtHelperService: JwtHelperService = inject(JwtHelperService),
  router: Router = inject(Router)
) => {

  const token = tokenGetter();
  const tokenDecoded = _jwtHelperService.decodeToken(token)

  if (tokenDecoded.role!='STUDENT') {
    router.navigate(['student-cases'])
    return false
  }

  return true;
};
