import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatiTrasmissioneComponent } from './dati-trasmissione.component';

describe('DatiTrasmissioneComponent', () => {
  let component: DatiTrasmissioneComponent;
  let fixture: ComponentFixture<DatiTrasmissioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatiTrasmissioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatiTrasmissioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
