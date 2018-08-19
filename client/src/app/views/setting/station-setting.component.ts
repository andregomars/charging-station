import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-station-setting',
  templateUrl: './station-setting.component.html',
  styleUrls: ['./station-setting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StationSettingComponent implements OnInit {
  settings$: Observable<any>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.settings$ = this.dataService.getStationSettings();
  }
}
