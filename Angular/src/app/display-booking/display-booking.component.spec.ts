import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBookingComponent } from './display-booking.component';

describe('DisplayBookingComponent', () => {
  let component: DisplayBookingComponent;
  let fixture: ComponentFixture<DisplayBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
