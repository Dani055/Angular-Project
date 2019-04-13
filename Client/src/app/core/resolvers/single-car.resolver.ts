import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { CarService } from '../services/car.service';

@Injectable({
    providedIn: 'root'
})
export class SingleCarResolver implements Resolve<Car>{
    constructor(private carService: CarService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
        const id = route.params['id']
        return this.carService.getCarById(id);
    }
}