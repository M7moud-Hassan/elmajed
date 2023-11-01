import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatawaPreferredCardComponent } from './fatawa-preferred-card.component';

describe('FatawaPreferredCardComponent', () => {
  let component: FatawaPreferredCardComponent;
  let fixture: ComponentFixture<FatawaPreferredCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatawaPreferredCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatawaPreferredCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
