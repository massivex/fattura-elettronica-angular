import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CedentePrestatoreComponent, AlboFormData } from './cedente-prestatore.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BloccoIndirizzoComponent } from '../blocco-indirizzo/blocco-indirizzo.component';
import { IscrizioneReaComponent } from '../iscrizione-rea/iscrizione-rea.component';
import { SimpleChange } from '@angular/core';
import * as fe from '../../shared/fattura-elettronica.model';
import { BloccoAnagraficaComponent } from '../blocco-anagrafica/blocco-anagrafica.component';
import { ProvinciaService } from '../../shared/provincia.service';

describe('CedentePrestatoreComponent', () => {
  let component: CedentePrestatoreComponent;
  let fixture: ComponentFixture<CedentePrestatoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CedentePrestatoreComponent, BloccoIndirizzoComponent,
        IscrizioneReaComponent, BloccoAnagraficaComponent
      ],
      imports: [FormsModule, NgbModule.forRoot()],
      providers: [
        ProvinciaService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CedentePrestatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when data changed', async () => {
    describe('with an empty object', async () => {
      it('should be returned an empty object', () => {
        spyOn(component, 'ngOnChanges').and.callThrough();
        component.data = undefined;
        component.ngOnChanges({ data: new SimpleChange(undefined, {}, true) });
        fixture.detectChanges();
        expect(component.albo).toEqual({ });
      });
    });

    describe('with an object with datiAnagrafici', async () => {
      it('should be returned an empty object', () => {
        spyOn(component, 'ngOnChanges').and.callThrough();
        component.data = { datiAnagrafici: null };
        component.ngOnChanges({ data: new SimpleChange(undefined, {}, true) });
        fixture.detectChanges();
        expect(component.albo).toEqual({ });
      });
    });

    describe('with a fullfilled object', async () => {
      const fulfilledData = {
        contatti: { email: 'email@imap.it', fax: '123', telefono: '456' },
        datiAnagrafici: {
          alboProfessionale: 'alboProfessionale',
          anagrafica: {
             codEORI: 'codEORI', cognome: 'cognome', nome: 'nome',
             denominazione: 'denominazione', titolo: 'titolo'
          },
          codiceFiscale: 'codiceFiscale',
          dataIscrizioneAlbo: new Date(2017, 0, 1),
          idFiscaleIVA: { idCodice: 'idCodice', idPaese: 'idPaese' },
          numeroIscrizioneAlbo: 'numeroIscrizioneAlbo',
          provinciaAlbo: 'provinciaAlbo',
          regimeFiscale: 'regimeFiscale'
        }
      } as fe.CedentePrestatore;

      const expected = {
        alboProfessionale: 'alboProfessionale',
        dataIscrizioneAlbo: new Date(2017, 0, 1),
        numeroIscrizioneAlbo: 'numeroIscrizioneAlbo',
        provinciaAlbo: 'provinciaAlbo',
        regimeFiscale: 'regimeFiscale'
      } as AlboFormData;

      it('should be returned a fullfilled object', () => {
        spyOn(component, 'ngOnChanges').and.callThrough();
        component.data = fulfilledData;
        component.ngOnChanges({ data: new SimpleChange(undefined, fulfilledData, true) });
        fixture.detectChanges();
        expect(component.albo).toEqual(expected);
      });
    });

  });
});
