import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentertxtComponent } from './centertxt.component';

describe('CentertxtComponent', () => {
  let component: CentertxtComponent;
  let fixture: ComponentFixture<CentertxtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentertxtComponent]
    });
    fixture = TestBed.createComponent(CentertxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
