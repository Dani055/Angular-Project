import { Component, OnInit, ViewChild } from '@angular/core';
import { CarService } from 'src/app/core/services/car.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/core/models/Car';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  @ViewChild('ef') ef: NgForm;
  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute,) { }
  car: Car;
  ngOnInit() {
    this.car = this.route.snapshot.data['data']['car'];
  }
  editCar(){
    this.carService.editCar(this.route.snapshot.params['id'], this.ef.value).subscribe((data) => {})
    this.router.navigate(['/home'])
  }
  deleteCar(){
    this.carService.deleteCar(this.route.snapshot.params['id']).subscribe((data) => {})
    this.router.navigate(['/home'])
  }
}
