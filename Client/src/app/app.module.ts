import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './core/services/auth.service';
import { HomeComponent } from './components/shared/home/home.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { AddCarComponent } from './components/car/add-car/add-car.component';
import { CarService } from './core/services/car.service';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { AllCarsComponent } from './components/car/all-cars/all-cars.component';
import { MyRentedCarsComponent } from './components/car/my-rented-cars/my-rented-cars.component';
import { CarDetailsComponent } from './components/car/car-details/car-details.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { CarComponent } from './components/car/car/car.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ToastrModule} from 'ngx-toastr';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { ImageValidatorDirective } from './components/shared/directives/image-validator.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AddCarComponent,
    AllCarsComponent,
    MyRentedCarsComponent,
    CarDetailsComponent,
    ProfileComponent,
    CarComponent,
    ImageValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService, CarService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    } 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
