import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { UserAuthService } from './../../user/user-auth/user-auth.service';
import { Animals } from './../animals.d';
import { AnimalsService } from './../animals.service';

@Injectable({
  providedIn: 'root',
})
export class ListAnimalsResolver implements Resolve<Animals> {

  constructor(
    private animalsService: AnimalsService,
    private userAuthService: UserAuthService,
  ){}

  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Animals> {
    return this.userAuthService.getUser()
    .pipe(
      switchMap((user) => {
        const userNameForAnimalList = user.name ?? '';
        return this.animalsService.listUser(userNameForAnimalList)
      }),
      take(1) //solicitação para que o fluxo ocorra somente uma vez
    );
  }
}
