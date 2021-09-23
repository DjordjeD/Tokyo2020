import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAthletesByDisciplineComponent } from './view-athletes-by-discipline.component';

describe('ViewAthletesByDisciplineComponent', () => {
  let component: ViewAthletesByDisciplineComponent;
  let fixture: ComponentFixture<ViewAthletesByDisciplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAthletesByDisciplineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAthletesByDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
