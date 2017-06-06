import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, OnDestroy, Component} from '@angular/core';

import {PatientsService} from '../../services/patients.services';
import { Patients } from './patients';

@Component({
  selector: 'patient',
  templateUrl: '../../templates/patients/patient-form.component.html',
  providers: [PatientsService]
})

export class PatientFormComponent {
  patient: Patients;

  constructor(private activatedRoute: ActivatedRoute, private patientsService: PatientsService) {}

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        let id = params['id'];
        console.log(id);
        this.patientsService.getPatient(id);

        // console.log(this.patient);
      });
  }
}
