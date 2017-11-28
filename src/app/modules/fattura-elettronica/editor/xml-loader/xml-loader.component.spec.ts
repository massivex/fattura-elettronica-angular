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

  describe('when onFileChange', async () => {
    it('should not fire loaded if files is empty ', () => {
      spyOn(component.loaded, 'emit');
      component.onFileChange({ target: { files: [] } });
      expect(component.loaded.emit).not.toHaveBeenCalled();
    });

    it('should fire loaded if files is not empty ', () => {
      const blob = new Blob(['<root></root>'], { type: 'text/xml' });
      spyOn(component.loaded, 'emit');
      component
        .onFileChange({ target: { files: [ blob ] } })
        .then( () => {
          expect(component.loaded.emit).toHaveBeenCalledTimes(1);
        });
    });
  });
});
