import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { tokenGetter } from '../utils/jwt.util';


export const authFactory = (authService: AuthService) => () => {

  // initialize auth state
// check item validity
  const _localuser: any = tokenGetter();
  const logged = authService.isLogged(_localuser);
  if (logged) {
    authService.SetState(_localuser);
  } else {
    // remove leftover
    authService.RemoveState();
    // and clean localstroage
    localStorage.removeItem('user');
  }
};

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private stateItem: BehaviorSubject<any> = new BehaviorSubject(null);
  stateItem$: Observable<any> = this.stateItem.asObservable();
  constructor(private _jwtService: JwtHelperService) {}

  setLogin(token: string) {
    this.stateItem.next(token);
  }

  jwtService(){
    return this._jwtService;
  }

  isLogged(token: string): boolean {
    if (token) {
      return !this._jwtService.isTokenExpired(token);
    }

    return true;
  }

  

  SetState(item: any) {
    this.stateItem.next(item);
  }

  RemoveState() {
    this.stateItem.next(null);
  }

}
