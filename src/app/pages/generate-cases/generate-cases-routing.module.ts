import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateCasesComponent } from './generate-cases.component';

const routes: Routes = [{ path: '', component: GenerateCasesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateCasesRoutingModule { }
