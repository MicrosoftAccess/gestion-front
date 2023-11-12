import { Component } from '@angular/core';
import { NavigationStart, Route, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { tokenGetter } from './utils/jwt.util';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion casos';
  subscription: Subscription;
  faCoffee = faCoffee;
  constructor(private _router: Router, private _jwtService: JwtHelperService, private primeNGConfig:PrimeNGConfig,private translate: TranslateService){
    this.translate.setDefaultLang('es');
    this.translate.use('es')
    this.subscription = this.translate.stream('es').subscribe(data => {
      this.primeNGConfig.setTranslation(data);
  });
  }

  get displayNavBar(){
    return this._router.url.includes('/login')
  }

  ngOnInit(): void {
  }
//   translate(lang: string) {
//     this._translateService.use(lang);
//     this._translateService.get('es').subscribe(res => this.config.setTranslation(res));
// }
}
