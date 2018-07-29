import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.stations$ = this.http.get<any>(`${ this.rootUrl }/stations.json`);
    // return this.http.get<any>(`${ this.rootUrl }/stations.json`)
    //   .subscribe(data => this.rows = data.splice(0, 5));
  }
}
