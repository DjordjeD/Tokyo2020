import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegatePageComponent } from './delegate-page.component';

describe('DelegatePageComponent', () => {
  let component: DelegatePageComponent;
  let fixture: ComponentFixture<DelegatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelegatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
