import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  status: BehaviorSubject<boolean>;

  constructor() {
    this.status = new BehaviorSubject<boolean>(false);
  }

  load() {
    this.status.next(true);
  }

  unload() {
    this.status.next(false);
  }
}
