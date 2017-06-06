import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PatientsService {
  constructor(private http: Http) {
    console.log('patients services');
  }

  getPatients() {
    return this.http.get('http://localhost:3000/pacients.json')
               .map(res => res.json());
  }

  getPatient(id) {
    console.log(id);
    console.log( this.http.get('http://localhost:3000/pacient/show/'.concat(id)));
  }
}
