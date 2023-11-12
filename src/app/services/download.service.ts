import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  BASE_URL: string = 'http://localhost:3000'

  constructor(private http:HttpClient) { }
  
  downloadFile(file:any): Observable<any>{
    return this.http.get(`${this.BASE_URL}/download/${file}`, {observe: 'response', responseType: 'blob'})
  }

  downloadExcel(query:any){
    return this.http.post(`${this.BASE_URL}/report/generate/excel`,query,{responseType:'blob'})
  }
}
