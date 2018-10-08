import { Component, OnDestroy, QueryList, Input, ContentChildren, forwardRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { Subscription } from 'rxjs';
import { merge } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';


/**
 * A material design file upload queue component.
 */
@Component({
    selector: 'app-file-upload-queue',
    templateUrl: `file-upload-queue.component.html`,
    exportAs: 'appFileUploadQueue',
  })
  export class FileUploadQueueComponent implements OnDestroy, AfterViewInit {

    @ContentChildren(forwardRef(() => FileUploadComponent)) fileUploads: QueryList<FileUploadComponent>;

    /** Subscription to remove changes in files. */
    private _fileRemoveSubscription: Subscription | null;

    /** Subscription to changes in the files. */
    private _changeSubscription: Subscription;

    /** Combined stream of all of the file upload remove change events. */
    get fileUploadRemoveEvents() {
        return merge(...this.fileUploads.map(fileUpload => fileUpload.removeEvent));
    }

    public files: Array<any> = [];

    /* Http request input bindings */
    @Input()
    httpUrl: string;

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
    autoUpload = false;

    @Output() onChange = new EventEmitter<any>();

    ngAfterViewInit() {
      // When the list changes, re-subscribe
      this._changeSubscription = this.fileUploads.changes.pipe(startWith(null)).subscribe(() => {
        if (this._fileRemoveSubscription) {
          this._fileRemoveSubscription.unsubscribe();
        }
        this._listenTofileRemoved();
      });
    }

    private _listenTofileRemoved(): void {
      this._fileRemoveSubscription = this.fileUploadRemoveEvents.subscribe((event: FileUploadComponent) => {
        this.files.splice(event.id, 1);
        this.onChange.emit({ sender: this });
      });
    }

    add(file: any) {
      this.files.push(file);
      if (this.autoUpload === true) {
        setTimeout( () => this.uploadAll(), 100);
      }
      this.onChange.emit({ sender: this });
    }

    public uploadAll() {
      this.fileUploads.forEach((fileUpload) => { fileUpload.upload(); });
    }

    public removeAll() {
      this.files.splice(0, this.files.length);
      this.onChange.emit({ sender: this });
    }

    ngOnDestroy() {
      if (this.files) {
        this.removeAll();
      }
    }
}
