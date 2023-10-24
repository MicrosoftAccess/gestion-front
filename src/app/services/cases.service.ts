import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CaseForm } from '../interfaces/form.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  BASE_URL: string = 'http://localhost:3000'

  constructor(private http:HttpClient) { }
  
  create(caseForm: FormData): Observable<any>{
    return this.http.post(`${this.BASE_URL}/cases`,caseForm)
  }
  getAllCases(){
    return this.http.get(`${this.BASE_URL}/cases`)
  }

  getCase(id:any){
    return this.http.get(`${this.BASE_URL}/cases/${id}`)
  }

  updateCase(id:number, updateCaseForm: any){
    return this.http.patch(`${this.BASE_URL}/cases/${id}`,updateCaseForm)
  }


}
