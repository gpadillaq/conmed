import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, Component} from '@angular/core';

import {PacientsService} from '../../services/pacients.services';
import {Pacient, Gender, genders} from './pacient-model';

@Component({
  selector: 'pacient-detail',
  templateUrl: '../../templates/pacients/pacient-detail.component.html',
  providers: [PacientsService]
})

export class PacientDetailComponent {
  pacient: Pacient;
  genders: Gender[];

  constructor(private activatedRoute: ActivatedRoute, private pacientsService: PacientsService) {
    this.pacient = new Pacient();
    this.genders = genders;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      if (id !== undefined) {
        this.pacientsService.getPacient(id).subscribe(pacient => {
          this.pacient = new Pacient(pacient);
        });
      }
    });
  }
}
