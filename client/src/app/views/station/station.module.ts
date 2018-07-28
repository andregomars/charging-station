import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxGaugeModule } from 'ngx-gauge';

import { StationComponent } from './station.component';
import { StationRoutingModule } from './station-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    StationRoutingModule,
    ChartsModule,
    NgxGaugeModule,
    NgxDatatableModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ StationComponent ]
})
export class StationModule { }
