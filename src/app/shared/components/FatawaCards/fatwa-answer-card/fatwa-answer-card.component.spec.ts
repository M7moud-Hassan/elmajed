import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatwaAnswerCardComponent } from './fatwa-answer-card.component';

describe('FatwaAnswerCardComponent', () => {
  let component: FatwaAnswerCardComponent;
  let fixture: ComponentFixture<FatwaAnswerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatwaAnswerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatwaAnswerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
