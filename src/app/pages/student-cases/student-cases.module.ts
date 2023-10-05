import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StudentCasesRoutingModule } from './student-cases-routing.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentCasesRoutingModule,
    TableModule,
    ButtonModule
  ]
})
export class StudentCasesModule { }
