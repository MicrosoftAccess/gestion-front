import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampusService {
  BASE_URL: string = 'http://localhost:3000'
  constructor(private http:HttpClient) { }

  getEveryCampus(){
    return this.http.get(`${this.BASE_URL}/campus`)
  }
}
