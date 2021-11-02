import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path : `login`, component : LoginComponent
  },
  {
    path : `home`, component : HomeComponent, canActivate: [ AuthGuardService ]
  },
  {
    path : `registrar`, component : RegistrarComponent
  },
  {
    path : `esqueceu-senha`, component : EsqueceuSenhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
