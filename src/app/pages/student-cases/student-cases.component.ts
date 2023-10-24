import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {
  Case,
  CaseForm,
  IGetUserInfo,
} from 'src/app/interfaces/form.interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { CasesService } from 'src/app/services/cases.service';
import { LoginService } from 'src/app/services/login.service';
import { tokenGetter } from 'src/app/utils/jwt.util';
@Component({
  selector: 'app-student-cases',
  templateUrl: './student-cases.component.html',
  styleUrls: ['./student-cases.component.css'],
})
export class StudentCasesComponent {
  visible: boolean = false;
  visibleResponse: boolean = false;
  isLoaded: boolean = false;
  case: any;
  cases!: Case[];
  selectedCase: any;
  selectedAction: string = 'VIEW';
  constructor(
    private router: Router,
    private _casesService: CasesService,
    private _jwtService: JwtHelperService
  ) {}

  ngOnInit() {
    this.getCases();
  }


  goToPage(pageName: any) {
    this.router.navigate([`${pageName}`]);
  }

  get userRole() {
    return `${this._jwtService.decodeToken(tokenGetter()).role}`;
  }
  
  getCases() {
    this._casesService.getAllCases().subscribe({
      next: (data: any) => {
        this.cases = data;
        console.log(data);
        
      },
    });
  }

  getCase(id: any, action: string) {
    this._casesService.getCase(id).subscribe({
      next: (res: any) => {
        this.selectedCase = res;
        this.visible = true;
        this.selectedAction = action;
        console.log(res);
        
      },
    });
  }


  handleClose(event: any) {
    this.visible = event.value;
    console.log(event.form)
  }
}
