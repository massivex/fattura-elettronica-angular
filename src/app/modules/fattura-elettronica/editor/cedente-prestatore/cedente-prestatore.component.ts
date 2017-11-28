import { Component, OnInit, SimpleChanges } from '@angular/core';
import * as fe from '../../shared/fattura-elettronica.model';
import { Input } from '@angular/core';
import { FormatWidth } from '@angular/common/src/i18n/locale_data_api';
import * as _ from 'lodash';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'mx-editor-cedente-prestatore',
  templateUrl: './cedente-prestatore.component.html',
  styleUrls: ['./cedente-prestatore.component.scss']
})
export class CedentePrestatoreComponent implements OnInit, OnChanges {
  @Input()
  public data: fe.CedentePrestatore;

  public anagrafica: AnagraficaFormData;
  public personaFisica: boolean;
  public idFiscale: string;

  constructor() {
    this.anagrafica = {
      personaFisica: false
    };
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadFromData();
  }

  private loadFromData() {
    if (_.isNil(this.data)) {
      return;
    }

    this.loadAnagraficaFormData(this.data.datiAnagrafici);
  }

  private loadAnagraficaFormData(dati: fe.DatiAnagraficiCedente) {
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
    form.alboProfessionale = dati.alboProfessionale;
    form.dataIscrizioneAlbo = dati.dataIscrizioneAlbo;
    form.provinciaAlbo = dati.provinciaAlbo;
    form.numeroIscrizioneAlbo = dati.numeroIscrizioneAlbo;
    form.regimeFiscale = dati.regimeFiscale;
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

  alboProfessionale?: string;
  dataIscrizioneAlbo?: Date;
  numeroIscrizioneAlbo?: string;
  provinciaAlbo?: string;
  regimeFiscale?: string;
}