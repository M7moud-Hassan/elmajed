import { TestBed } from '@angular/core/testing';

import { FatawaService } from './fatawa.service';

describe('FatawaService', () => {
  let service: FatawaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FatawaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
