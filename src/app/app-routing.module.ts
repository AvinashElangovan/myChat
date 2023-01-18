import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmailverificationComponent } from './pages/emailverification/emailverification.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:"emailVerification", component: EmailverificationComponent},
  {path:'**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
