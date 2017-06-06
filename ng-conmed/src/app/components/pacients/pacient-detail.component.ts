import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, Component} from '@angular/core';

import {PacientsService} from '../../services/pacients.services';
import { Pacients } from './pacients';

@Component({
  selector: 'pacient-detail',
  templateUrl: '../../templates/pacients/pacient-detail.component.html',
  providers: [PacientsService]
})

export class PacientDetailComponent {
  pacient: Pacients;

  constructor(private activatedRoute: ActivatedRoute, private pacientsService: PacientsService) {}

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      if (id !== undefined) {
        this.pacientsService.getPacient(id).subscribe(pacients => {
          this.pacient = pacients;
        });
      }
    });
  }
}
