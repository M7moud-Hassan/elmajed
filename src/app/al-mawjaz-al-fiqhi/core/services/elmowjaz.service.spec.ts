import { TestBed } from '@angular/core/testing';

import { ElmowjazService } from './elmowjaz.service';

describe('ElmowjazService', () => {
  let service: ElmowjazService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElmowjazService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
