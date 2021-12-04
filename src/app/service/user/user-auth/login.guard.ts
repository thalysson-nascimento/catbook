import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad {
  constructor(
    private router: Router,
    private userAuthService: UserAuthService
  ) {}

  canLoad(
    _route: Route,
    _segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (this.userAuthService.isLoged()) {
      this.router.navigate(['/animals'])
      return false;
    }
    return true;
  }
}
