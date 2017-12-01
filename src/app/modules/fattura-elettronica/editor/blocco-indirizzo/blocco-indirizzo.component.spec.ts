import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloccoIndirizzoComponent } from './blocco-indirizzo.component';
import { ProvinciaService } from '../../shared/provincia.service';
import { FormsModule } from '@angular/forms';

describe('BloccoIndirizzoComponent', () => {
  let component: BloccoIndirizzoComponent;
  let fixture: ComponentFixture<BloccoIndirizzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ BloccoIndirizzoComponent ],
      providers: [ ProvinciaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloccoIndirizzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
