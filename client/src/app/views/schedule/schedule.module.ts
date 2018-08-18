import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DataService } from '../../services/data.service';
import { ScheduleComponent } from './schedule.component';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScheduleRoutingModule,
    UiSwitchModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ScheduleComponent ],
  providers: [
    DataService
  ]
})
export class ScheduleModule { }
