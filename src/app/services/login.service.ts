import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LoginForm } from '../interfaces/form.interfaces';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL: string = 'http://localhost:3000'

  constructor(private http:HttpClient) { }
  
  login(loginForm:LoginForm): Observable<any>{
    return this.http.post(`${this.BASE_URL}/auth/login`,loginForm)
  }
  getCurrentUser(){
    return this.http.get(`${this.BASE_URL}/auth/login`)
  }
}
