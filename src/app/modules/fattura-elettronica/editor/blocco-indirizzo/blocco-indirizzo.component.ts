import { Component, OnInit } from '@angular/core';
import { ProvinciaService, Provincia } from '../../shared/provincia.service';

@Component({
  selector: 'mx-editor-blocco-indirizzo',
  templateUrl: './blocco-indirizzo.component.html',
  styleUrls: ['./blocco-indirizzo.component.scss']
})
export class BloccoIndirizzoComponent implements OnInit {
  public provincie: Provincia[];

  constructor(private provinciaService: ProvinciaService) { }

  ngOnInit() {
    this.provincie = this.provinciaService.getList();
  }

}
