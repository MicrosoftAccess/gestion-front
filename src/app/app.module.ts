import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StudentCasesComponent } from './pages/student-cases/student-cases.component';
import { TableModule } from 'primeng/table';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { tokenGetter } from './utils/jwt.util';
import { AuthService, authFactory } from './services/auth.service';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    OfferListComponent,
    ProductFormComponent,
    StudentCasesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    FontAwesomeModule,
    TableModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4200", "localhost:3000"],
      },
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: authFactory,
      multi: true,
      deps: [AuthService],
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
