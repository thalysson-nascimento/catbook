import { NewUserService } from './../../../service/new-user/new-user.service';
import { UsernameIqualsPasswordService } from './../../../service/new-user/username-iquals-password/username-iquals-password.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NewUser } from './../../../service/new-user/new-user.d';
import { minusculoValidator } from './is-empity-input-form.validator';
import { ExistingUserService } from '../../../service/new-user/existing-user/existing-user.service';
import { ExistingEmailService } from '../../../service/new-user/existing-email/existing-email.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  newUserFormGroup: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private existingUserService: ExistingUserService,
    private existingEmailService: ExistingEmailService,
    private userNameIqualsPasswordService: UsernameIqualsPasswordService,
    private newUserService: NewUserService,
  ) {}

  ngOnInit() {
    this.createFormNewUser();
    this.focusInputEmail();
  }

  createFormNewUser() {
    this.newUserFormGroup = this.formBuilder.group(
      {
        email: [
          '',
          [Validators.required, Validators.email],
          [this.existingEmailService.verifyEmailExisting()],
        ],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [Validators.required, minusculoValidator],
          [this.existingUserService.verifyUserExistingAsync()],
        ],
        password: ['', [Validators.required]],
      },
      {
        validators: [this.userNameIqualsPasswordService.userNameIqualsPassword],
      }
    );
  }

  home() {
    return this.router.navigateByUrl('');
  }

  createUser() {
    if (this.newUserFormGroup.valid) {
      const newUser = this.newUserFormGroup.getRawValue() as NewUser;
      this.newUserService.addNewUser(newUser).subscribe(() => {
        this.router.navigate(['']);
      },
        (error) => {
          console.log(error)
        }
      );
    }
  }

  focusInputEmail() {
    document.getElementById('email').focus();
  }
}
