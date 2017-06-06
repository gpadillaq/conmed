import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../components/app.component'
import { DashboardComponent } from '../components/dashboard.component'
import { PacientListComponent } from '../components/pacients/pacient-list.component'
import { PacientFormComponent } from '../components/pacients/pacient-form.component'
import { PacientDetailComponent } from '../components/pacients/pacient-detail.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'pacients',
    component: PacientListComponent
  },
  {
    path: 'pacients/form/:id',
    component: PacientFormComponent
  },
  {
    path: 'pacients/form',
    component: PacientFormComponent
  },
  {
    path: 'pacients/:id',
    component: PacientDetailComponent
  }
]

export const appRoutes = RouterModule.forRoot(routes)
