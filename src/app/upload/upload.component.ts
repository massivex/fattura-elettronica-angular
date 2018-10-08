import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FileUploadEvent } from '../uploader/file-upload/file-upload.component';
import { FileUploadQueueComponent } from '../uploader/file-upload-queue/file-upload-queue.component';
import { Subscription } from 'rxjs';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';
import { AppSettings } from '../app.settings';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  @ViewChild('fileUploadQueue')
  public fileUploadQueue: FileUploadQueueComponent;

  @ViewChild('pdfViewer') pdfViewer: PdfViewerComponent;

  public fileUid: string;
  public canUpload = true;
  @Input() public httpUrl: string;
  public loading = false;
  private fileUploadSubscription: Subscription;

  constructor(
    private httpClient: HttpClient,
    private appSettings: AppSettings
    ) { }

  ngOnInit() {
    this.fileUid = null;
    this.fileUploadQueue.httpUrl = this.appSettings.SkynetApiUrl + '/api/accounting/fe-viewer/upload';
    this.httpUrl = this.appSettings.SkynetApiUrl + '/api/accounting/fe-viewer/get-token';
    return;
  }

  getServerUid(args: FileUploadEvent) {
    if (args.event instanceof HttpResponse) {
      this.fileUid = args.event.body[0];
    }
  }

  onFileChanged(args: { sender: FileUploadQueueComponent }) {
    this.canUpload = args.sender.files.length === 0;
    if (!this.canUpload) {
      this.fileUid = null;
    }
  }

  carica() {
    this.creaToken();
    this.loading = true;
  }

  private creaToken() {
    this.fileUploadSubscription = this.httpClient.post<DownloadToken>(this.httpUrl, { uploadUid: this.fileUid }, {
      reportProgress: true,
      responseType: 'json'
    }).subscribe((event) => {
      console.log(event.token);
      this.loading = false;

      this.pdfViewer.downloadToken = event.token;
      this.pdfViewer.visible = true;
    }, (error: any) => {
      if (this.fileUploadSubscription) {
        this.fileUploadSubscription.unsubscribe();
      }
      this.loading = false;
    });
  }
}

interface DownloadToken {
  token: string;
}
