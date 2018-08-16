import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { ScheduleComponent } from './schedule.component';
import { ViewGuard } from '../../guards/view.guard';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    canActivate: [ViewGuard],
    data: {
      title: 'Schedule'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
