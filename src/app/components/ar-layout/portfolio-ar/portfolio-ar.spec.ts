import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAr } from './portfolio-ar';

describe('PortfolioAr', () => {
  let component: PortfolioAr;
  let fixture: ComponentFixture<PortfolioAr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioAr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioAr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
