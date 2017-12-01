import { Component, OnInit, Input } from '@angular/core';
import { ProvinciaService, Provincia } from '../../shared/provincia.service';
import * as fe from '../../shared/fattura-elettronica.model';
import * as _ from 'lodash';

@Component({
  selector: 'mx-editor-iscrizione-rea',
  templateUrl: './iscrizione-rea.component.html',
  styleUrls: ['./iscrizione-rea.component.scss']
})
export class IscrizioneReaComponent implements OnInit {
  public provincie: Provincia[];

  @Input()
  public data: fe.IscrizioneREA;

  constructor(private provinciaService: ProvinciaService) {
    this.data = {};
   }

  ngOnInit() {
    this.data = _.isNil(this.data) ? {} : this.data;
    this.provincie = this.provinciaService.getList();
  }

}
