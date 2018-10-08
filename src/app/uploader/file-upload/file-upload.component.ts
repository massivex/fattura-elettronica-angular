import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, Optional, Inject, forwardRef } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpEvent, HttpResponse } from '@angular/common/http';
import { FileUploadQueueComponent } from '../file-upload-queue/file-upload-queue.component';


/**
 * A material design file upload component.
 */
@Component({
    selector: 'app-file-upload',
    templateUrl: `./file-upload.component.html`,
    exportAs: 'appFileUpload',
    // tslint:disable-next-line:use-host-property-decorator
    host: {
      'class': 'mat-file-upload',
    },
    styleUrls: ['./../uploader.scss'],
  })
  export class FileUploadComponent implements OnDestroy {

    constructor(
      private httpClient: HttpClient,
      @Inject(forwardRef(() => FileUploadQueueComponent)) public matFileUploadQueue: FileUploadQueueComponent
    ) {

        if (matFileUploadQueue) {
          this.httpUrl = matFileUploadQueue.httpUrl || this.httpUrl;
          this.httpRequestHeaders = matFileUploadQueue.httpRequestHeaders || this.httpRequestHeaders;
          this.httpRequestParams = matFileUploadQueue.httpRequestParams || this.httpRequestParams;
          this.fileAlias = matFileUploadQueue.fileAlias || this.fileAlias;
        }

    }

    private isUploading = false;

    /* Http request input bindings */
    @Input()
    httpUrl = 'http://localhost:8080';

    @Input()
    httpRequestHeaders: HttpHeaders | {
      [header: string]: string | string[];
    } = new HttpHeaders();

    @Input()
    httpRequestParams: HttpParams | {
      [param: string]: string | string[];
    } = new HttpParams();

    @Input()
    fileAlias = 'file';

    @Input()
    get file(): any {
      return this._file;
    }
    set file(file: any) {
      this._file = file;
      this.total = this._file.size;
    }

    canUpload = true;

    @Input()
    set id(id: number) {
      this._id = id;
    }
    get id(): number {
      return this._id;
    }

    /** Output  */
    @Output() removeEvent = new EventEmitter<FileUploadComponent>();
    @Output() onUpload = new EventEmitter<FileUploadEvent>();

    public progressPercentage = 0;
    public loaded = 0;
    public total = 0;
    private _file: any;
    private _id: number;
    private fileUploadSubscription: any;

    public upload(): void {
      this.isUploading = true;
      // How to set the alias?
      const formData = new FormData();
      formData.set(this.fileAlias, this._file, this._file.name);
      this.fileUploadSubscription = this.httpClient.post<string[]>(this.httpUrl, formData, {
        headers: this.httpRequestHeaders,
        observe: 'events',
        params: this.httpRequestParams,
        reportProgress: true,
        responseType: 'json'
      }).subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressPercentage = Math.floor( event.loaded * 100 / event.total );
          this.loaded = event.loaded;
          this.total = event.total;
        }
        this.canUpload = false;
        this.onUpload.emit({ file: this._file, event });
      }, (error: any) => {
        if (this.fileUploadSubscription) {
          this.fileUploadSubscription.unsubscribe();
        }
        this.isUploading = false;
        this.onUpload.emit({ file: this._file, event: undefined });
      });
    }

    public remove(): void {
      if (this.fileUploadSubscription) {
        this.fileUploadSubscription.unsubscribe();
      }
      this.removeEvent.emit(this);
    }

    ngOnDestroy() {
      console.log('file ' + this._file.name + ' destroyed...');
    }
}

export interface FileUploadEvent {
  file: any;
  event: HttpEvent<string[]> | HttpResponse<string[]>;
}
