import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { AdminSettingComponent } from './admin-setting.component';
import { AdminGuard } from '../../guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminSettingComponent,
    canActivate: [AdminGuard],
    data: {
      title: 'Admin Setting'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingRoutingModule { }
