import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingEn } from './pricing-en';

describe('PricingEn', () => {
  let component: PricingEn;
  let fixture: ComponentFixture<PricingEn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingEn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingEn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
