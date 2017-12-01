import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappresentanteFiscaleComponent } from './rappresentante-fiscale.component';
import { FormsModule } from '@angular/forms';
import { BloccoAnagraficaComponent } from '../blocco-anagrafica/blocco-anagrafica.component';

describe('RappresentanteFiscaleComponent', () => {
  let component: RappresentanteFiscaleComponent;
  let fixture: ComponentFixture<RappresentanteFiscaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RappresentanteFiscaleComponent, BloccoAnagraficaComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappresentanteFiscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
