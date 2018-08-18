import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
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
  ) { }

  ngOnInit() {
    this.schedules$ = this.dataService.getSchedules();
  }

}
