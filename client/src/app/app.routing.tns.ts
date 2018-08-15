import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { MainComponent } from './views/main/main.component.tns';
import { StationListComponent } from './views/station/station-list.component.tns';

export const routes: Routes = [
 { path: '', redirectTo: '/(homeTab:home//stationsTab:stations)', pathMatch: 'full' },
 { path: 'home', component: MainComponent, outlet: 'homeTab' },
 { path: 'stations', component: StationListComponent, outlet: 'stationsTab' }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
