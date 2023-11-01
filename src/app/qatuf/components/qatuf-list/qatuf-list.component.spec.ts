import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QatufListComponent } from './qatuf-list.component';

describe('QatufListComponent', () => {
  let component: QatufListComponent;
  let fixture: ComponentFixture<QatufListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QatufListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QatufListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
