import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

export const allAppRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', component: RegisterComponent },
  { path: '', component: HomeComponent }
];
