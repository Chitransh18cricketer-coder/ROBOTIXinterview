import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiVidComponent } from './multi-vid.component';

describe('MultiVidComponent', () => {
  let component: MultiVidComponent;
  let fixture: ComponentFixture<MultiVidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiVidComponent]
    });
    fixture = TestBed.createComponent(MultiVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
