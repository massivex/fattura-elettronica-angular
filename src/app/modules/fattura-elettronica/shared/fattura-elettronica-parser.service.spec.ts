import { TestBed, inject } from '@angular/core/testing';
import { FatturaElettronicaParserService } from './fattura-elettronica-parser.service';
import { XmlParserService } from './xml-parser.service';
import * as fe from '../shared/fattura-elettronica.model';

describe('FatturaElettronicaParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ FatturaElettronicaParserService, XmlParserService ]
    });
  });

  it('should be created', inject([FatturaElettronicaParserService], (service: FatturaElettronicaParserService) => {
    expect(service).toBeTruthy();
  }));

  describe('when you parse a DatiTrasmissione node ', () => {
    const xmlDatiTrasmissione = `
    <DatiTrasmissione>
      <ProgressivoInvio>123</ProgressivoInvio>
      <CodiceDestinatario>ABCDEFG</CodiceDestinatario>
      <FormatoTrasmissione>FPA12</FormatoTrasmissione>
      <IdTrasmittente>
        <IdPaese>IT</IdPaese>
        <IdCodice>12345678901</IdCodice>
      </IdTrasmittente>
      <PecDestinatario>pecDestinatario</PecDestinatario>
      <ContattiTrasmittente>
        <Email>email</Email>
        <Telefono>telefono</Telefono>
      </ContattiTrasmittente>
    </DatiTrasmissione>`;

    it('should be created', inject([FatturaElettronicaParserService], (service: FatturaElettronicaParserService) => {
      service.loadXml(xmlDatiTrasmissione);
      const actual = service.getDatiTrasmissione();
      const expected = {
        progressivoInvio: '123',
        formatoTrasmissione: 'FPA12',
        codiceDestinatario: 'ABCDEFG',
        contattiTrasmittente: {
          email: 'email',
          telefono: 'telefono'
        },
        idTrasmittente: {
          idPaese: 'IT',
          idCodice: '12345678901'
        },
        pecDestinatario: 'pecDestinatario'
      } as fe.DatiTrasmissione;
      expect(actual).toEqual(expected);
    }));
  });

  describe('when you parse a getCedentePrestatore node ', () => {
    const xmlCedentePrestatore = `
    <CedentePrestatore>
      <DatiAnagrafici>
        <IdFiscaleIVA><IdPaese>IT</IdPaese><IdCodice>12345678901</IdCodice></IdFiscaleIVA>
        <Anagrafica>
          <CodEORI>codEORI</CodEORI>
          <Cognome>cognome</Cognome>
          <Nome>nome</Nome>
          <Titolo>titolo</Titolo>
          <Denominazione>denominazione</Denominazione>
        </Anagrafica>
        <CodiceFiscale>codiceFiscale</CodiceFiscale>
        <DataIscrizioneAlbo>2017-01-01</DataIscrizioneAlbo>
        <NumeroIscrizioneAlbo>1</NumeroIscrizioneAlbo>
        <ProvinciaAlbo>RM</ProvinciaAlbo>
        <RegimeFiscale>RF01</RegimeFiscale>
        <AlboProfessionale>albo</AlboProfessionale>
      </DatiAnagrafici>
      <Contatti>
        <Email>email</Email>
        <Fax>fax</Fax>
        <Telefono>telefono</Telefono>
      </Contatti>
      <IscrizioneREA>
        <CapitaleSociale>1000</CapitaleSociale>
        <NumeroREA>1</NumeroREA>
        <SocioUnico>SU</SocioUnico>
        <StatoLiquidazione>NO</StatoLiquidazione>
        <Ufficio>ufficio</Ufficio>
      </IscrizioneREA>
      <Sede>
        <CAP>cap</CAP>
        <Comune>comune</Comune>
        <Indirizzo>indirizzo</Indirizzo>
        <Nazione>IT</Nazione>
        <NumeroCivico>numeroCivico</NumeroCivico>
        <Provincia>provincia</Provincia>
      </Sede>
      <StabileOrganizzazione>
        <CAP>cap</CAP>
        <Comune>comune</Comune>
        <Indirizzo>indirizzo</Indirizzo>
        <Nazione>IT</Nazione>
        <NumeroCivico>numeroCivico</NumeroCivico>
        <Provincia>provincia</Provincia>
      </StabileOrganizzazione>
      <RiferimentoAmministrazione>none</RiferimentoAmministrazione>
    </CedentePrestatore>`;

    it('should be created', inject([FatturaElettronicaParserService], (service: FatturaElettronicaParserService) => {
      service.loadXml(xmlCedentePrestatore);
      const actual = service.getCedentePrestatore();
      const expected = {
        datiAnagrafici: {
          idFiscaleIVA: { idCodice: '12345678901', idPaese: 'IT' },
          alboProfessionale: 'albo',
          anagrafica: {
            codEORI: 'codEORI',
            cognome: 'cognome',
            nome: 'nome',
            titolo: 'titolo',
            denominazione: 'denominazione'
          },
          codiceFiscale: 'codiceFiscale',
          dataIscrizioneAlbo: new Date(Date.parse('2017-01-01')),
          numeroIscrizioneAlbo: '1',
          provinciaAlbo: 'RM',
          regimeFiscale: 'RF01'
        },
        sede: {
          cap: 'cap',
          comune: 'comune',
          indirizzo: 'indirizzo',
          nazione: 'IT',
          numeroCivico: 'numeroCivico',
          provincia: 'provincia'
        },
        stabileOrganizzazione: {
          cap: 'cap',
          comune: 'comune',
          indirizzo: 'indirizzo',
          nazione: 'IT',
          numeroCivico: 'numeroCivico',
          provincia: 'provincia'
        },
        contatti: {
          email: 'email',
          telefono: 'telefono',
          fax: 'fax'
        },
        iscrizioneREA: {
          capitaleSociale: '1000',
          numeroREA: '1',
          socioUnico: 'SU',
          statoLiquidazione: 'NO',
          ufficio: 'ufficio'
        },
        riferimentoAmministrazione: 'none'
      } as fe.CedentePrestatore;
      expect(actual).toEqual(expected);
    }));
  });


})
