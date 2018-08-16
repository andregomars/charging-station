import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-account-bar',
  templateUrl: './account-bar.component.html'
})
export class AccountBarComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  signOut() {
    this.authService.signOut();
  }

}
