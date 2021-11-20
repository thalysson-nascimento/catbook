import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';

type HttpHeaders = {
  normalizedNames: any;
  lazyUpdate: null;
  lazyInit: any;
}

type HttpErrorResponse = {
  error: {
    message: string }
    headers: HttpHeaders;
    message: string;
    name: string;
    ok: boolean;
    status: number;
    statusText: string;
    url: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';

  constructor(
    private service: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.service.authenticated(
      this.user,
      this.password
      ).subscribe(() => {
        console.log('login realizado com sucesso');
        this.router.navigate(['animals'])
    }, (error: HttpErrorResponse) => {
      console.log(error.status);
      if (error.status === 401) {
        alert('usuário ou senha incorreto');
        console.log('erro no login, tente novamente');
      }

      if (error.status === 500) {
        alert('serviço indisponível');
        console.log('serviço indisponível');
      }
    });
  }

  newUser() {
    this.router.navigateByUrl('home/new-user');
  }
}
