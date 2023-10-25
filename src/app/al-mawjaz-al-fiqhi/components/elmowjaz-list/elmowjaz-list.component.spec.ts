import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmowjazListComponent } from './elmowjaz-list.component';

describe('ElmowjazListComponent', () => {
  let component: ElmowjazListComponent;
  let fixture: ComponentFixture<ElmowjazListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElmowjazListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElmowjazListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
