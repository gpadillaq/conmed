import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PacientsService {
   private baseUrl = 'http://localhost:3000/pacients';
  constructor(private http: Http) {}

  getPacients() {
    return this.http
               .get(this.baseUrl, new RequestOptions({headers: this.getHeaders()}))
               .map(res => res.json());
  }
  getPacient(id) {
    return this.http
               .get(`${this.baseUrl}/${id}`, new RequestOptions({headers: this.getHeaders()}))
               .map(res => res.json());
  }
  putPacient(pacient) {
    console.log(pacient);
    this.http
        .put(`${this.baseUrl}/${pacient.id}`, pacient, new RequestOptions({headers: this.getHeaders()})).subscribe(pacient => {
          console.log(pacient);
        });
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
