import { ResolveFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authResolver: ResolveFn<boolean> = (route, state, authService: AuthService = inject(AuthService)) => {
  authService.stateItem$.subscribe(state => {
    
  })
  return true;
};
