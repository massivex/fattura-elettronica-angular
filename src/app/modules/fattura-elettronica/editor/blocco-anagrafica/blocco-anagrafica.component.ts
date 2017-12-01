import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import * as fe from '../../shared/fattura-elettronica.model';
import * as _ from 'lodash';

@Component({
  selector: 'mx-editor-blocco-anagrafica',
  templateUrl: './blocco-anagrafica.component.html',
  styleUrls: ['./blocco-anagrafica.component.scss']
})
export class BloccoAnagraficaComponent implements OnInit, OnChanges {
  @Input()
  public data: fe.DatiAnagrafici;

  public anagrafica: AnagraficaFormData;

  constructor() { }

  ngOnInit() {
    if (_.isNil(this.data)) {
      this.anagrafica = { personaFisica: false };
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadAnagraficaFormData(this.data);
  }
  private loadAnagraficaFormData(dati: fe.DatiAnagrafici) {
    if (_.isNil(dati)) {
      this.anagrafica = { personaFisica: false };
      return;
    }

    const form: AnagraficaFormData = { personaFisica: false };
    if (!_.isNil(dati.idFiscaleIVA)) {
      form.idPaese = dati.idFiscaleIVA.idPaese;
      form.idCodice = dati.idFiscaleIVA.idCodice;
    }

    if (!_.isNil(dati.anagrafica)) {
      form.codEORI = dati.anagrafica.codEORI;
      form.denominazione = dati.anagrafica.denominazione;
      form.cognome = dati.anagrafica.cognome;
      form.nome = dati.anagrafica.nome;
      form.titolo = dati.anagrafica.titolo;
    }

    form.codiceFiscale = dati.codiceFiscale;
    form.personaFisica = _.isEmpty(form.denominazione);

    this.anagrafica = form;
  }
}

export interface AnagraficaFormData {
  personaFisica: boolean;
  idPaese?: string;
  idCodice?: string;
  codiceFiscale?: string;
  codEORI?: string;

  denominazione?: string;
  cognome?: string;
  nome?: string;
  titolo?: string;
}
