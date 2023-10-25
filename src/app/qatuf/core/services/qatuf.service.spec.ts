import { TestBed } from '@angular/core/testing';

import { QatufService } from './qatuf.service';

describe('QatufService', () => {
  let service: QatufService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QatufService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
