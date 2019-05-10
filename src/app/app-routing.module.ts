import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/public/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: "/dashboard",  pathMatch: 'full'},
  {path:"login", component: LoginComponent},
  {path: "dashboard", loadChildren: './modules/private/private.module#PrivateModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
