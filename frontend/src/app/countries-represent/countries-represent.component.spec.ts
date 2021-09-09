import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesRepresentComponent } from './countries-represent.component';

describe('CountriesRepresentComponent', () => {
  let component: CountriesRepresentComponent;
  let fixture: ComponentFixture<CountriesRepresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesRepresentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesRepresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
