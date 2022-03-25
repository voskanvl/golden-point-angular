import { TestBed } from '@angular/core/testing';

import { CBRService } from './cbr.service';

describe('CBRService', () => {
  let service: CBRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CBRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
