import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import {AuthGuard} from './core/guards/auth.guard'
import { AddCarComponent } from './components/car/add-car/add-car.component';
import { isAdminGuard } from './core/guards/isAdmin.guard';
import { AllCarsComponent } from './components/car/all-cars/all-cars.component';
import { AllCarsResolver } from './core/resolvers/all-cars.resolver';
import { MyRentedCarsComponent } from './components/car/my-rented-cars/my-rented-cars.component';
import { MyRentedCarsResolver } from './core/resolvers/my-rented-cars.resolver';
import { CarDetailsComponent } from './components/car/car-details/car-details.component';
import { SingleCarResolver } from './core/resolvers/single-car.resolver';
import { ProfileResolver } from './core/resolvers/profile.resolver';
import { ProfileComponent } from './components/shared/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cars/create', component: AddCarComponent, canActivate:[isAdminGuard] },
  { path: 'cars', resolve: {data: AllCarsResolver},component: AllCarsComponent},
  { path: 'cars/myrents',canActivate:[AuthGuard] ,resolve: {data: MyRentedCarsResolver},component: MyRentedCarsComponent},
  { path: 'cars/details/:id',canActivate:[isAdminGuard] ,resolve: {data: SingleCarResolver},component: CarDetailsComponent},
  { path: 'profile', canActivate:[AuthGuard] ,resolve: {data: ProfileResolver},component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
