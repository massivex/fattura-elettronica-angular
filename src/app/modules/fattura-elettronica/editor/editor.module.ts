import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { BloccoAnagraficaComponent } from './blocco-anagrafica/blocco-anagrafica.component';
import { TerzoIntermediarioComponent } from './terzo-intermediario/terzo-intermediario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    EditorComponent,
    DatiTrasmissioneComponent,
    CedentePrestatoreComponent,
    RappresentanteFiscaleComponent,
    CessionarioCommittenteComponent,
    BloccoIndirizzoComponent,
    IscrizioneReaComponent,
    XmlLoaderComponent,
    BloccoAnagraficaComponent,
    TerzoIntermediarioComponent
  ],
  exports: [
    EditorComponent
  ]
})
export class EditorModule { }
