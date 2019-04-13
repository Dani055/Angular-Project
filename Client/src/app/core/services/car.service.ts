import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/Car';
const createUrl = 'http://localhost:9999/feed/car/create';
const allCarsUrl = 'http://localhost:9999/feed/cars';
const rentCarUrl = 'http://localhost:9999/feed/car/rent/';
const myRentedCarsUrl = 'http://localhost:9999/feed/cars/myrents';
const removeRentUrl = 'http://localhost:9999/feed/car/unrent/';
const carByIdUrl = 'http://localhost:9999/feed/car/edit/';
const deleteCarUrl = 'http://localhost:9999/feed/car/delete/';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  constructor(private http: HttpClient ) { }

  addCar(data){
    return this.http.post(createUrl, data);
  }
  getAllCars(){
    return this.http.get<Car[]>(allCarsUrl);
  }
  rentCar(id){
    return this.http.post(rentCarUrl + id, {});
  }
  getMyRentedCars(){
    return this.http.get<Car[]>(myRentedCarsUrl);
  }
  removeRent(id){
    return this.http.post(removeRentUrl + id, {});
  }
  getCarById(id){
    return this.http.get<Car>(carByIdUrl + id);
  }
  editCar(id, body){
    return this.http.post(carByIdUrl + id, body);
  }
  deleteCar(id){
    return this.http.post(deleteCarUrl + id, {});
  }
}
