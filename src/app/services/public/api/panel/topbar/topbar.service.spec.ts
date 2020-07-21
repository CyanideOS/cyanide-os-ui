import { TestBed } from '@angular/core/testing';

import { TopbarPanelService } from './topbar.service';

describe('TopbarPanelService', () => {
  let service: TopbarPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopbarPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
