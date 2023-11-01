import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatawaButtonCardComponent } from './fatawa-button-card.component';

describe('FatawaButtonCardComponent', () => {
  let component: FatawaButtonCardComponent;
  let fixture: ComponentFixture<FatawaButtonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatawaButtonCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatawaButtonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
