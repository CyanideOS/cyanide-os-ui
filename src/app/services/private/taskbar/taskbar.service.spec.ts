import { TestBed } from "@angular/core/testing";

import { topbarService } from "./topbar.service";

describe("topbarService", () => {
  let service: topbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(topbarService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
