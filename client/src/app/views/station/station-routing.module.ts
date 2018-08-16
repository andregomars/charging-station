import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { StationOutletComponent } from './station-outlet.component';
import { StationListComponent } from './station-list.component';
import { StationComponent } from './station.component';
import { ViewGuard } from '../../guards/view.guard';

const routes: Routes = [
  {
    path: '',
    component: StationOutletComponent,
    canActivate: [ViewGuard],
    data: {
      title: 'Stations'
    },
    children: [
      {
        path: '',
        component: StationListComponent,
        data: {
          title: ' '
        }
      },
      {
        path: 'station/:id',
        component: StationComponent,
        data: {
          title: 'Station'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationRoutingModule { }
