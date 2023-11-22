import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Case } from 'src/app/interfaces/form.interfaces';
import { CasesService } from 'src/app/services/cases.service';
import { tokenGetter } from 'src/app/utils/jwt.util';
import { SlideMenu } from 'primeng/slidemenu'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampusService } from 'src/app/services/campus.service';
import { DownloadService } from 'src/app/services/download.service';
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
  campus:any
  periods:any
  selectedCase: any;
  selectedAction: string = 'VIEW';
  titles!: any[];
  statuses!: any[];
  selectedExcel: any
  sidebarVisible: boolean = false;
  activityValues: number[] = [0, 100];
  selectedQuery: any
  date: number | undefined
  constructor(
    private router: Router,
    private _casesService: CasesService,
    private _jwtService: JwtHelperService,
    private messageService:MessageService,
    private _fb: FormBuilder,
    private _campusService:CampusService,
    private _downloadService:DownloadService
  ) {
    this.campusForm = this.formBuilder();

  }
  
  campusForm:FormGroup
  
  query: any | undefined;
  selectedCity: any | undefined;
  ngOnInit() {
    this.getCases();
    this.query = [
      { name: 'Resumen general', code: 'RG' },
      { name: 'Campus', code: 'CA' },
      { name: 'Profesores', code: 'PR' },
      { name: 'NRC', code: 'NRC' },
  ];

  
    this.statuses = [
      { label: 'En espera', value: 'UNSOLVED' },
      { label: 'Resuelto', value: 'SOLVED' },
      { label: 'Rechazado', value: 'REJECTED' },
      { label: 'Aprobado', value: 'APPROVED' },
    ];
  }

 
  formBuilder() {
    return this._fb.group({
      campus: ['', Validators.required],
      period: [null, Validators.required],
      reduce:['campusId',Validators.required],
      query:['CAMPUS',Validators.required]
    });
  }
  goToPage(pageName: any) {
    this.router.navigate([`${pageName}`]);
  }

  get userRole() {
    return `${this._jwtService.decodeToken(tokenGetter()).role}`;
  }
  clear(table: any) {
    table.clear();
  }

  getCampus(){
    if(this.selectedQuery.code=='CA'){
      this._campusService.getEveryCampus().subscribe({
        next:(res) => {
          this.campus = res
          this.periods = [
            {name:'Primer Semestre',code:10},
            {name:'Segundo Semestre',code:20},
            {name:'Primer Trimestre Advance',code:5},
            {name:'Segundo Trimestre Advance',code:15},
            {name:'Tercer Trimestre Advance',code:25},
          ]
        },
      })

    }
  }

  getCases() {
    this._casesService.getAllCases().subscribe({
      next: (data: any) => {
        this.cases = data;
      },
    });
    // const titles = this.cases.map(case=> this.case.title)
  }

  onChange(){
    this.getCampus();

  }

  onClick(option:any){
    let query:any
    
    switch(option){
      case 1:
        query = {reduce:'campusId',query:'GENERAL'}
        break
        case 2:
          query = this.campusForm.value
        break
      case 3:
        query = {reduce:'professorId',query:'PROFESSOR'}
        break
      case 4:
        query = {reduce:'nrcId',query:'NRC'}
        break
      default:
        query = null
    }
    this._downloadService.downloadExcel(query).subscribe(response =>{
      this.downloadFile(response)
    })
  }
  downloadFile(data: Response|any) {
    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url= window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${'Reporte Gestión Certificados' + new Date().toISOString()}.xlsx`);
    document.body.appendChild(link);
    link.click();
    // window.open(url);
  }
 

  getCase(id: any, action: string) {
    
    
    this._casesService.getCase(id).subscribe({
      next: (res: any) => {
        this.selectedCase = res;
        this.visible = true;
        this.selectedAction = action;
      },
    });
  }

  getSeverity(status: any) {
    
    switch (status) {
      case "REJECTED":
        return 'danger';

      case 'SOLVED':
        return 'success';

      case 'APPROVED':
        return 'info';

      case 'UNSOLVED':
        return 'warning';
      
      default:
        return ''
    }
  }
  handleClose(event: any) {
    this.visible = event.value;
  }
  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
}

delete() {
    this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
}
}
