import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module.tns';

@NgModule({
  imports: [
    MainRoutingModule,
  ],
  declarations: [ MainComponent ]
})
export class MainModule { }
