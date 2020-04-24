import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetheatreComponent } from './managetheatre.component';

describe('ManagetheatreComponent', () => {
  let component: ManagetheatreComponent;
  let fixture: ComponentFixture<ManagetheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagetheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
