import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    FormsModule,
    MainRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ MainComponent ]
})
export class MainModule { }
