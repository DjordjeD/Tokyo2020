import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalDelegationComponent } from './national-delegation.component';

describe('NationalDelegationComponent', () => {
  let component: NationalDelegationComponent;
  let fixture: ComponentFixture<NationalDelegationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalDelegationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalDelegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
