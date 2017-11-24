import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IscrizioneReaComponent } from './iscrizione-rea.component';
import { ProvinciaService } from '../../shared/provincia.service';

describe('IscrizioneReaComponent', () => {
  let component: IscrizioneReaComponent;
  let fixture: ComponentFixture<IscrizioneReaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IscrizioneReaComponent ],
      providers: [ ProvinciaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IscrizioneReaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
