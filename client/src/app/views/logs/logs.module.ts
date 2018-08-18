import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../../services/data.service';
import { LogsComponent } from './logs.component';
import { LogsRoutingModule } from './logs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LogsRoutingModule
  ],
  declarations: [ LogsComponent ],
  providers: [
    DataService
  ]
})
export class LogsModule { }
