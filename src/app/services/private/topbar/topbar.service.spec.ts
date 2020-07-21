import { TestBed } from "@angular/core/testing";

import { TopbarService } from "./topbar.service";

describe("topbarService", () => {
  let service: topbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopbarService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
