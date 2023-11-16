import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MessageService } from 'primeng/api';
import { Status } from 'src/app/interfaces/form.interfaces';
import { CasesService } from 'src/app/services/cases.service';
import { DownloadService } from 'src/app/services/download.service';
import { tokenGetter } from 'src/app/utils/jwt.util';
enum Test{
  APPROVED = "APPROVED",
  REJECTED = "REJECTED"
}


@Component({
  selector: 'app-case-review',
  templateUrl: './case-review.component.html',
  styleUrls: ['./case-review.component.css']
})
export class CaseReviewComponent {
  @Input() case!: any;
  @Input() visible: boolean = false;
  @Input() action: string = 'VIEW';
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  status: any[];
  minDate: Date = new Date()
  // switchExpression:string = 
  isDisabled: boolean = true;
  selectedStatus!: any;
  public userRole: string = this._jwtService.decodeToken(tokenGetter()).role || 'STUDENT';
  switchOption!:number
  // public caseReviewForm: FormGroup = this._fb.group({dateSelected: [null, Validators.required], response: ['', Validators.required], status:['Rechazado',Validators.required]});
  public caseReviewForm: FormGroup = this.formBuilder()
  public caseReviewFormVR: FormGroup = this.formBuilderVR()
  constructor(private _downloadService:DownloadService,private _router: Router,private _messageService: MessageService , private _jwtService: JwtHelperService, private _fb: FormBuilder, private _caseService:CasesService){
    this.status = [
      {id:1, name: 'Rechazado', enum:Test.REJECTED},
      {id:2, name: 'Aprobado',  enum:Test.APPROVED},
  ];

  }


  formBuilder() {
    return this._fb.group({
      dateTest: [null],
      response: ['', Validators.required],
      status: [null, Validators.required],
    });
  }
 
  formBuilderVR() {
    return this._fb.group({
      vrResponse: ['', Validators.required],
      status: [null, Validators.required],
    });
  }
 


  handleDownload(file:any){
    this._downloadService.downloadFile(file).subscribe({
      next:(value)=> {
        let blob = value.body.slice(0, value.body.size, "application/pdf"); //convert blob type from octet-stream to application/pdf
        const url = URL.createObjectURL(blob);
        window.open(url);
      },
    })
  }


  handleClose(){
    this.onClose.emit({value: false, form: this.caseReviewForm.value});
  }

  get response(){
  return this.caseReviewForm.controls['response']
  }

  get user(){
    return `${this._jwtService.decodeToken(tokenGetter()).name} ${this._jwtService.decodeToken(tokenGetter()).surname}`
  }

  handleDisable(event:any){
    this.isDisabled = event.value == 'Rechazado' 

  }

  onSubmit(id:any){

    
    this.caseReviewForm.value.dateSelected = JSON.stringify(this.caseReviewForm.value.dateSelected)
    
      this._caseService.updateCase(id,this.caseReviewForm.value).subscribe({
        next:(value)=>{
          
          this._messageService.add({
            severity: 'success',
            summary: 'Se ha respondido el caso',
            detail: 'Se ha logrado enviar la respuesta',
          });
          this.caseReviewForm = this.formBuilder()
          this.onUpdate.emit()
          this.visible = false
        },
        error:error =>{
          this._messageService.add({
            severity: 'error',
            summary: 'Hay campos incompletos',
            detail: 'Debes agregar todos los campos necesarios',
          });
        }
      })
  }

  onSubmitVR(id:any){
    
    

    this._caseService.updateCase(id,this.caseReviewFormVR.value).subscribe({
      next:(value)=> {
        this._messageService.add({
          severity: 'success',
          summary: 'Se ha respondido el caso',
          detail: 'Se ha logrado enviar la respuesta',
        });
        this.caseReviewFormVR = this.formBuilderVR()
        this.onUpdate.emit()
        this.visible = false
      },
      error:error =>{
        this._messageService.add({
          severity: 'error',
          summary: 'Hay campos incompletos',
          detail: 'Debes agregar una respuesta y/o un estado para la solicitud',
        })
      }
    })
  }

}
