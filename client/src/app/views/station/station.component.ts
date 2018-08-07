import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { map, tap, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
  lastUpdatedTime = new Date();
  sid$: Observable<string>;
  station$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.loadStation();
  }

  private loadStation() {
    const stations$ = this.dataService.getStations();
    this.sid$ = this.route.paramMap.pipe(
        map((params: ParamMap) => params.get('id'))
    );

    this.station$ = this.sid$.pipe(
      concatMap(id => {
        return stations$.pipe(
          map(stations => {
            const station = stations.find(s =>
              s.code.toUpperCase() === id.toUpperCase()
            );
            return this.attachBackgroundImageCss(station);
          })
        );
      })
    );
  }

  private attachBackgroundImageCss(station: any): any {
    if (!station || !station.status) {
      return station;
    }

    const imgcss = { imageClass: `cs-bg-${station.status}`};
    return {...station, ...imgcss};
  }
}
