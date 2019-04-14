import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarRoutingModule } from './car-routing.module';
import { AddCarComponent } from './add-car/add-car.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { CarComponent } from './car/car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { MyRentedCarsComponent } from './my-rented-cars/my-rented-cars.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations:[
        AddCarComponent,
        AllCarsComponent,
        CarComponent,
        CarDetailsComponent,
        MyRentedCarsComponent
    ],
    imports:[
        CommonModule,
        CarRoutingModule,
        FormsModule,
    ]
})
export class CarModule{

}