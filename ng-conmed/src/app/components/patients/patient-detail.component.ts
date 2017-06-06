import { Component } from '@angular/core';

import {PatientsService} from '../../services/patients.services';
import { Patients } from './patients';

@Component({
  selector: 'patient-detail',
  templateUrl: '../../templates/patients/patient-detail.component.html',
  providers: [PatientsService]
})

export class PatientDetailComponent {
  patients: Patients[];

  constructor(private patientsService: PatientsService) {
    // this.patientsService.getPatients().subscribe(patients => {
    //   this.patients = patients;
    // });
  }
}
