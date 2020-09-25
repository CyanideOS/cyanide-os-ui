import { TestBed } from '@angular/core/testing';

import { MemoryManagerService } from './memory-manager.service';

describe('MemoryManagerService', () => {
  let service: MemoryManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
