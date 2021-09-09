import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalsRepresentComponent } from './medals-represent.component';

describe('MedalsRepresentComponent', () => {
  let component: MedalsRepresentComponent;
  let fixture: ComponentFixture<MedalsRepresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedalsRepresentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedalsRepresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
