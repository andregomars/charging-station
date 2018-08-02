import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { AdminSettingComponent } from './admin-setting.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSettingComponent,
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
