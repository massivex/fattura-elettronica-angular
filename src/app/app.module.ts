import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatturaElettronicaModule } from './modules/fattura-elettronica/fattura-elettronica.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditorModule } from './modules/fattura-elettronica/editor/editor.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CodeBoxComponent } from './code-box/code-box.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CodeBoxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule.forRoot(),
    FatturaElettronicaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
