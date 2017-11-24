import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CedentePrestatoreComponent } from './cedente-prestatore.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BloccoIndirizzoComponent } from '../blocco-indirizzo/blocco-indirizzo.component';
import { IscrizioneReaComponent } from '../iscrizione-rea/iscrizione-rea.component';

describe('CedentePrestatoreComponent', () => {
  let component: CedentePrestatoreComponent;
  let fixture: ComponentFixture<CedentePrestatoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CedentePrestatoreComponent, BloccoIndirizzoComponent, IscrizioneReaComponent ],
      imports: [ FormsModule, NgbModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CedentePrestatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
