import { Component, OnInit, SimpleChanges } from '@angular/core';
import * as fe from '../../shared/fattura-elettronica.model';
import { Input } from '@angular/core';
import { FormatWidth } from '@angular/common/src/i18n/locale_data_api';
import * as _ from 'lodash';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { AnagraficaFormData } from '../blocco-anagrafica/blocco-anagrafica.component';

@Component({
  selector: 'mx-editor-cedente-prestatore',
  templateUrl: './cedente-prestatore.component.html',
  styleUrls: ['./cedente-prestatore.component.scss']
})
export class CedentePrestatoreComponent implements OnInit, OnChanges {

  @Input()
  public data: fe.CedentePrestatore;

  public anagrafica: fe.DatiAnagrafici;
  public sede: fe.Indirizzo;
  public stabile: fe.Indirizzo;
  public iscrizioneREA: fe.IscrizioneREA;
  public contatti: fe.Contatti;
  public albo: AlboFormData;
  public riferimentoAmministrazione: string;

  constructor() {
    this.setDefaultValues();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadFromData();
  }

  private setDefaultValues() {
    this.anagrafica = {};
    this.sede = {};
    this.stabile = {};
    this.iscrizioneREA = {};
    this.contatti = {};
    this.albo = {};
    this.riferimentoAmministrazione = null;
  }

  private loadFromData() {
    if (_.isNil(this.data)) {
      this.setDefaultValues();
      return;
    }

    this.loadAnagraficaFormData(this.data.datiAnagrafici);
    this.sede = _.isNil(this.data.sede) ? {} : this.data.sede;
    this.anagrafica = this.data.datiAnagrafici;
    this.stabile = _.isNil(this.data.stabileOrganizzazione) ? {} : this.data.stabileOrganizzazione;
    this.iscrizioneREA = _.isNil(this.data.iscrizioneREA) ? {} : this.data.iscrizioneREA;
    this.contatti = _.isNil(this.data.contatti) ? {} : this.data.contatti;
    this.riferimentoAmministrazione = this.data.riferimentoAmministrazione;
  }

  private loadAnagraficaFormData(dati: fe.DatiAnagraficiCedente) {
    if (_.isNil(dati)) {
      this.albo = {};
      return;
    }

    const form: AlboFormData = {};
    form.alboProfessionale = dati.alboProfessionale;
    form.dataIscrizioneAlbo = dati.dataIscrizioneAlbo;
    form.provinciaAlbo = dati.provinciaAlbo;
    form.numeroIscrizioneAlbo = dati.numeroIscrizioneAlbo;
    form.regimeFiscale = dati.regimeFiscale;
    this.albo = form;
  }
}



export interface AlboFormData {
  alboProfessionale?: string;
  dataIscrizioneAlbo?: Date;
  numeroIscrizioneAlbo?: string;
  provinciaAlbo?: string;
  regimeFiscale?: string;
}