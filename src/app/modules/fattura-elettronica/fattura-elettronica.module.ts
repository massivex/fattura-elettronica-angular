import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from './editor/editor.module';

@NgModule({
  imports: [
    CommonModule,
    EditorModule
  ],
  exports: [
    EditorModule
  ]
})
export class FatturaElettronicaModule { }
