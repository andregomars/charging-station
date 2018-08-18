import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  logs$: Observable<any>;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.logs$ = this.dataService.getLogs();
  }
}
