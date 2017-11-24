import { Component, OnInit } from '@angular/core';
import { ProvinciaService, Provincia } from '../../shared/provincia.service';

@Component({
  selector: 'mx-editor-iscrizione-rea',
  templateUrl: './iscrizione-rea.component.html',
  styleUrls: ['./iscrizione-rea.component.scss']
})
export class IscrizioneReaComponent implements OnInit {
  public provincie: Provincia[];

  constructor(private provinciaService: ProvinciaService) { }

  ngOnInit() {
    this.provincie = this.provinciaService.getList();
  }

}
