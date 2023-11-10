import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoreCarouselCardComponent } from './read-more-carousel-card.component';

describe('ReadMoreCarouselCardComponent', () => {
  let component: ReadMoreCarouselCardComponent;
  let fixture: ComponentFixture<ReadMoreCarouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMoreCarouselCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadMoreCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
