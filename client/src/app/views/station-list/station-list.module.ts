import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxGaugeModule } from 'ngx-gauge';

import { DataService } from '../../services/data.service';
import { StationListComponent } from './station-list.component';
import { StationModule } from './../station/station.module';
import { StationListRoutingModule } from './station-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    StationListRoutingModule,
    StationModule,
    ChartsModule,
    NgxGaugeModule,
    NgxDatatableModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ StationListComponent ],
  providers: [
    DataService
  ]
})
export class StationListModule { }
