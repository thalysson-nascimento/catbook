import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { Auth } from '../auth';
import { TokenService } from '../token/token.service';
import { UserAuth } from './user-auth';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private userSubject = new BehaviorSubject<Auth>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.getToken()) {
      this.JWTDecode();
    }
  }

  private JWTDecode() {
    const token = this.tokenService.returnJWTToken();
    const user = jwt_decode(token) as UserAuth;
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.JWTDecode();
  }

  logout() {
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  isLoged() {
    return this.tokenService.getToken();
  }
}
