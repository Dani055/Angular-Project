import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/services/car.service';
import { Car } from 'src/app/core/models/Car';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {
  cars: Car[];
  constructor(private carService: CarService, public authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.cars = this.route.snapshot.data['data']['cars']
  }
  rentCar(id){
    this.carService.rentCar(id).subscribe((data) => {});
    this.router.navigate(['/home']);
  }
}
