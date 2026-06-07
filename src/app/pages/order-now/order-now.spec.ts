import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNow } from './order-now';

describe('OrderNow', () => {
  let component: OrderNow;
  let fixture: ComponentFixture<OrderNow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderNow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderNow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
