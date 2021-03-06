import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private AuthService: AuthService) { }

  canActivate() {
    return this.AuthService.isAuth();
  }
}
