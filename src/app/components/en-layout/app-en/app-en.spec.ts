import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEn } from './app-en';

describe('AppEn', () => {
  let component: AppEn;
  let fixture: ComponentFixture<AppEn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppEn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
