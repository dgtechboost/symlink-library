import { TestBed } from '@angular/core/testing';

import { DgLibraryService } from './dg-library.service';

describe('DgLibraryService', () => {
  let service: DgLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
