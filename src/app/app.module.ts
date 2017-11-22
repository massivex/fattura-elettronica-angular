import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatturaElettronicaModule } from './modules/fattura-elettronica/fattura-elettronica.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditorModule } from './modules/fattura-elettronica/editor/editor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FatturaElettronicaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
