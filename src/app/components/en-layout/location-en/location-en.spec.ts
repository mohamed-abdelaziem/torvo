import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEn } from './location-en';

describe('LocationEn', () => {
  let component: LocationEn;
  let fixture: ComponentFixture<LocationEn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationEn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationEn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
