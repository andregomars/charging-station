import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  passwordrepeat: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.username = 'aaa';
    this.email = 'aaa@test.com';
    this.password = '111111';
    this.passwordrepeat = '111111';
  }

  signUp() {
    this.authService.signUp(this.email, this.username, this.password);
  }

}
