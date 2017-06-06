import { Component } from '@angular/core';

import {PacientsService} from '../../services/pacients.services';
import { Pacients } from './pacients';

@Component({
  selector: 'pacient',
  templateUrl: '../../templates/pacients/pacient-list.component.html',
  providers: [PacientsService]
})

export class PacientListComponent {
  pacients: Pacients[];

  constructor(private pacientsService: PacientsService) {
    this.pacientsService.getPacients().subscribe(pacients => {
      this.pacients = pacients;
    });
  }
}
