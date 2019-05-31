import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from 'src/app/core/services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @ViewChild('cf', { static: true }) cf: NgForm;
  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {
  }
  addCar(){
    this.carService.addCar(this.cf.value).subscribe((data) => {
      this.router.navigate(['/home'])
    })
  }
}
