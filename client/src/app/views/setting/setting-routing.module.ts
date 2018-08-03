import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { SettingComponent } from './setting.component';
import { MainSettingComponent } from './main-setting.component';
import { StationSettingComponent } from './station-setting.component';
import { VehicleSettingComponent } from './vehicle-setting.component';

const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
    data: {
      title: 'Setting'
    },
    children: [
      {
        path: '',
        component: MainSettingComponent,
        data: {
          title: ' '
        }
      },
      {
        path: 'station',
        component: StationSettingComponent,
        data: {
          title: 'Station'
        }
      },
      {
        path: 'vehicle',
        component: VehicleSettingComponent,
        data: {
          title: 'Vehicle'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
