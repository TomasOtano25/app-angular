import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { element } from 'protractor';

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
   /*this.authState.forEach(element => {
     console.log(element);
   });*/
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }

  loginFacebook() {
    this.authService.loginFacebook();
  }

  login() {
    this.authService.signon(this.email, this.password);
  }

  // this.authService.login(this.email, this.password);
  logout() {
    this.authService.logout();
  }

}
