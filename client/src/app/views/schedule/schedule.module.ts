import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxGaugeModule } from 'ngx-gauge';

import { ScheduleComponent } from './schedule.component';
import { ScheduleRoutingModule } from './schedule-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ScheduleRoutingModule,
    ChartsModule,
    NgxGaugeModule,
    NgxDatatableModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ScheduleComponent ]
})
export class ScheduleModule { }
