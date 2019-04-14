import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  username: string;
  isLoggedIn: boolean;
  constructor(public authService: AuthService, private router: Router) { }

  ngDoCheck() {
    this.username = localStorage.getItem('username');
    this.isLoggedIn = this.authService.isAuthenticated();
  }
  ngOnInit() {
    
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['home'])
  }
}
