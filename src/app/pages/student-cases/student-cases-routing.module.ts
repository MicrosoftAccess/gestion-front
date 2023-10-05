import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCasesComponent } from './student-cases.component';

const routes: Routes = [
  {path: '', component: StudentCasesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentCasesRoutingModule { }
