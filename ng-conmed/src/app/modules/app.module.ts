import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../components/app.component';
import { MenuComponent } from '../components/menu.component';
import { DashboardComponent } from '../components/dashboard.component';

import { PatientListComponent } from '../components/patients/patient-list.component';
import { PatientFormComponent } from '../components/patients/patient-form.component';
import { PatientDetailComponent } from '../components/patients/patient-detail.component';


import { appRoutes } from '../modules/app.routing.module'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,

    PatientListComponent,
    PatientFormComponent,
    PatientDetailComponent

  ],
  imports: [
    BrowserModule,
    appRoutes,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MenuComponent, AppComponent]
})
export class AppModule { }
