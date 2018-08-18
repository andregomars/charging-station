import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { SimpleLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ViewGuard } from './guards/view.guard';
import { AdminGuard } from './guards/admin.guard';
import { MainComponent } from './views/main/main.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    // component: DefaultLayoutComponent,
    component: SimpleLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'main',
        loadChildren: './views/main/main.module#MainModule'
      },
      {
        path: 'stations',
        loadChildren: './views/station/station.module#StationModule'
      },
      {
        path: 'schedule',
        loadChildren: './views/schedule/schedule.module#ScheduleModule'
      },
      {
        path: 'malfunctions',
        loadChildren: './views/malfunction/malfunction.module#MalfunctionModule'
      },
      {
        path: 'statistics',
        loadChildren: './views/statistics/statistics.module#StatisticsModule'
      },
      {
        path: 'logs',
        loadChildren: './views/logs/logs.module#LogsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'setting',
        loadChildren: './views/setting/setting.module#SettingModule'
      },
      {
        path: 'adminsetting',
        loadChildren: './views/admin-setting/admin-setting.module#AdminSettingModule'
      },
      {
        path: 'users',
        loadChildren: './views/users/users.module#UsersModule'
      }
    ]
  },
  {
    path: '**',
    component: P404Component
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
