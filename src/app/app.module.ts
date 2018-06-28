import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatturaElettronicaModule } from './modules/fattura-elettronica/fattura-elettronica.module';
import { EditorModule } from './modules/fattura-elettronica/editor/editor.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CodeBoxComponent } from './code-box/code-box.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CodeBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    EditorModule,
    FatturaElettronicaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
