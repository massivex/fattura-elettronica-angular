import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from './editor/editor.module';
import { ProvinciaService } from './shared/provincia.service';
import { FatturaElettronicaParserService } from './shared/fattura-elettronica-parser.service';
import { XmlParserService } from './shared/xml-parser.service';

@NgModule({
  imports: [
    CommonModule,
    EditorModule
  ],
  providers: [
    ProvinciaService,
    FatturaElettronicaParserService,
    XmlParserService
  ],
  exports: [
    EditorModule
  ]
})
export class FatturaElettronicaModule { }
