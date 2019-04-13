import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class ProfileResolver implements Resolve<User>{
    constructor(private authService: AuthService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.getProfile()
    }
}