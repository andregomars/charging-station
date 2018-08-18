import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  statistics$: Observable<any>;

  constructor(
    private dataService: DataService,
    // private spinner: SpinnerService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.statistics$ = this.dataService.getStatistics();
  }
}
