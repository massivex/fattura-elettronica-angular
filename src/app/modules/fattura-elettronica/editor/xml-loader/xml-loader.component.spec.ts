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

  describe('when onFileChange', () => {
    it('should not fire loaded if files is empty ', (done) => {
      spyOn(component.loaded, 'emit').and.callThrough();
      return component.onFileChange({ target: { files: [] } })
      .then( () => {
        expect(component.loaded.emit).not.toHaveBeenCalled();
        done();
      });
    });

    it('should fire loaded if files is not empty ', (done) => {
      const blob = new Blob(['<root></root>'], { type: 'text/xml' });
      spyOn(component.loaded, 'emit').and.callThrough();
      component
        .onFileChange({ target: { files: [ blob ] } })
        .then( () => {
          expect(component.loaded.emit).toHaveBeenCalledTimes(1);
          done();
        });
    });
  });
});
