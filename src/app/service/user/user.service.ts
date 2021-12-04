import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BaseUrlService } from '../base-url/base-url.service';
import { User } from './user';
import { UserAuthService } from './user-auth/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private baseUrlservice: BaseUrlService,
    private userService: UserAuthService,
  ) { }

  authenticated(userName: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient.post<User>(
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
