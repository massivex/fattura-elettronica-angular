import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('uploadXml') appUpload: UploadComponent;

  public visualizzaCarica = false;
  constructor() { }

  ngOnInit() {
  }

  caricaXml() {
    this.visualizzaCarica = true;
    this.appUpload.browse();
  }
}
