import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NrcService {
  BASE_URL: string = 'http://localhost:3000'

  constructor(private http:HttpClient) { }
  
  getAllNRC(){
    return this.http.get(`${this.BASE_URL}/nrc`)
  }

  getByCampus(id:number){
    return this.http.get(`${this.BASE_URL}/nrc/${id}`)
  }
}
