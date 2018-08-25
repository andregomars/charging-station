import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-setting',
  templateUrl: './main-setting.component.html',
  styleUrls: ['./main-setting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainSettingComponent implements OnInit {
  commands$: Observable<any>;

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.commands$ = this.dataService.getCommands();
  }

}
