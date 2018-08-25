import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ModalModule } from 'ngx-bootstrap/modal';

import { DataService } from '../../services/data.service';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    ChartsModule,
    BsDropdownModule,
    UiSwitchModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [
    UsersComponent
  ],
  providers: [
    DataService
  ]
})
export class UsersModule { }
