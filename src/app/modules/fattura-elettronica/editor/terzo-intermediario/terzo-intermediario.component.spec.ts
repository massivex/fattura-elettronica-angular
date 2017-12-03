import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerzoIntermediarioComponent } from './terzo-intermediario.component';
import { BloccoAnagraficaComponent } from '../blocco-anagrafica/blocco-anagrafica.component';
import { FormsModule } from '@angular/forms';

describe('TerzoIntermediarioComponent', () => {
  let component: TerzoIntermediarioComponent;
  let fixture: ComponentFixture<TerzoIntermediarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerzoIntermediarioComponent, BloccoAnagraficaComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerzoIntermediarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
