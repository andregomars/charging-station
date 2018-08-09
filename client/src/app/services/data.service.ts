import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { environment, DataSourceType } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sourceType: DataSourceType;
  private rootUrl: string;
  private delayEmulatorTimer = 3000;

  constructor(
    private http: HttpClient
  ) {
    this.sourceType = environment.dataSource;

    switch (this.sourceType) {
      case (DataSourceType.Firebase):
        this.rootUrl = environment.firebase.databaseURL;
        break;
      default:
        this.delayEmulatorTimer = environment.delayEmulatorTimer;
        this.rootUrl = environment.apiRootLocal;
        break;
    }
  }

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

  getMalfunctions(): Observable<any> {
      return this.http
        .get<any>(`${ this.rootUrl }/malfunctions.json`).pipe(
          delay(this.delayEmulatorTimer)
        );
  }

  getStatistics(): Observable<any> {
      return this.http
        .get<any>(`${ this.rootUrl }/statistics.json`).pipe(
          delay(this.delayEmulatorTimer)
        );
  }

  getNotifications(): Observable<any> {
      return this.http
        .get<any>(`${ this.rootUrl }/notifications.json`).pipe(
          delay(this.delayEmulatorTimer)
        );
  }

  getCommands(): Observable<any> {
      return this.http
        .get<any>(`${ this.rootUrl }/commands.json`).pipe(
          delay(this.delayEmulatorTimer)
        );
  }

  getStationSettings(): Observable<any> {
      return this.http
        .get<any>(`${ this.rootUrl }/station-settings.json`).pipe(
          delay(this.delayEmulatorTimer)
        );
  }

  getVehicleSettings(): Observable<any> {
      return this.http
        .get<any>(`${ this.rootUrl }/vehicle-settings.json`).pipe(
          delay(this.delayEmulatorTimer)
        );
  }
}
