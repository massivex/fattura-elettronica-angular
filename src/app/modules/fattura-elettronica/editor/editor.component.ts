import { Component, OnInit, ViewChild } from '@angular/core';
import { XmlLoaderLoadedEventArgs } from './xml-loader/xml-loader.component';
import { FatturaElettronicaParserService } from '../shared/fattura-elettronica-parser.service';
import { DatiTrasmissioneComponent } from './dati-trasmissione/dati-trasmissione.component';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap/tabset/tabset';
import * as _ from 'lodash';
import * as fe from '../shared/fattura-elettronica.model';

@Component({
  selector: 'mx-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  
  @ViewChild(NgbTabset) editorTabs: NgbTabset;

  public datiCedente: fe.CedentePrestatore;
  public datiTrasmissione: fe.DatiTrasmissione;
  public datiRappresentanteFiscale: fe.RappresentanteFiscale;

  constructor(
    private fatturaParser: FatturaElettronicaParserService
  ) { }

  ngOnInit() {
  }

  public onXmlLoaded(e: XmlLoaderLoadedEventArgs) {
    this.fatturaParser.loadXml(e.content);
    this.datiTrasmissione = this.fatturaParser.getDatiTrasmissione();
    this.datiCedente = this.fatturaParser.getCedentePrestatore();
    this.datiRappresentanteFiscale = this.fatturaParser.getRappresentanteFiscale();
    if (!_.isNil(this.datiTrasmissione) && !_.isNil(this.datiCedente)) {
      this.editorTabs.select('intestazione');
    }
  }

}
