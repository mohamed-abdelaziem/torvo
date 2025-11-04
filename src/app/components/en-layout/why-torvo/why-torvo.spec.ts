import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTorvo } from './why-torvo';

describe('WhyTorvo', () => {
  let component: WhyTorvo;
  let fixture: ComponentFixture<WhyTorvo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyTorvo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyTorvo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
