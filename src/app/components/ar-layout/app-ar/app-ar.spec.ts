import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAr } from './app-ar';

describe('AppAr', () => {
  let component: AppAr;
  let fixture: ComponentFixture<AppAr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
