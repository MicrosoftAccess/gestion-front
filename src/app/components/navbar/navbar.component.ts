import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from 'src/app/services/login.service';
import { tokenGetter } from 'src/app/utils/jwt.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private _router:Router, private _loginService:LoginService, private _jwtService: JwtHelperService){}
  ngOnInit(){
    // this.getUserInfo()
  }
  logOut(){
    localStorage.removeItem('access_token');
    this._router.navigate(['/login']);
  }
  get user(){
    return `${this._jwtService.decodeToken(tokenGetter()).name} ${this._jwtService.decodeToken(tokenGetter()).surname}`
  }
  userInfo!:any
  
}
