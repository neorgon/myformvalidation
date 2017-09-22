import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DynamicComponent } from './dynamic.component';

import { AuthGuard } from '../login/auth-guard.service';

const dynamicRoutes: Routes = [
  {
    path: '',
    component: DynamicComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dynamicRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class DynamicRoutingModule {}
