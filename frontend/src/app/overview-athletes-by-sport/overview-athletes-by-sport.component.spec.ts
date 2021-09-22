import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewAthletesBySportComponent } from './overview-athletes-by-sport.component';

describe('OverviewAthletesBySportComponent', () => {
  let component: OverviewAthletesBySportComponent;
  let fixture: ComponentFixture<OverviewAthletesBySportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewAthletesBySportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewAthletesBySportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
