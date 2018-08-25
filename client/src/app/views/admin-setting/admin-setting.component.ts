import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminSettingComponent implements OnInit {
  commands$: Observable<any>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    // this.loadData();
  }

  private loadData() {
    this.commands$ = this.dataService.getCommands();
  }
}
