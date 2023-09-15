import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmsComponent } from './firms.component';

describe('FirmsComponent', () => {
  let component: FirmsComponent;
  let fixture: ComponentFixture<FirmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirmsComponent]
    });
    fixture = TestBed.createComponent(FirmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
