import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { StationListComponent } from './station-list.component';
import { StationComponent } from './../station/station.component';

const routes: Routes = [
  {
    path: '',
    component: StationListComponent,
    data: {
      title: 'Stations'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationListRoutingModule { }
