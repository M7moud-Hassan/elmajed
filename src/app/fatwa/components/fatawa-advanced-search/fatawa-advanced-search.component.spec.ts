import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatawaAdvancedSearchComponent } from './fatawa-advanced-search.component';

describe('FatawaAdvancedSearchComponent', () => {
  let component: FatawaAdvancedSearchComponent;
  let fixture: ComponentFixture<FatawaAdvancedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatawaAdvancedSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatawaAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
