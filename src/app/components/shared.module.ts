import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CaseReviewComponent } from 'src/app/components/case-review/case-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { NavbarComponent } from './navbar/navbar.component';
import { InputTextModule } from 'primeng/inputtext';
import { CaseStatusPipe } from '../pipes/case-status.pipe';
@NgModule({
  declarations: [
    CaseReviewComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    DividerModule,
    CalendarModule,
    InputTextareaModule,
    DropdownModule,
    InputTextModule
  ],
  exports: [
    CaseReviewComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
