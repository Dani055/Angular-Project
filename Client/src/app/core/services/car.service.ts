import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const createUrl = 'http://localhost:9999/feed/car/create'

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  constructor(private http: HttpClient ) { }

  addCar(data){
    return this.http.post(createUrl, data);
  }
}
