import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoVidComponent } from './demo-vid.component';

describe('DemoVidComponent', () => {
  let component: DemoVidComponent;
  let fixture: ComponentFixture<DemoVidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoVidComponent]
    });
    fixture = TestBed.createComponent(DemoVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
