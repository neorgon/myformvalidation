import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskTemplateComponent } from './task-template/task-template.component';
import { TaskReactiveComponent } from './task-reactive/task-reactive.component';
import { forbiddenValidator } from './shared/forbidden.directive';

import { RoutingModule } from './routing.module';

import { LoginRoutingModule }      from './login/login-routing.module';
import { LoginComponent }          from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskTemplateComponent,
    TaskReactiveComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
