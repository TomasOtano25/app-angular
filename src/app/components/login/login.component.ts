import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  authState: any;

  constructor(public authService: AuthService) { }

  ngOnInit() {
   this.authState =  this.authService.authState();
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }

  loginFacebook() {
    this.authService.loginFacebook();
  }

  login() {
    console.log(this.email, this.password);
    this.authService.signon(this.email, this.password);
  }

  // this.authService.login(this.email, this.password);
  logout() {
    this.authService.logout();
  }

}
