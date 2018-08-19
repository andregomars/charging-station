import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { SettingComponent } from './setting.component';
import { MainSettingComponent } from './main-setting.component';
import { StationSettingComponent } from './station-setting.component';
import { VehicleSettingComponent } from './vehicle-setting.component';
import { ViewGuard } from '../../guards/view.guard';

const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
    canActivate: [ViewGuard],
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
