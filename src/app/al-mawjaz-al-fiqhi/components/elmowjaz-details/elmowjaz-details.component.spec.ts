import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmowjazDetailsComponent } from './elmowjaz-details.component';

describe('ElmowjazDetailsComponent', () => {
  let component: ElmowjazDetailsComponent;
  let fixture: ComponentFixture<ElmowjazDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElmowjazDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElmowjazDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
