import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-account-bar',
  templateUrl: './account-bar.component.html'
})
export class AccountBarComponent implements OnInit {
  user: Observable<User>;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.user;
  }

  signOut() {
    this.authService.signOut();
  }

}
