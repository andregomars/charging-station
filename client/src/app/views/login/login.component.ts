import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

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
}
