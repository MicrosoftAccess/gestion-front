import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCasesRoutingModule } from './student-cases-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StudentCasesComponent } from './student-cases.component';
import { SharedModule } from 'src/app/components/shared.module';
import {DropdownModule} from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
@NgModule({
  declarations: [
    StudentCasesComponent
  ],
  imports: [
    CommonModule,
    StudentCasesRoutingModule,
    TableModule,
    ButtonModule,
    SharedModule,
    DropdownModule,
    TooltipModule
  ]
})
export class StudentCasesModule { }
