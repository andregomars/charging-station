import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { StationComponent } from './station.component';

const routes: Routes = [
  {
    path: 'station/:id',
    component: StationComponent,
    data: {
      title: 'Station'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationRoutingModule {}
