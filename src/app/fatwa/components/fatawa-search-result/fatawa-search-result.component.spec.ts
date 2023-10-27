import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatawaSearchResultComponent } from './fatawa-search-result.component';

describe('FatawaSearchResultComponent', () => {
  let component: FatawaSearchResultComponent;
  let fixture: ComponentFixture<FatawaSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatawaSearchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatawaSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
