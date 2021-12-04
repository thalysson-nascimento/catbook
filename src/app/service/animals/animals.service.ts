import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './../auth/token/token.service';
import { BaseUrlService } from './../base-url/base-url.service';
import { Animals } from './animals.d';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(
    private httpCliente: HttpClient,
    private baseUrlService: BaseUrlService,
    private tokenService: TokenService
  ) {}

  listUser(userName: string): Observable<Animals> {
    const token = this.tokenService.returnJWTToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpCliente.get<Animals>(this.baseUrlService.path(`/${userName}/photos`), {
      headers
    })
  }
}
