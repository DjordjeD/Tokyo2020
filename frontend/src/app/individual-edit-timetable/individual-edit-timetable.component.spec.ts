import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualEditTimetableComponent } from './individual-edit-timetable.component';

describe('IndividualEditTimetableComponent', () => {
  let component: IndividualEditTimetableComponent;
  let fixture: ComponentFixture<IndividualEditTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualEditTimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEditTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
