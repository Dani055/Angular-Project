import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { CarService } from 'src/app/core/services/car.service';
import { Car } from 'src/app/core/models/Car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: Car;
  @Input() isAllCarsPage: string;
  constructor(private authService: AuthService, private router: Router, private carService: CarService) { }

  ngOnInit() {}
  rentCar(id){
    this.carService.rentCar(id).subscribe((data) => {});
    this.router.navigate(['/home']);
  }
  removeRent(id){
    this.carService.removeRent(id).subscribe((data) => {})
    this.router.navigate(['/home'])
  }
}
