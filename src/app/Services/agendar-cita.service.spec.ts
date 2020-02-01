import { TestBed } from '@angular/core/testing';

import { AgendarCitaService } from './agendar-cita.service';

describe('AgendarCitaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgendarCitaService = TestBed.get(AgendarCitaService);
    expect(service).toBeTruthy();
  });
});
