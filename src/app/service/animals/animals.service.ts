import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrlService } from './../base-url/base-url.service';
import { TokenService } from './../user/token/token.service';
import { Animal, Animals } from './animals.d';

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

  searchForId(id: number): Observable<Animal> {
    const token = this.tokenService.returnJWTToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpCliente.get<Animal>(this.baseUrlService.path(`/photos/${id}`), {
      headers
    });
  }
}
