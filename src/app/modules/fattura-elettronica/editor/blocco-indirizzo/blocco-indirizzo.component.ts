import { Component, OnInit, Input } from '@angular/core';
import { ProvinciaService, Provincia } from '../../shared/provincia.service';
import * as fe from './../../shared/fattura-elettronica.model';
import * as _ from 'lodash';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'mx-editor-blocco-indirizzo',
  templateUrl: './blocco-indirizzo.component.html',
  styleUrls: ['./blocco-indirizzo.component.scss']
})
export class BloccoIndirizzoComponent implements OnInit {
  public provincie: Provincia[];

  @Input()
  public data: fe.Indirizzo;

  constructor(private provinciaService: ProvinciaService) { }

  ngOnInit() {
    this.data = _.isNil(this.data) ? {} : this.data;
    this.provincie = this.provinciaService.getList();
  }
}
