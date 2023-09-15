import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualComponentComponent } from './virtual-component.component';

describe('VirtualComponentComponent', () => {
  let component: VirtualComponentComponent;
  let fixture: ComponentFixture<VirtualComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualComponentComponent]
    });
    fixture = TestBed.createComponent(VirtualComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
