import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionAr } from './opinion-ar';

describe('OpinionAr', () => {
  let component: OpinionAr;
  let fixture: ComponentFixture<OpinionAr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpinionAr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpinionAr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
