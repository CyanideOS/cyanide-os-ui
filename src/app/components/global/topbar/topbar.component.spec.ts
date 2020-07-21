import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { topbarComponent } from "./topbar.component";

describe("topbarComponent", () => {
  let component: topbarComponent;
  let fixture: ComponentFixture<topbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [topbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(topbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
