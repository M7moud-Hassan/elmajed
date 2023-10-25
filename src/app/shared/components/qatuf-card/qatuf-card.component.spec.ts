import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QatufCardComponent } from './qatuf-card.component';

describe('QatufCardComponent', () => {
  let component: QatufCardComponent;
  let fixture: ComponentFixture<QatufCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QatufCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QatufCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
