import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {
  baseUrl: string = 'http://localhost:3000';

  constructor() { }

  path(path: string){
    return `${this.baseUrl}${path}`;
  }
}
