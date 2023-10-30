import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioAndVideoComponent } from './audio-and-video.component';

describe('AudioAndVideoComponent', () => {
  let component: AudioAndVideoComponent;
  let fixture: ComponentFixture<AudioAndVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioAndVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioAndVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
