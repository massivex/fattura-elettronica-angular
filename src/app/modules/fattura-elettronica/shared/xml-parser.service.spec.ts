import { TestBed, inject } from '@angular/core/testing';

import { XmlParserService } from './xml-parser.service';

describe('XmlParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XmlParserService]
    });
  });

  it('should be created', inject([XmlParserService], (service: XmlParserService) => {
    expect(service).toBeTruthy();
  }));

  describe('when you call createDocument with', () => {
    describe('a valid xml string', () => {
      it('should be created an xml document', inject([XmlParserService], (service: XmlParserService) => {
        const xmlDocument = service.createDocument('<root></root>');
        expect(xmlDocument).toBeTruthy();
      }));
    });

    describe('an invalid xml string', () => {
      it('should be created an xml document', inject([XmlParserService], (service: XmlParserService) => {
        const xmlDocument = service.createDocument('<roo22t></root>');
        const errors = xmlDocument.getElementsByTagName('parsererror').length > 0;
        expect(errors).toBeGreaterThan(0);
      }));
    });

    describe('a null string', () => {
      it('should be returned a null value', inject([XmlParserService], (service: XmlParserService) => {
        const xmlDocument = service.createDocument(null);
        expect(xmlDocument).toBeNull();
      }));
    });

    describe('an undefined string', () => {
      it('should be returned a null value', inject([XmlParserService], (service: XmlParserService) => {
        const xmlDocument = service.createDocument(undefined);
        expect(xmlDocument).toBeNull();
      }));
    });
  });

  describe('when you call getText with', () => {
    let service: XmlParserService;
    let xml: XMLDocument;
    beforeEach(() => {
      service = TestBed.get(XmlParserService);
      xml = service.createDocument('<root><propA>valA</propA></root>')
    });

    describe('an xpath that match a node', () => {
      it('should be returned node text', () => {
        const actual = service.getText(xml, '/root/propA');
        expect(actual).toBe('valA');
      });
    });

    describe('an xpath that doesn\'t match a node', () => {
      it('should be returned undefined', () => {
        const actual = service.getText(xml, '/root/missingProp');
        expect(actual).toBeUndefined();
      });
    });
  });

  describe('when you call hasNode with', () => {
    let service: XmlParserService;
    let xml: XMLDocument;
    beforeEach(() => {
      service = TestBed.get(XmlParserService);
      xml = service.createDocument(`<root>
        <propA>valA</propA>
        <multiProp>valMulti0</multiProp>
        <multiProp>valMulti1</multiProp>
        </root>`)
    });

    describe('an xpath that matches a single node', () => {
      it('should be return true', () => {
        const actual = service.hasNode(xml, '/root/propA');
        expect(actual).toBeTruthy();
      });
    });

    describe('an xpath that doesn\'t match any node', () => {
      it('should be returned false', () => {
        const actual = service.hasNode(xml, '/root/missingProp');
        expect(actual).toBeFalsy();
      });
    });

    describe('an xpath that matches a list of nodes', () => {
      it('should be returned true', () => {
        const actual = service.hasNode(xml, '//multiProp');
        expect(actual).toBeTruthy();
      });
    });
  });

});
