import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayToursComponent } from './display-tours.component';

describe('DisplayToursComponent', () => {
  let component: DisplayToursComponent;
  let fixture: ComponentFixture<DisplayToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
