import { TestBed } from '@angular/core/testing';

import { OpenCloseHistoryService } from './open-close-history.service';

describe('OpenCloseHistoryService', () => {
  let service: OpenCloseHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenCloseHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
