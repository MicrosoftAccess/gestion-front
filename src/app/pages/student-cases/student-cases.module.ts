import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCasesRoutingModule } from './student-cases-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StudentCasesComponent } from './student-cases.component';
import { SharedModule } from 'src/app/components/shared.module';
import {DropdownModule} from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { CaseStatusPipe } from 'src/app/pipes/case-status.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({

  declarations: [
    StudentCasesComponent,
    CaseStatusPipe
  ],
  imports: [
    CommonModule,
    StudentCasesRoutingModule,
    TableModule,
    ButtonModule,
    SharedModule,
    DropdownModule,
    TooltipModule,
    MultiSelectModule,
    SliderModule,
    TagModule,
    ProgressBarModule,
    TranslateModule,
    TieredMenuModule,
    InputTextModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule
    

  ]
})
export class StudentCasesModule { }
