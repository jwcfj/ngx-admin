import { TestBed } from '@angular/core/testing';

import { AlternativaService } from './alternativa.service';

describe('AlternativaService', () => {
  let service: AlternativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlternativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
