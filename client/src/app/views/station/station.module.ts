import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxGaugeModule } from 'ngx-gauge';

import { StationComponent } from './station.component';
import { StationRoutingModule } from './station-routing.module';
import { DataService } from '../../services/data.service';
import { StationOutletComponent } from './station-outlet.component';
import { StationListComponent } from './station-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    StationRoutingModule,
    ChartsModule,
    NgxGaugeModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [
    StationOutletComponent,
    StationListComponent,
    StationComponent
  ],
  providers: [
    DataService
  ]
})
export class StationModule { }
