import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateCasesRoutingModule } from './generate-cases-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { GenerateCasesComponent } from './generate-cases.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from 'src/app/components/shared.module';
import { FileUploadModule } from 'primeng/fileupload';
@NgModule({
  declarations: [GenerateCasesComponent],
  imports: [
    CommonModule,
    GenerateCasesRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextareaModule,
    InputTextModule,
    FileUploadModule
  ]
})
export class GenerateCasesModule { }
