import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authState: any;

  constructor(public authService: AuthService) { }

  ngOnInit() {
   this.authState =  this.authService.afAuth.authState;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
