import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertResultsIndividualComponent } from './insert-results-individual.component';

describe('InsertResultsIndividualComponent', () => {
  let component: InsertResultsIndividualComponent;
  let fixture: ComponentFixture<InsertResultsIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertResultsIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertResultsIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
