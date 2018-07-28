import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxGaugeModule } from 'ngx-gauge';

import { StationListComponent } from './station-list.component';
import { StationListRoutingModule } from './station-list-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    StationListRoutingModule,
    ChartsModule,
    NgxGaugeModule,
    NgxDatatableModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ StationListComponent ]
})
export class StationListModule { }
