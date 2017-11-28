import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as fe from './fattura-elettronica.model';
import { XmlParserService } from './xml-parser.service';

@Injectable()
export class FatturaElettronicaParserService {
  private xmlDoc: Document;

  constructor(
    private parser: XmlParserService
  ) { }

  loadXml(xml: string) {
    this.xmlDoc = this.parser.createDocument(xml);
  }

  public getDatiTrasmissione(): fe.DatiTrasmissione {
    const root = '//DatiTrasmissione[1]';
    const xml = this.xmlDoc;
    const rootExists = this.parser.hasNode(xml, root);
    if (!rootExists) {
      return null;
    }

    // //DatiTrasmissione[1]/FormatoTrasmissione/text()

    const progressivoInvio = this.parser.getText(xml, `${root}/ProgressivoInvio`);
    const formatoTrasmissione = this.parser.getText(xml, `${root}/FormatoTrasmissione`);
    const codiceDestinatario = this.parser.getText(xml, `${root}/CodiceDestinatario`);
    const idPaese = this.parser.getText(xml, `${root}/IdTrasmittente/IdPaese`);
    const idCodice = this.parser.getText(xml, `${root}/IdTrasmittente/IdCodice`);
    return {
      progressivoInvio,
      formatoTrasmissione,
      idTrasmittente: {
        idPaese,
        idCodice
      }
    };
  }

  public getCedentePrestatore(): fe.CedentePrestatore {
    const root = '//CedentePrestatore[1]';
    const xml = this.xmlDoc;
    const rootExists = this.parser.hasNode(xml, root);
    if (!rootExists) {
      return null;
    }

    // //DatiTrasmissione[1]/FormatoTrasmissione/text()
    let datiAnagrafici: fe.DatiAnagraficiCedente;
    if (this.parser.hasNode(xml, `${root}/DatiAnagrafici`)) {
      let idFiscaleIVA;
      if (this.parser.hasNode(xml, `${root}/DatiAnagrafici/IdFiscaleIVA`)) {
        const idPaese = this.parser.getText(xml, `${root}/DatiAnagrafici/IdFiscaleIVA/IdPaese`);
        const idCodice = this.parser.getText(xml, `${root}/DatiAnagrafici/IdFiscaleIVA/IdCodice`);
        idFiscaleIVA = { idPaese, idCodice };
      }
      datiAnagrafici = {};
      datiAnagrafici.idFiscaleIVA = idFiscaleIVA;
      datiAnagrafici.codiceFiscale = this.parser.getText(xml, `${root}/DatiAnagrafici/CodiceFiscale`);
      datiAnagrafici.regimeFiscale = this.parser.getText(xml, `${root}/DatiAnagrafici/RegimeFiscale`);

      let anagrafica: fe.Anagrafica;
      if (this.parser.hasNode(xml, `${root}/DatiAnagrafici/Anagrafica`)) {
        anagrafica = {};
        anagrafica.denominazione = this.parser.getText(xml, `${root}/DatiAnagrafici/Anagrafica/Denominazione`);
      }
      datiAnagrafici.anagrafica = anagrafica;
    }

    return {
      datiAnagrafici
    };
  }

  public getRappresentanteFiscale(): fe.RappresentanteFiscale {
    return null;
  }


}
