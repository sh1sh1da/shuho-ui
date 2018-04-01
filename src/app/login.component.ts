import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  login(value: any) {
    this.loginService.login(value).subscribe((responseBody) => {
      if (responseBody.authorized) {
        this.router.navigate(['users']);
      } else {
        console.log('not authorized')
      }
    })
  }
}
