import { NewUser } from './../../../service/new-user/new-user.d';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  newUserFormGroup: FormGroup;

  constructor(
    private roter: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createFormNewUser();
  }

  createFormNewUser() {
    this.newUserFormGroup = this.formBuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: [''],
    });
  }

  home() {
    return this.roter.navigateByUrl('');
  }

  createUser() {
    const newUser = this.newUserFormGroup.getRawValue() as NewUser;
    console.log(newUser);
  }
}
