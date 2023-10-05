import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateCasesRoutingModule } from './generate-cases-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { GenerateCasesComponent } from './generate-cases.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GenerateCasesComponent],
  imports: [
    CommonModule,
    GenerateCasesRoutingModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GenerateCasesModule { }
