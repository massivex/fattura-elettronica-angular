import { Component, OnInit, Input } from '@angular/core';
import URL = require('url-parse');
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

    const urlParsed = new (URL as any)(this.url);
    return urlParsed.hostname.replace('www.', '');
  }

}
