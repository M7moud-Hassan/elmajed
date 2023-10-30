import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCarousalHome2Component } from './item-carousal-home2.component';

describe('ItemCarousalHome2Component', () => {
  let component: ItemCarousalHome2Component;
  let fixture: ComponentFixture<ItemCarousalHome2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCarousalHome2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCarousalHome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
