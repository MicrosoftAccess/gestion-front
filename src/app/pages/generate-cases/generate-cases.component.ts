import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CaseForm } from 'src/app/interfaces/form.interfaces';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { CasesService } from 'src/app/services/cases.service';
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
    private _file: FileUploadService
  ) {
    this.caseForm = this.formBuilder();
  }
  goToPage(pageName: any) {
    this._router.navigate([`${pageName}`]);
  }

  fileName = '';

  get f() {
    return this.caseForm.controls;
  }

  processFile(event: any) {
    const file: File = <File>event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    this.f['file'].setValue(file);
  }

  formBuilder() {
    return this._fb.group({
      title: ['', Validators.required],
      nrc: [null, Validators.required],
      campus: ['', Validators.required],
      description: ['', Validators.required],
      file: ['', Validators.required],
    });
  }
  createCase() {
    const fd: FormData = new FormData();
    fd.append('file', this.f['file'].value, 'file');
    fd.append('form', JSON.stringify(this.caseForm.value));

    this._casesService.create(fd).subscribe({
      next: (res) => {
        this._messageService.add({
          severity: 'success',
          summary: 'Caso creado!',
          detail: 'Se ha creado tu caso',
        });
        this.caseForm = this.formBuilder();
        this.inputFile.nativeElement.value = null;
      },
    });
  }
}
