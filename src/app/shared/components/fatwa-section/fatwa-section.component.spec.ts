import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatwaSectionComponent } from './fatwa-section.component';

describe('FatwaSectionComponent', () => {
  let component: FatwaSectionComponent;
  let fixture: ComponentFixture<FatwaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatwaSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatwaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
