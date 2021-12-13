import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesListItemDetailsComponent } from './countries-list-item-details.component';

describe('CountriesListItemDetailsComponent', () => {
  let component: CountriesListItemDetailsComponent;
  let fixture: ComponentFixture<CountriesListItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesListItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
