import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatiTrasmissioneComponent, FormDatiTrasmissione } from './dati-trasmissione.component';
import { FormsModule } from '@angular/forms';
import { SimpleChange } from '@angular/core';
import * as fe from '../../shared/fattura-elettronica.model';

describe('DatiTrasmissioneComponent', () => {
  let component: DatiTrasmissioneComponent;
  let fixture: ComponentFixture<DatiTrasmissioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatiTrasmissioneComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatiTrasmissioneComponent);
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
        expect(component.trasmissione).toEqual({});
      });
    });

    describe('with a fulfilled object', async () => {
      const expected = {
        codiceDestinatario: 'codiceDestinatario',
        email: 'email',
        formatoTrasmissione: 'formatoTrasmissione',
        idCodice: 'idCodice',
        idPaese: 'idPaese',
        pecDestinatario: 'pecDestinatario',
        progressivoInvio: 'progressivoInvio',
        telefono: 'telefono'
      } as FormDatiTrasmissione;

      it('should be returned a fullfilled form object', () => {
        spyOn(component, 'ngOnChanges').and.callThrough();
        component.data = {
          codiceDestinatario: 'codiceDestinatario',
          contattiTrasmittente: {
            email: 'email', telefono: 'telefono'
          },
          formatoTrasmissione: 'formatoTrasmissione',
          idTrasmittente: {
            idPaese: 'idPaese',
            idCodice: 'idCodice'
          },
          pecDestinatario: 'pecDestinatario',
          progressivoInvio: 'progressivoInvio'
        } as fe.DatiTrasmissione;
        component.ngOnChanges({ data: new SimpleChange(undefined, {}, true) });
        fixture.detectChanges();
        expect(component.trasmissione).toEqual(expected);
      });
    });


  });
});
