import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('regForm') regForm: NgForm;
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {

  }

  register(){
    this.authService.register(this.regForm.value).subscribe((data) => {
      this.router.navigate(['/login'])
    })
  }

}
