import { Component, OnInit, ViewChild } from '@angular/core';
import { XmlLoaderLoadedEventArgs } from './xml-loader/xml-loader.component';
import { FatturaElettronicaParserService } from '../shared/fattura-elettronica-parser.service';
import { DatiTrasmissioneComponent } from './dati-trasmissione/dati-trasmissione.component';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap/tabset/tabset';
import * as _ from 'lodash';

@Component({
  selector: 'mx-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @ViewChild(NgbTabset) tabSet: NgbTabset;

  constructor(
    private fatturaParser: FatturaElettronicaParserService
  ) { }

  ngOnInit() {
  }

  public onXmlLoaded(e: XmlLoaderLoadedEventArgs) {
    this.fatturaParser.loadXml(e.content);
    const datiTramissione = this.fatturaParser.getDatiTrasmissione();
    const cedentePrestatore = this.fatturaParser.getCedentePrestatore();
    if (!_.isNil(datiTramissione) && !_.isNil(cedentePrestatore)) {
      this.tabSet.select('ngb-tab-0');
      alert('xml caricato correttamente');
    }
  }

}
