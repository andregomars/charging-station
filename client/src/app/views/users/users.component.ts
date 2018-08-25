import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  userAddModal: any;
  userEditModal: any;
  username: string;
  email: string;
  role: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.users$ = this.authService.getAllUsers();
  }
}
