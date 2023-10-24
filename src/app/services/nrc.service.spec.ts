import { TestBed } from '@angular/core/testing';

import { NrcService } from './nrc.service';

describe('NrcService', () => {
  let service: NrcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NrcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
