import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CessionarioCommittenteComponent } from './cessionario-committente.component';
import { BloccoAnagraficaComponent } from '../blocco-anagrafica/blocco-anagrafica.component';
import { BloccoIndirizzoComponent } from '../blocco-indirizzo/blocco-indirizzo.component';
import { FormsModule } from '@angular/forms';

describe('CessionarioCommittenteComponent', () => {
  let component: CessionarioCommittenteComponent;
  let fixture: ComponentFixture<CessionarioCommittenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CessionarioCommittenteComponent, BloccoAnagraficaComponent, BloccoIndirizzoComponent
      ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CessionarioCommittenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
