import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mx-editor-cedente-prestatore',
  templateUrl: './cedente-prestatore.component.html',
  styleUrls: ['./cedente-prestatore.component.scss']
})
export class CedentePrestatoreComponent implements OnInit {
  public personaFisica: boolean;

  constructor() { }

  ngOnInit() {
    this.personaFisica = false;
  }
}
