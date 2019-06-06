import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Car } from 'src/app/core/models/Car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: Car;
  @Input() isAllCarsPage: string;
  @Output() rentCarEmitter = new EventEmitter<string>();
  @Output() removeRentEmitter = new EventEmitter<string>();
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}
  rentCar(id){
    this.rentCarEmitter.emit(id);
  }
  removeRent(id){
    this.removeRentEmitter.emit(id)
  }
}
