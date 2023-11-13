import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http:HttpClient) { }
  BASE_URL: string = 'http://localhost:3000'
  upload(file:any):Observable<any>{
    const formData = new FormData();

    formData.append('file',file, file.name)
    
    return this.http.post(this.BASE_URL,formData)
  }
}
