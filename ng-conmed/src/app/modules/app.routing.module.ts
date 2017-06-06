import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../components/app.component'
import { DashboardComponent } from '../components/dashboard.component'
import { PatientListComponent } from '../components/patients/patient-list.component'
import { PatientFormComponent } from '../components/patients/patient-form.component'
import { PatientDetailComponent } from '../components/patients/patient-detail.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'patients',
    component: PatientListComponent
  },
  {
    path: 'patients/form/:id',
    component: PatientFormComponent
  },
  {
    path: 'patients/:id',
    component: PatientDetailComponent
  }
]

export const appRoutes = RouterModule.forRoot(routes)
