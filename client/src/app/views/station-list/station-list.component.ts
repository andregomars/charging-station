import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html'
})
export class StationListComponent implements OnInit {
  rootUrl = 'assets/data';
  rows = [];

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    return this.http.get<any>(`${ this.rootUrl }/stations.json`)
      .subscribe(data => this.rows = data.splice(0, 5));
  }
}
