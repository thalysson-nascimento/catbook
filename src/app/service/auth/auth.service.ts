import { BaseUrlService } from './../base-url/base-url.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private baseUrlservice: BaseUrlService
  ) { }

  authenticated(userName: string, password: string): Observable<Auth> {
    return this.httpClient.post<Auth>(
      this.baseUrlservice.path('/user/login'),
      {
        userName: userName,
        password: password
      }
    );
  }
}
