import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('regForm', { static: true }) regForm: NgForm;
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {

  }

  register(){
    this.authService.register(this.regForm.value).subscribe((data) => {
      this.router.navigate(['/login'])
    })
  }

}
