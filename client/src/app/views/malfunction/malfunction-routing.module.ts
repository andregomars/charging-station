import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { MalfunctionComponent } from './malfunction.component';

const routes: Routes = [
  {
    path: '',
    component: MalfunctionComponent,
    data: {
      title: 'Malfunctions'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MalfunctionRoutingModule { }
