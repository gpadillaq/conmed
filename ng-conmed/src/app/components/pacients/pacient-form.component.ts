import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, Component} from '@angular/core';

import {PacientsService} from '../../services/pacients.services';
import { Pacients, Genders } from './pacients';

@Component({
  selector: 'pacient',
  templateUrl: '../../templates/pacients/pacient-form.component.html',
  providers: [PacientsService]
})

export class PacientFormComponent {
  pacient: Object;
  genders: Object;

  constructor(private activatedRoute: ActivatedRoute, private pacientsService: PacientsService) {}

  ngOnInit() {
    this.pacient = {};
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this.genders = Genders;
      if (id !== undefined) {
        this.pacientsService.getPacient(id).subscribe(pacients => {
          this.pacient = pacients;
        });
      }
    });
  }

  save(pacient: Pacients, isValid: boolean) {
     this.pacientsService.putPacient(pacient);
  }
}
