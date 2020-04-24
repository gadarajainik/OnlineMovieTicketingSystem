import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetheatresComponent } from './managetheatres.component';

describe('ManagetheatresComponent', () => {
  let component: ManagetheatresComponent;
  let fixture: ComponentFixture<ManagetheatresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagetheatresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetheatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
