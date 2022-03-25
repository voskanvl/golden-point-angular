import { TestBed } from '@angular/core/testing';

import { PreviousDaysServiceService } from './previous-days-service.service';

describe('PreviousDaysServiceService', () => {
  let service: PreviousDaysServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousDaysServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
