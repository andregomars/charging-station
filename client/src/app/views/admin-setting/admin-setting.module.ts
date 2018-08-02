import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { UiSwitchModule } from 'ngx-ui-switch';

import { DataService } from '../../services/data.service';
import { AdminSettingRoutingModule } from './admin-setting-routing.module';
import { AdminSettingComponent } from './admin-setting.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AdminSettingRoutingModule,
    ChartsModule,
    UiSwitchModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ AdminSettingComponent ],
  providers: [
    DataService
  ]
})
export class AdminSettingModule { }
