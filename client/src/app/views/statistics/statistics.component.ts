import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnInit {

  statistics$: Observable<any>;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.statistics$ = this.dataService.getStatistics();
  }
}
