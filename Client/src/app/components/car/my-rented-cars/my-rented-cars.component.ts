import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/Car';
import { CarService } from 'src/app/core/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-rented-cars',
  templateUrl: './my-rented-cars.component.html',
  styleUrls: ['./my-rented-cars.component.css']
})
export class MyRentedCarsComponent implements OnInit {
  cars: Car[];
  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.cars = this.route.snapshot.data['data']['cars']
  }
}
