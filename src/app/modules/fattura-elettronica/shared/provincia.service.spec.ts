import { TestBed, inject } from '@angular/core/testing';

import { ProvinciaService } from './provincia.service';

describe('ProvinciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvinciaService]
    });
  });

  it('should be created', inject([ProvinciaService], (service: ProvinciaService) => {
    expect(service).toBeTruthy();
  }));
});
