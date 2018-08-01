import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { UiSwitchModule } from 'ngx-ui-switch';

import { DataService } from '../../services/data.service';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SettingRoutingModule,
    ChartsModule,
    UiSwitchModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ SettingComponent ],
  providers: [
    DataService
  ]
})
export class SettingModule { }
