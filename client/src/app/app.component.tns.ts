import { Component } from '@angular/core';
import { isAndroid } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
})

export class AppComponent {
    getIconSource(icon: string): string {
    const iconPrefix = isAndroid ? 'res://' : 'res://tabIcons/';
    return iconPrefix + icon;
  }
}
