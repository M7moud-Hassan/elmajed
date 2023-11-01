import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatawaQuestionCardComponent } from './fatawa-question-card.component';

describe('FatawaQuestionCardComponent', () => {
  let component: FatawaQuestionCardComponent;
  let fixture: ComponentFixture<FatawaQuestionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatawaQuestionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatawaQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
