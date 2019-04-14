import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfileResolver } from './core/resolvers/profile.resolver';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile',canActivate:[AuthGuard],resolve:{data: ProfileResolver} ,component: ProfileComponent},
  { path: 'cars', loadChildren: './components/car/car.module#CarModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
