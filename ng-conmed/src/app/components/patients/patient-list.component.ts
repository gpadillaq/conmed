import { Component } from '@angular/core';

import {PatientsService} from '../../services/patients.services';
import { Patients } from './patients';

@Component({
  selector: 'patient',
  templateUrl: '../../templates/patients/patient-list.component.html',
  providers: [PatientsService]
})

export class PatientListComponent {
  patients: Patients[];

  constructor(private patientsService: PatientsService) {
    this.patientsService.getPatients().subscribe(patients => {
      this.patients = patients;
    });
  }
}
