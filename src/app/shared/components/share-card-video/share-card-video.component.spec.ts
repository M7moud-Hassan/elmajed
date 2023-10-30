import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCardVideoComponent } from './share-card-video.component';

describe('ShareCardVideoComponent', () => {
  let component: ShareCardVideoComponent;
  let fixture: ComponentFixture<ShareCardVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareCardVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareCardVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
