import { TestBed } from '@angular/core/testing';

import { StartupManagerService } from './startup-manager.service';

describe('StartupManagerService', () => {
  let service: StartupManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartupManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
