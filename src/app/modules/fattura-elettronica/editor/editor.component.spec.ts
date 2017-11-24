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

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditorComponent, DatiTrasmissioneComponent, CedentePrestatoreComponent,
        RappresentanteFiscaleComponent, CessionarioCommittenteComponent,
        BloccoIndirizzoComponent, IscrizioneReaComponent
      ],
      imports: [ NgbModule.forRoot(), FormsModule ]
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
});
