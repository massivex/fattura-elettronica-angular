import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappresentanteFiscaleComponent } from './rappresentante-fiscale.component';
import { FormsModule } from '@angular/forms';

describe('RappresentanteFiscaleComponent', () => {
  let component: RappresentanteFiscaleComponent;
  let fixture: ComponentFixture<RappresentanteFiscaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RappresentanteFiscaleComponent ],
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
