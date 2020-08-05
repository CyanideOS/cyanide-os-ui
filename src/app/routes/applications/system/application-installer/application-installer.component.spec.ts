import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationInstallerComponent } from './application-installer.component';

describe('ApplicationInstallerComponent', () => {
  let component: ApplicationInstallerComponent;
  let fixture: ComponentFixture<ApplicationInstallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationInstallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationInstallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
