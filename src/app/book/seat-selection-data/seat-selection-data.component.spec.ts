import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatSelectionDataComponent } from './seat-selection-data.component';

describe('SeatSelectionDataComponent', () => {
  let component: SeatSelectionDataComponent;
  let fixture: ComponentFixture<SeatSelectionDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatSelectionDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatSelectionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
