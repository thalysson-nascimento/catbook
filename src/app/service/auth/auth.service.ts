import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient
  ) { }

  authenticated(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/user/login`,
      {
        userName: email,
        password: password
      }
    );
  }
}
