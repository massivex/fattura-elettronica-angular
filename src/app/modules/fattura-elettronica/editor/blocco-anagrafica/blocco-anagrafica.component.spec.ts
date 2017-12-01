import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloccoAnagraficaComponent } from './blocco-anagrafica.component';
import { FormsModule } from '@angular/forms';

describe('BloccoAnagraficaComponent', () => {
  let component: BloccoAnagraficaComponent;
  let fixture: ComponentFixture<BloccoAnagraficaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ BloccoAnagraficaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloccoAnagraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
