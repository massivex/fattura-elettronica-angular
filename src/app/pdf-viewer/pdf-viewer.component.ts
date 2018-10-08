import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppSettings } from '../app.settings';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {
  @Input() visible: boolean;
  @Input() downloadToken: string;

  constructor(
    private sanitizer: DomSanitizer,
    private appSettings: AppSettings
    ) { }

  ngOnInit() {
    this.visible = false;
  }

  public getUrl() {
    const curTime = (new Date()).getTime();
    const downloadUrl =  `${this.appSettings.SkynetApiUrl}/api/download/get?code=${this.downloadToken}&ts=${curTime}`;
    const url = this.appSettings.SkynetUrl + '/assets/pdfjs/web/viewer.html?file=' + encodeURIComponent(downloadUrl);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
