import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';
import { map, finalize } from 'rxjs/operators';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StationListComponent implements OnInit {
  stationCode: string;
  rows = [];
  stations$: Observable<any>;

  constructor(
    private dataService: DataService,
    private spinner: SpinnerService
  ) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.spinner.load();
    this.stations$ = this.dataService.getStations().pipe(
      finalize(() => this.spinner.unload())
    );
  }

  filterStation(stationCode: string) {
    if (!stationCode || stationCode.length < 1) {
      this.loadData();
    }

    this.stations$ = this.dataService.getStations().pipe(
      map(stations =>
        stations.filter(s => s.code.toUpperCase().indexOf(stationCode.trim().toUpperCase()) > -1)
      ),
    );
  }

  filterStatus(status: string) {
    this.stations$ = this.dataService.getStations().pipe(
      map(stations =>
        stations.filter(s => s.status.toUpperCase() === status.toUpperCase())
      ),
    );
  }
}
