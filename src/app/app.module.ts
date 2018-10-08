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
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { UploaderModule } from './uploader/uploader.module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { AppSettings } from './app.settings';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CodeBoxComponent,
    HomeComponent,
    UploadComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    EditorModule,
    FatturaElettronicaModule,
    MatGridListModule,
    AppRoutingModule,
    UploaderModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [
    AppSettings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
