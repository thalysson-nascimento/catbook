import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './../../service/user/user-auth/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user$ = this.userAuthService.getUser();

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
  ) {}

  logout() {
    this.userAuthService.logout();
    this.router.navigate(['']);
  }
}
