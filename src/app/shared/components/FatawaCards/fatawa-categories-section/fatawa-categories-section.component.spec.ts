import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatawaCategoriesSectionComponent } from './fatawa-categories-section.component';

describe('FatawaCategoriesSectionComponent', () => {
  let component: FatawaCategoriesSectionComponent;
  let fixture: ComponentFixture<FatawaCategoriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatawaCategoriesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatawaCategoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
