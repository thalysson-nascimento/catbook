import { BaseUrlService } from './../base-url/base-url.service';
import { NewUser } from './new-user.d';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(
    private httpClient: HttpClient,
    private baseUrl: BaseUrlService,
  ) { }

  addNewUser(newUser: NewUser): Observable<NewUser> {
    return this.httpClient.post<NewUser>(this.baseUrl.path('/user/signup'), newUser);
  }
}
