import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(
    private roter: Router
  ) { }

  ngOnInit() {
  }

  home() {
    return this.roter.navigateByUrl('');
  }

}
