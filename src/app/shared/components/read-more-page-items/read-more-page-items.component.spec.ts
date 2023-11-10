import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMorePageItemsComponent } from './read-more-page-items.component';

describe('ReadMorePageItemsComponent', () => {
  let component: ReadMorePageItemsComponent;
  let fixture: ComponentFixture<ReadMorePageItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMorePageItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadMorePageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
