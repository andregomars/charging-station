import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

import { environment, DataSourceType } from 'environments/environment';
import { SpinnerService } from './spinner.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sourceType: DataSourceType;
  private rootUrl: string;
  private delayEmulatorTimer: number;
  private spinnerEnabled: boolean;
  private AfterApiCallOps: any;

  constructor(
    private http: HttpClient,
    private spinner: SpinnerService
  ) {
    this.sourceType = environment.dataSource;
    this.delayEmulatorTimer = environment.delayEmulatorTimer;
    this.spinnerEnabled = environment.spinnerEnabled;

    this.AfterApiCallOps = pipe(
      delay(this.delayEmulatorTimer),
      finalize(() => this.spinnerEnabled ? this.spinner.unload() : null)
    );

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
    this.preApiCall();
    return this.http
      .get<any>(`${this.rootUrl}/stations.json`)
      .pipe(this.AfterApiCallOps);
  }

  getSchedules(): Observable<any> {
    this.preApiCall();
    return this.http
      .get<any>(`${this.rootUrl}/schedules.json`)
      .pipe(this.AfterApiCallOps);
  }

  getMalfunctions(): Observable<any> {
    this.preApiCall();
    return this.http
      .get<any>(`${this.rootUrl}/malfunctions.json`)
      .pipe(this.AfterApiCallOps);
  }

  getStatistics(): Observable<any> {
    this.preApiCall();
    return this.http
      .get<any>(`${this.rootUrl}/statistics.json`)
      .pipe(this.AfterApiCallOps);
  }

  getNotifications(): Observable<any> {
    this.preApiCall();
    return this.http
      .get<any>(`${this.rootUrl}/notifications.json`)
      .pipe(this.AfterApiCallOps);
  }

  getCommands(): Observable<any> {
    this.preApiCall();
    return this.http
      .get<any>(`${this.rootUrl}/commands.json`)
      .pipe(this.AfterApiCallOps);
  }

  getStationSettings(): Observable<any> {
    this.preApiCall();
    return this.http
      .get<any>(`${this.rootUrl}/station-settings.json`)
      .pipe(this.AfterApiCallOps);
  }

  getVehicleSettings(): Observable<any> {
    this.preApiCall();
    return this.http
      .get<any>(`${this.rootUrl}/vehicle-settings.json`)
      .pipe(this.AfterApiCallOps);
  }

  private preApiCall() {
    if (this.spinnerEnabled) {
      this.spinner.load();
    }
  }
}
