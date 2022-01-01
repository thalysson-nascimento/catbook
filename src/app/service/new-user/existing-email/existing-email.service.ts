import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { NewUserService } from '../new-user.service';

@Injectable({
  providedIn: 'root',
})
export class ExistingEmailService {
  constructor(
    private newUserService: NewUserService
  ) {}

  verifyEmailExisting() {
    return (abstractControl: AbstractControl) => {
      return abstractControl.valueChanges.pipe(
        switchMap((email) => {
          return this.newUserService.verifyEmailExisting(email);
        }),
        map((existEmail) => (existEmail ? {existEmail: true} : null)),
        first()
      )
    }
  }
}
