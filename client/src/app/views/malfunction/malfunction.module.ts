import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DataService } from '../../services/data.service';
import { MalfunctionComponent } from './malfunction.component';
import { MalfunctionRoutingModule } from './malfunction-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule,
    MalfunctionRoutingModule,
    ChartsModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ MalfunctionComponent ],
  providers: [
    DataService
  ]
})
export class MalfunctionModule { }
