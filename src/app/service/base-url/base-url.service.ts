import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {
  private baseUrl = environment.apiURL;

  constructor() { }

  path(path: string){
    console.log(`${this.baseUrl}${path}`)
    return `${this.baseUrl}${path}`;
  }
}
