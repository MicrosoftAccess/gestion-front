import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Campus, CaseForm } from 'src/app/interfaces/form.interfaces';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { CasesService } from 'src/app/services/cases.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from 'src/app/utils/jwt.util';
import { NrcService } from 'src/app/services/nrc.service';
@Component({
  selector: 'app-generate-cases',
  templateUrl: './generate-cases.component.html',
  styleUrls: ['./generate-cases.component.css'],
})
export class GenerateCasesComponent {
  @ViewChild('inputFile')
  inputFile!: ElementRef;
  caseForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _casesService: CasesService,
    private _router: Router,
    private _messageService: MessageService,
    private _file: FileUploadService,
    private _jwtService: JwtHelperService,
    private _nrcService: NrcService
  ) {
    this.caseForm = this.formBuilder();
  }
  campusDropDown!: Campus[];
  isDisabled:boolean = false
  fileName = '';
  nrcDropDown!: any;
  selectedCampus!: Campus;
  selectedNRC!:any
  ngOnInit() {
    this.getNrcs()
    this.campusDropDown = [
      { id: 1, name: 'Antonio Varas' },
      { id: 2, name: 'Bellavista' },
      { id: 3, name: 'Casona las Condes' },
      { id: 4, name: 'Campus Creativo' },
      { id: 5, name: 'Concepción' },
      { id: 6, name: 'Los Leones' },
      { id: 7, name: 'República' },
      { id: 8, name: 'Viña del Mar' },
    ];
  }
  goToPage(pageName: any) {
    this._router.navigate([`${pageName}`]);
  }

  get nrc(){
    return `${this._jwtService.decodeToken(tokenGetter()).nrc}`
  }
  get f() {
    return this.caseForm.controls;
  }

  processFile(event: any) {
    const file: File = <File>event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    this.f['file'].setValue(file);
  }

  getNrcs(){
    this._nrcService.getAllNRC().subscribe({
      next:(value)=> {
        this.nrcDropDown = value
        // console.log(this.nrcDropDown);
        
      },
    })
  }

  getNRCbyCampus(event:any){
    this.caseForm.get('nrc')?.enable()
    this.selectedCampus = event
    console.log(this.selectedCampus);
    
    this._nrcService.getByCampus(event.value).subscribe({
      next:(res)=>{
        this.nrcDropDown = res
        
      },
    })
  }

  formBuilder() {
    return this._fb.group({
      title: ['', Validators.required],
      nrc: [{value:null,disabled:true}, Validators.required],
      campus: ['', Validators.required],
      description: ['', Validators.required],
      file: ['', Validators.required],
    });
  }
  createCase() {
    const fd: FormData = new FormData();
    fd.append('file', this.f['file'].value, `${this.f['file'].value.name}`);
    fd.append('form', JSON.stringify(this.caseForm.value));

    console.log(this.caseForm.value);
    console.log(this.selectedNRC);
    
    
    this._casesService.create(fd).subscribe({
      next: (res) => {
        console.log(res);
        
        this._messageService.add({
          severity: 'success',
          summary: 'Caso creado!',
          detail: 'Se ha creado tu caso con éxito',
        });
        this.caseForm = this.formBuilder();
        this.inputFile.nativeElement.value = null;
      },
    });
  }
}
