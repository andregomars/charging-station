import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications$: Observable<any>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.notifications$ = this.dataService.getNotifications();
  }

}
