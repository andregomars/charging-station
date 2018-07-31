import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private rootUrl = 'assets/data';
  private delayEmulatorTimer = 300;

  constructor(
    private http: HttpClient
  ) { }

  getStations(): Observable<any> {
      return this.http
        .get<any>(`${ this.rootUrl }/stations.json`).pipe(
          delay(this.delayEmulatorTimer)
        );
  }

  getSchedules(): Observable<any> {
      return this.http
        .get<any>(`${ this.rootUrl }/schedules.json`).pipe(
          delay(this.delayEmulatorTimer)
        );
  }
}
