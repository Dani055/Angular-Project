import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly registerUrl = 'http://localhost:9999/auth/signup';
  private readonly loginUrl = 'http://localhost:9999/auth/signin';
  private readonly profileUrl = 'http://localhost:9999/feed/profile';
  constructor(private http: HttpClient) { }

  register(body){
    return this.http.post(this.registerUrl, body);
  }
  login(body) {
    return this.http.post(this.loginUrl, body);
  }
  getProfile() {
    return this.http.get<User>(this.profileUrl);
  }
  logout(){
    localStorage.clear()
  }
  isAuthenticated(){
    return localStorage.getItem('token') !== null;
  }
  isAdmin(){
    let isAdmin = localStorage.getItem('isAdmin');
    isAdmin = JSON.parse(isAdmin)
    if(isAdmin){
      return true;
    }
    return false;
  }
}
