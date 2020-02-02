import { TestBed } from '@angular/core/testing';

import { EspcialistaService } from './espcialista.service';

describe('EspcialistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EspcialistaService = TestBed.get(EspcialistaService);
    expect(service).toBeTruthy();
  });
});
