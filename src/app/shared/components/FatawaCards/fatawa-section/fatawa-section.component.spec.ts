import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatawaSectionComponent } from './fatawa-section.component';

describe('FatawaSectionComponent', () => {
  let component: FatawaSectionComponent;
  let fixture: ComponentFixture<FatawaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatawaSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatawaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
