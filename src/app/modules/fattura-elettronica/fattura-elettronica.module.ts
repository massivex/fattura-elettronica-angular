import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from './editor/editor.module';
import { ProvinciaService } from './shared/provincia.service';

@NgModule({
  imports: [
    CommonModule,
    EditorModule
  ],
  providers: [
    ProvinciaService
  ],
  exports: [
    EditorModule
  ]
})
export class FatturaElettronicaModule { }
