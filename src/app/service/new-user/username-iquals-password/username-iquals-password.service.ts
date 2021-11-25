import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UsernameIqualsPasswordService {
  constructor() {}

  userNameIqualsPassword(formGroup: FormGroup) {
    const userName = formGroup.get('userName')?.value ?? ''; // caso seja undefined retorne vazio
    const password = formGroup.get('password')?.value ?? ''; // caso seja undefined retorne vazio

    if (userName.trim() + password.trim()) {
      return userName !== password ? null : {userNameAndPasswordAreSame: true};
    }else {
      return null;
    }
  }
}
