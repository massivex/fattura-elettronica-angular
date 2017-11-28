import { TestBed, inject } from '@angular/core/testing';

import { FatturaElettronicaParserService } from './fattura-elettronica-parser.service';
import { XmlParserService } from './xml-parser.service';

describe('FatturaElettronicaParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ FatturaElettronicaParserService, XmlParserService ]
    });
  });

  it('should be created', inject([FatturaElettronicaParserService], (service: FatturaElettronicaParserService) => {
    expect(service).toBeTruthy();
  }));
});
