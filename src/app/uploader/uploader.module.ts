import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadQueueComponent } from './file-upload-queue/file-upload-queue.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadInputForDirective } from './file-upload-input-for.directive';
import { BytesPipe } from './bytes.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    FileUploadInputForDirective,
    FileUploadQueueComponent,
    FileUploadComponent,
  ],
  declarations: [
    FileUploadQueueComponent,
    FileUploadComponent,
    FileUploadInputForDirective,
    BytesPipe
  ]
})
export class UploaderModule { }
