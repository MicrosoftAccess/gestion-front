import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
const routes: Routes = [

  {
    path:'',redirectTo: '/login',pathMatch: 'full'
  },
  {
    path:'login',
    // component: LoginComponent
    canActivate: [authGuard],
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'generate-cases',
    // component:RegisterComponent
    canActivate: [authGuard],
    loadChildren: () => import('./pages/generate-cases/generate-cases.module').then(m => m.GenerateCasesModule)
  },
  {
    path:'student-cases',
    // component:RegisterComponent
    canActivate: [authGuard],
    loadChildren: () => import('./pages/student-cases/student-cases.module').then(m => m.StudentCasesModule)
  },

  // {
  //   path:'product',
  //   component:
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
