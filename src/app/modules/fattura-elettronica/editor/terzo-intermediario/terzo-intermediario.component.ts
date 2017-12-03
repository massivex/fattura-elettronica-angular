import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as fe from '../../shared/fattura-elettronica.model';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import * as _ from 'lodash';

@Component({
  selector: 'mx-editor-terzo-intermediario',
  templateUrl: './terzo-intermediario.component.html',
  styleUrls: ['./terzo-intermediario.component.scss']
})
export class TerzoIntermediarioComponent implements OnInit, OnChanges {
  @Input()
  public data: fe.TerzoIntermediario;

  public datiAnagrafici: fe.DatiAnagrafici;

  constructor() {
    this.data = {};
    this.datiAnagrafici = {};
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (_.isNil(this.data)) {
      this.data = {};
      this.datiAnagrafici = {};
    }

    this.datiAnagrafici = this.data.datiAnagrafici;
  }

}
