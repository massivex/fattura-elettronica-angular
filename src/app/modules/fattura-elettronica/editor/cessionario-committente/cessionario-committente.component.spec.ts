import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CessionarioCommittenteComponent } from './cessionario-committente.component';

describe('CessionarioCommittenteComponent', () => {
  let component: CessionarioCommittenteComponent;
  let fixture: ComponentFixture<CessionarioCommittenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CessionarioCommittenteComponent ]
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
