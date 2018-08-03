import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {
  rootUrl = 'assets/data';
  rows = [];
  stations$: Observable<any>;

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.stations$ = this.dataService.getStations();
  }
}
