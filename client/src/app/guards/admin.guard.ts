import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private location: Location,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.auth.user.pipe(
        take(1),
        map(user => user && this.auth.canEdit(user)),
        tap(isAdmin => {
          if (!isAdmin) {
            console.error('only admin is allowed!');
            this.location.back();
          }
        })
      );
  }
}
