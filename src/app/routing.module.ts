import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './login/auth-guard.service';
import { DeactivateGuard } from './login/deactivate-guard.service';

const appRoutes: Routes = [
  {
    path: 'dynamic',
    loadChildren: 'app/dynamic/dynamic.module#DynamicModule',
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    DeactivateGuard
  ]
})

export class RoutingModule { }
