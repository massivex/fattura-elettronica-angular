import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mx-editor-rappresentante-fiscale',
  templateUrl: './rappresentante-fiscale.component.html',
  styleUrls: ['./rappresentante-fiscale.component.scss']
})
export class RappresentanteFiscaleComponent implements OnInit {

  constructor() { }

  public personaFisica: boolean;

  ngOnInit() {
    this.personaFisica = false;
  }

}
