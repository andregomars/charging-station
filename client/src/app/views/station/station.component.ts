import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
  lastUpdatedTime = new Date();

  constructor() { }

  ngOnInit() {
  }

}
