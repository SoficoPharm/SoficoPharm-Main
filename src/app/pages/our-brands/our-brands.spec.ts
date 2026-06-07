import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBrands } from './our-brands';

describe('OurBrands', () => {
  let component: OurBrands;
  let fixture: ComponentFixture<OurBrands>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurBrands]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurBrands);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
