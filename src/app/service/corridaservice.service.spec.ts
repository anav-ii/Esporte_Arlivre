import { TestBed } from '@angular/core/testing';

import { CorridaserviceService } from './corridaservice.service';

describe('CorridaserviceService', () => {
  let service: CorridaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorridaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
