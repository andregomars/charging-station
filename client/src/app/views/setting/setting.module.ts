import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { UiSwitchModule } from 'ngx-ui-switch';

import { DataService } from '../../services/data.service';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { MainSettingComponent } from './main-setting.component';
import { StationSettingComponent } from './station-setting.component';
import { VehicleSettingComponent } from './vehicle-setting.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SettingRoutingModule,
    ChartsModule,
    UiSwitchModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [
    SettingComponent,
    MainSettingComponent,
    StationSettingComponent,
    VehicleSettingComponent
  ],
  providers: [
    DataService
  ]
})
export class SettingModule { }
