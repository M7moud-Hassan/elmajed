import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCarousalHomeComponent } from './item-carousal-home.component';

describe('ItemCarousalHomeComponent', () => {
  let component: ItemCarousalHomeComponent;
  let fixture: ComponentFixture<ItemCarousalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCarousalHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCarousalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
