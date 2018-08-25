import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  alert: Alert;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.email = 'aaa@test.com';
    this.password = '111111';
  }

  login() {
    this.authService.signIn(this.email, this.password);
  }

  forget() {
    if (!this.email || this.email.length < 1) {
      this.alert = {
        type: 'danger',
        message: 'Email is required to reset your password'
      };
    } else {
      this.alert = {
        type: 'success',
        message: 'Well done! Your password reset link is sent to your email'
      };
    }
  }
}

export interface Alert {
    type: string;
    message: string;
}
