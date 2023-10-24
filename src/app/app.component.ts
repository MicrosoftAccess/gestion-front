import { Component } from '@angular/core';
import { NavigationStart, Route, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { tokenGetter } from './utils/jwt.util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion casos';
  faCoffee = faCoffee;
  constructor(private _router: Router, private _jwtService: JwtHelperService){}

  get displayNavBar(){
    return this._router.url.includes('/login')
  }

  ngOnInit(): void {

  }
}
