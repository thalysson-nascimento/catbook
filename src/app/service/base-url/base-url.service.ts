import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {
  baseUrl: string = 'http://localhost:3000';

  constructor(
    private router: Router
  ) { }

  path(path: string){
    return `${this.baseUrl}${path}`;
  }
}
