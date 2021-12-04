import { Injectable } from '@angular/core';

const key = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  returnJWTToken() {
    return localStorage.getItem(key) ?? '';
  }

  saveToken(token: string) {
    localStorage.setItem(key, token);
  }

  deleteToken() {
    localStorage.removeItem(key);
  }

  getToken() {
    return !! this.returnJWTToken(); // return boolean
  }
}
