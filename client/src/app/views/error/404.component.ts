import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  templateUrl: '404.component.html'
})
export class P404Component {

  constructor(
    private location: Location,
    private router: Router
  ) { }

  navBack() {
    this.location.back();
  }

  navHome() {
    this.router.navigate(['/main']);
  }
}
