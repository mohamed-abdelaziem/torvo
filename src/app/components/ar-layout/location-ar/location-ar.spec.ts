import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAr } from './location-ar';

describe('LocationAr', () => {
  let component: LocationAr;
  let fixture: ComponentFixture<LocationAr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationAr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationAr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
