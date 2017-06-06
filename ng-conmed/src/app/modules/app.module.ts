import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../components/app.component';
import { MenuComponent } from '../components/menu.component';
import { DashboardComponent } from '../components/dashboard.component';

import { PacientListComponent } from '../components/pacients/pacient-list.component';
import { PacientFormComponent } from '../components/pacients/pacient-form.component';
import { PacientDetailComponent } from '../components/pacients/pacient-detail.component';


import { appRoutes } from '../modules/app.routing.module'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,

    PacientListComponent,
    PacientFormComponent,
    PacientDetailComponent

  ],
  imports: [
    BrowserModule,
    appRoutes,
    HttpModule,
    FormsModule
  ],
  bootstrap: [MenuComponent, AppComponent]
})
export class AppModule { }
