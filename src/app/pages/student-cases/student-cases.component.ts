import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Case, CaseForm } from 'src/app/interfaces/form.interfaces';
import { CasesService } from 'src/app/services/cases.service';
@Component({
  selector: 'app-student-cases',
  templateUrl: './student-cases.component.html',
  styleUrls: ['./student-cases.component.css']
})
export class StudentCasesComponent {
  constructor(private router: Router,private _casesService:CasesService) { }
  ngOnInit(){
    this.getCases()
  }
  goToPage(pageName:any) {
    this.router.navigate([`${pageName}`]);
  }
  cases!:Case[]
  getCases(){
    this._casesService.getAllCases().subscribe({
      next:(data:any) => {
        this.cases=data;
        console.log(this.cases)
      },
    })
  }
}
