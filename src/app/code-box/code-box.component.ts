import { Component, OnInit, Input } from '@angular/core';
import * as urlParse from 'url-parse';
import * as _ from 'lodash';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss']
})
export class CodeBoxComponent implements OnInit {

  @Input() public imageUrl: string;
  @Input() public url: string;
  @Input() public title: string;

  constructor() { }

  ngOnInit() {
  }

  host() {
    const notAvailable = '';
    if (_.isNil(this.url)) {
      return notAvailable;
    }

    const urlParsed = urlParse(this.url);
    if (_.isNil(urlParsed) || _.isNil(urlParsed.hostname)) {
      return notAvailable;
    }

    return urlParsed.hostname.replace('www.', '');
  }

}
