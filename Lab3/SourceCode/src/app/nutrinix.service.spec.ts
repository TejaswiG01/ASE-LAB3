import { TestBed } from '@angular/core/testing';

import { NutrinixService } from './nutrinix.service';

describe('NutrinixService', () => {
  let service: NutrinixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutrinixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
