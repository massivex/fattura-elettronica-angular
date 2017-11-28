import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBoxComponent } from './code-box.component';

describe('CodeBoxComponent', () => {
  let component: CodeBoxComponent;
  let fixture: ComponentFixture<CodeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when host is called with a valid url set', async() => {
    let host: string;
    beforeEach(async(() => {
      component.url = 'http://www.github.com';
      host = component.host();
    }));

     it('should be returned host name without www.', () => {
       expect(host).toBe('github.com');
     });
  });

  describe('when host is called with an invalid url set', async() => {
    let host: string;
    beforeEach(async(() => {
      component.url = 'htt//github##';;
      host = component.host();
    }));

     it('should be returned localhost', () => {
       expect(host).toBe('localhost');
     });
  });

});
