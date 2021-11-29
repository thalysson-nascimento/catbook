import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Auth } from './auth';
import { BaseUrlService } from './../base-url/base-url.service';
import { UserAuthService } from './user-auth/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private baseUrlservice: BaseUrlService,
    private userService: UserAuthService,
  ) { }

  authenticated(userName: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient.post<Auth>(
      this.baseUrlservice.path('/user/login'),
      {
        userName: userName,
        password: password
      },
      {
        observe: 'response',
      }
    ).pipe(
      tap((response) => {
        const authToken = response.headers.get('x-access-token') ?? '';
        this.userService.saveToken(authToken);
      })
    );
  }
}
