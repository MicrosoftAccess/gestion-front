import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from '../utils/jwt.util';

export const authGuard: CanActivateFn = (
  route,
  state,
  _jwtHelperService: JwtHelperService = inject(JwtHelperService),
  router: Router = inject(Router)
) => {

  const token = tokenGetter();
  
  if (route.routeConfig?.path?.includes('login')) {
    if (!token) return true;

    const expired = _jwtHelperService.isTokenExpired(token);


    

    if (!expired) router.navigate(['student-cases']);
    return expired;
  } else {
    if (!token) {
      router.navigate(['login']);
      return false;
    }

    const expired = _jwtHelperService.isTokenExpired(token);

    if (expired) router.navigate(['login']);
    return true;
  }
};
