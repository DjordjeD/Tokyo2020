import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewDisciplinesComponent } from './overview-disciplines.component';

describe('OverviewDisciplinesComponent', () => {
  let component: OverviewDisciplinesComponent;
  let fixture: ComponentFixture<OverviewDisciplinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewDisciplinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewDisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
