import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as fe from '../../shared/fattura-elettronica.model';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import * as _ from 'lodash';

@Component({
  selector: 'mx-editor-cessionario-committente',
  templateUrl: './cessionario-committente.component.html',
  styleUrls: ['./cessionario-committente.component.scss']
})
export class CessionarioCommittenteComponent implements OnInit, OnChanges {
  @Input()
  public data: fe.CessionarioCommittente;

  public anagrafica: fe.DatiAnagrafici;
  public sede: fe.Indirizzo;
  public stabile: fe.Indirizzo;

  constructor() {
    this.anagrafica = {};
   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (_.isNil(this.data)) {
      this.anagrafica = {};
      this.sede = {};
      this.stabile = {};
      return;
    }

    this.anagrafica = this.data.datiAnagrafici;
    this.sede = _.isNil(this.data.sede) ? {} : this.data.sede;
    this.stabile = _.isNil(this.data.stabileOrganizzazione) ? {} : this.data.stabileOrganizzazione;
  }
}
