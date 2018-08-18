import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { LogsComponent } from './logs.component';
import { ViewGuard } from '../../guards/view.guard';

const routes: Routes = [
  {
    path: '',
    component: LogsComponent,
    canActivate: [ViewGuard],
    data: {
      title: 'Logs'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule { }
