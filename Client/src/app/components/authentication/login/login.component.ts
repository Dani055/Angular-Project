import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('logForm') logForm: NgForm;
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }
  login(){
    this.authService.login(this.logForm.value).subscribe(data => {
      console.log(data)
      localStorage.setItem('token', data['token'])
      localStorage.setItem('isAdmin', data['isAdmin'])
      localStorage.setItem('username', data['username'])
      this.router.navigate([ '/home' ])
    })
  }
}
