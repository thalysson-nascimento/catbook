import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NewUser } from './../../../service/new-user/new-user.d';
import { minusculoValidator } from './is-empity-input-form.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  newUserFormGroup: FormGroup;

  constructor(private roter: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createFormNewUser();
    this.focusInputEmail();
  }

  createFormNewUser() {
    this.newUserFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [Validators.required, minusculoValidator]],
      password: ['', [Validators.required]]
    });
  }

  home() {
    return this.roter.navigateByUrl('');
  }

  createUser() {
    const newUser = this.newUserFormGroup.getRawValue() as NewUser;
    console.log(newUser);
  }

  focusInputEmail() {
    document.getElementById('email').focus();
  }
}
