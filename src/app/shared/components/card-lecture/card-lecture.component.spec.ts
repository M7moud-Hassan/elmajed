import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLectureComponent } from './card-lecture.component';

describe('CardLectureComponent', () => {
  let component: CardLectureComponent;
  let fixture: ComponentFixture<CardLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLectureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
