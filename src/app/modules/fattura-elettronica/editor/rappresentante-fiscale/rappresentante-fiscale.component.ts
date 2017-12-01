import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as fe from '../../shared/fattura-elettronica.model';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import * as _ from 'lodash';

@Component({
  selector: 'mx-editor-rappresentante-fiscale',
  templateUrl: './rappresentante-fiscale.component.html',
  styleUrls: ['./rappresentante-fiscale.component.scss']
})
export class RappresentanteFiscaleComponent implements OnInit, OnChanges {
  @Input()
  public data: fe.RappresentanteFiscale;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (_.isNil(this.data)) {
      this.data = {};
    }
  }
}
