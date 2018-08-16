import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { NotificationsComponent } from './notifications.component';
import { AdminGuard } from '../../guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
    canActivate: [AdminGuard],
    data: {
      title: 'Notifications'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
