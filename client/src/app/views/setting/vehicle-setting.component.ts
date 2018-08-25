import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-vehicle-setting',
  templateUrl: './vehicle-setting.component.html',
  styleUrls: ['./vehicle-setting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleSettingComponent implements OnInit {
  settings$: Observable<any>;
  vehicleAddModal: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.settings$ = this.dataService.getVehicleSettings();
  }
}
