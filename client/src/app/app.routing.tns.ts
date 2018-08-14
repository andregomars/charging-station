import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { MainComponent } from './views/main/main.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full',
  },
  {
      path: 'main',
      component: MainComponent
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
