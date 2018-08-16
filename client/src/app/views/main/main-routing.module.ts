import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { ViewGuard } from '../../guards/view.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [ViewGuard],
    data: {
      title: 'Main'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
