import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { SpinnerService } from '../../services/spinner.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedules$: Observable<any>;

  constructor(
    private dataService: DataService,
    private spinner: SpinnerService
  ) { }

  ngOnInit() {
    this.spinner.load();
    this.schedules$ = this.dataService.getSchedules().pipe(
      finalize(() => this.spinner.unload()),
    );
  }

}
