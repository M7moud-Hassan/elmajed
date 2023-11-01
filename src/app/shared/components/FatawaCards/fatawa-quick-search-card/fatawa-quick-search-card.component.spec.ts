import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatawaQuickSearchCardComponent } from './fatawa-quick-search-card.component';

describe('FatawaQuickSearchCardComponent', () => {
  let component: FatawaQuickSearchCardComponent;
  let fixture: ComponentFixture<FatawaQuickSearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatawaQuickSearchCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatawaQuickSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
