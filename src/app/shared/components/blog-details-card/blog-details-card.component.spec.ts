import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsCardComponent } from './blog-details-card.component';

describe('BlogDetailsCardComponent', () => {
  let component: BlogDetailsCardComponent;
  let fixture: ComponentFixture<BlogDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
