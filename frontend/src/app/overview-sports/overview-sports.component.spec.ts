import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSportsComponent } from './overview-sports.component';

describe('OverviewSportsComponent', () => {
  let component: OverviewSportsComponent;
  let fixture: ComponentFixture<OverviewSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
