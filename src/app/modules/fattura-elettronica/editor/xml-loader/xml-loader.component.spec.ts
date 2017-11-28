import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlLoaderComponent } from './xml-loader.component';

describe('XmlLoaderComponent', () => {
  let component: XmlLoaderComponent;
  let fixture: ComponentFixture<XmlLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmlLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
