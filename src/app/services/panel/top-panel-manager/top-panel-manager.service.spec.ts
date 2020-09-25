import { TestBed } from '@angular/core/testing';

import { TopPanelManagerService } from './top-panel-manager.service';

describe('TopPanelManagerService', () => {
  let service: TopPanelManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopPanelManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
