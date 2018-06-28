import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
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
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule
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
export class EditorModule {
  constructor(
    public matIconRegistry: MatIconRegistry
  ) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
