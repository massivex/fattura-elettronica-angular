import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorComponent } from './editor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatiTrasmissioneComponent } from './dati-trasmissione/dati-trasmissione.component';
import { CedentePrestatoreComponent } from './cedente-prestatore/cedente-prestatore.component';
import { RappresentanteFiscaleComponent } from './rappresentante-fiscale/rappresentante-fiscale.component';
import { FormsModule } from '@angular/forms';
import { CessionarioCommittenteComponent } from './cessionario-committente/cessionario-committente.component';
import { BloccoIndirizzoComponent } from './blocco-indirizzo/blocco-indirizzo.component';
import { IscrizioneReaComponent } from './iscrizione-rea/iscrizione-rea.component';
import { XmlLoaderComponent } from './xml-loader/xml-loader.component';
import { FatturaElettronicaParserService } from '../shared/fattura-elettronica-parser.service';
import * as fe from '../shared/fattura-elettronica.model';
import { BloccoAnagraficaComponent } from './blocco-anagrafica/blocco-anagrafica.component';
import { TerzoIntermediarioComponent } from './terzo-intermediario/terzo-intermediario.component';


describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditorComponent, DatiTrasmissioneComponent, CedentePrestatoreComponent,
        RappresentanteFiscaleComponent, CessionarioCommittenteComponent,
        BloccoIndirizzoComponent, IscrizioneReaComponent, XmlLoaderComponent,
        BloccoAnagraficaComponent, TerzoIntermediarioComponent
      ],
      imports: [NgbModule.forRoot(), FormsModule],
      providers: [
        {
          provide: FatturaElettronicaParserService, useValue: new MockFatturaElettronicaParserService()
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be loaded datiTrasmissione', () => {
    component.onXmlLoaded({
      content: `<p:FatturaElettronica></p:FatturaElettronica>`
    });
    expect(component.datiTrasmissione).toEqual({ codiceDestinatario: 'codiceDestinatario' });
  });

  it('should be loaded datiCedente', () => {
    component.onXmlLoaded({
      content: `<p:FatturaElettronica></p:FatturaElettronica>`
    });
    expect(component.datiCedente).toEqual({ riferimentoAmministrazione: 'riferimentoAmministrazione' });
  });
});


class MockFatturaElettronicaParserService {
  public loadXml() {
    return;
  }

  public getDatiTrasmissione(): fe.DatiTrasmissione {
    return { codiceDestinatario: 'codiceDestinatario' };
  }

  public getCedentePrestatore(): fe.CedentePrestatore {
    return { riferimentoAmministrazione: 'riferimentoAmministrazione' };
  }

  public getRappresentanteFiscale(): fe.CedentePrestatore {
    return { riferimentoAmministrazione: 'riferimentoAmministrazione' };
  }

  public getCessionarioCommittente(): fe.CessionarioCommittente {
    return { };
  }

  public getTerzoIntermediario(): fe.TerzoIntermediario {
    return { };
  }

  public getSoggettoEmittente(): string {
    return null;
  }
}
