import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CedentePrestatoreComponent } from './cedente-prestatore.component';

describe('CedentePrestatoreComponent', () => {
  let component: CedentePrestatoreComponent;
  let fixture: ComponentFixture<CedentePrestatoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CedentePrestatoreComponent ]
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
