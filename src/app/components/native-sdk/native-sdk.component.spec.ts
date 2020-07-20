import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeSdkComponent } from './native-sdk.component';

describe('NativeSdkComponent', () => {
  let component: NativeSdkComponent;
  let fixture: ComponentFixture<NativeSdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeSdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
