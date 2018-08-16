import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { MalfunctionComponent } from './malfunction.component';
import { ViewGuard } from '../../guards/view.guard';

const routes: Routes = [
  {
    path: '',
    component: MalfunctionComponent,
    canActivate: [ViewGuard],
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
