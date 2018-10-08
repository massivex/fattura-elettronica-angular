import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as fe from '../../shared/fattura-elettronica.model';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import * as _ from 'lodash';

@Component({
  selector: 'mx-editor-dati-trasmissione',
  templateUrl: './dati-trasmissione.component.html',
  styleUrls: ['./dati-trasmissione.component.css']
})
export class DatiTrasmissioneComponent implements OnInit, OnChanges {
  @Input()
  public data: fe.DatiTrasmissione;

  public trasmissione: FormDatiTrasmissione;

  constructor() {
    this.trasmissione = {};
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
   this.loadDatiTrasmissione();
  }

  private loadDatiTrasmissione() {
    const form: FormDatiTrasmissione = {};

    if (_.isNil(this.data)) {
      return;
    }

    form.codiceDestinatario = this.data.codiceDestinatario;
    form.formatoTrasmissione = this.data.formatoTrasmissione;
    form.progressivoInvio = this.data.progressivoInvio;
    form.pecDestinatario = this.data.pecDestinatario;

    if (this.data.idTrasmittente) {
      form.idCodice = this.data.idTrasmittente.idCodice;
      form.idPaese = this.data.idTrasmittente.idPaese;
    }

    if (this.data.contattiTrasmittente) {
      form.email = this.data.contattiTrasmittente.email;
      form.telefono = this.data.contattiTrasmittente.telefono;
    }

    this.trasmissione = form;
  }
}


export interface FormDatiTrasmissione {
  idPaese?: string;
  idCodice?: string;
  progressivoInvio?: string;
  formatoTrasmissione?: string;
  codiceDestinatario?: string;
  telefono?: string;
  email?: string;
  pecDestinatario?: string;
}
