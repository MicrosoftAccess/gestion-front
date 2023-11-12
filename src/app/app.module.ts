import { APP_INITIALIZER,  LOCALE_ID , NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableModule } from 'primeng/table';
import { ColumnFilter } from 'primeng/table';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { tokenGetter } from './utils/jwt.util';
import { AuthService, authFactory } from './services/auth.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SharedModule } from './components/shared.module';
import { registerLocaleData } from '@angular/common';
import localePy from '@angular/common/locales/es';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
registerLocaleData(localePy, 'es');

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory:(createTranslateLoader),
        deps:[HttpClient]
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:4200', 'localhost:3000'],
      },
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: authFactory,
      multi: true,
      deps: [AuthService],
    },
    MessageService,
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
