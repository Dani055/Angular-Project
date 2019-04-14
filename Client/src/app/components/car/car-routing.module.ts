import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { MyRentedCarsComponent } from './my-rented-cars/my-rented-cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { isAdminGuard } from 'src/app/core/guards/isAdmin.guard';
import { AllCarsResolver } from 'src/app/core/resolvers/all-cars.resolver';
import { MyRentedCarsResolver } from 'src/app/core/resolvers/my-rented-cars.resolver';
import { SingleCarResolver } from 'src/app/core/resolvers/single-car.resolver';

const carRoutes: Routes = [
    { path: '', component: AllCarsComponent, canActivate:[AuthGuard]},
    { path: 'all', component: AllCarsComponent ,resolve: {data: AllCarsResolver}},
    { path: 'create', component: AddCarComponent , canActivate:[isAdminGuard]},
    { path: 'myrents', component: MyRentedCarsComponent,resolve: {data: MyRentedCarsResolver} , canActivate:[AuthGuard]},
    { path: 'details/:id', component: CarDetailsComponent, resolve: {data: SingleCarResolver}, canActivate:[isAdminGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(carRoutes)],
    exports: [RouterModule]
})
export class CarRoutingModule { }
