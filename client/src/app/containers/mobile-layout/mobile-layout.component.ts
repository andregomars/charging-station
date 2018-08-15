import { Component, OnInit } from '@angular/core';
import { isAndroid } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-mobile-layout',
  templateUrl: './mobile-layout.component.html',
  styleUrls: ['./mobile-layout.component.css']
})
export class MobileLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getIconSource(icon: string): string {
    const iconPrefix = isAndroid ? 'res://' : 'res://tabIcons/';
    return iconPrefix + icon;
  }

}
